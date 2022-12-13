import { helpers } from '../helpers'
import { storeLocally } from '../io/download'
import { request } from '../http/request'
import { mockData } from '../_mock_'
import { getApiHeaders } from './config'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all audits')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}audits?limit=1000&depth=6`, getApiHeaders())
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.audits.docs
  return docs
}

const transformDoc = async (doc) => {
  return {
    id: doc.id,
    heading: doc.heading,
    title: doc.title,
    slug: doc.slug,
    intro: doc.intro,
    description: {
      html: doc.descriptionHtml
    },
    report: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.report.filename}`, 'pdfs'),
    reportAlt: doc.report.alt,
    startDate: doc.startDate,
    endDate: doc.endDate,
    badges: JSON.parse(doc.badges || '[]'),
    partner: {
      name: doc.partner.name,
      slug: doc.partner.slug,
      logo: {
        alt: doc.partner.logo.alt,
        description: doc.partner.logo.description,
        identifier: doc.partner.logo.identifier,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.partner.logo.filename}`, 'images')
      },
      icon: {
        alt: doc.partner.icon.alt,
        description: doc.partner.icon.description,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.partner.icon.filename}`, 'images')
      }
    },
    meta: {
      title: doc.meta.title,
      description: doc.meta.description,
      image: {
        src: await helpers.storeOgImage(doc?.meta?.image?.filename),
        alt: helpers.getOgImageAlt(doc?.meta?.image?.alt)
      }
    }
  }
}

export const getAudits = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => await transformDoc(doc)))

    return result.map(x => x.value)
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getSingleAudit = async (slug) => {
  try {
    const docs = await getDocs()

    const match = docs.find(doc => doc.slug === slug)

    return transformDoc(match)
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getAuditSlugs = async () => {
  try {
    const docs = await getDocs()

    const result = docs.map((doc) => doc.slug).filter(x => !!x)

    return result
  } catch (error) {
    console.error(error)
  }

  return []
}
