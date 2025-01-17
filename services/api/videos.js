import { helpers } from '../helpers'
import { request } from '../http/request'
import { storeLocally } from '../io/download'
import { getApiHeaders } from './config'
import { env } from '../environment'

const getVideoDurationText = (timestamp) => {
  // 2
  const hours = Math.floor(timestamp / 60 / 60)

  // 37
  const minutes = Math.floor(timestamp / 60) - (hours * 60)

  // 42
  const seconds = timestamp % 60

  const formatted = [hours > 0 && hours, minutes, seconds].filter(x => x !== false).map(x => x.toString().padStart(2, '0')).join(':')

  return {
    formatted,
    text: (hours > 0 ? hours.toString() + ' hours, ' : '') + minutes.toString() + ' minutes, ' + seconds.toString() + ' seconds'
  }
}

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  try {
    console.log('fetching all videos')

    const dataStr = await request.get(`${env.websiteApiServer}/api/videos?limit=1000`, getApiHeaders())
    const data = JSON.parse(dataStr)

    docs = data.docs
    return docs
  } catch (error) {

  }

  return []
}

const transformDoc = async (doc) => {
  const htmlContent = doc.descriptionHtml || ''
  const parsedHtml = await helpers.parseHtml(htmlContent)

  return {
    id: doc.id,
    title: doc.title,
    image: await storeLocally(`${env.fileUrlPrefix}${doc.thumbnail.filename}`, 'images'),
    videoId: doc.videoId,
    sort: doc.sort,
    description: {
      text: parsedHtml.text.substring(0, 56)
    },
    length: doc.length,
    duration: getVideoDurationText(doc.length),
    date: doc.publishedAt || doc.updatedAt || doc.createdAt
  }
}

export const getVideos = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => transformDoc(doc)))

    const allVideos = result.map(x => x.value)

    const latestVideos = allVideos.sort((a, b) => a.sort - b.sort).slice(0, 3)

    return latestVideos
  } catch (error) {
    console.error(error)
  }

  return []
}
