import { storeLocally } from './io/download'
import { mockData } from './_mock_'

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

const getVideoDescHTML = (_desc) => {
  // const html = []

  // desc.children.forEach((el) => {
  //   el
  // });
  return ''
}

const getText = (arr) => {
  const texts = []

  arr.forEach(el => {
    if (el.text) {
      texts.push(el.text)
      return
    }

    return texts.push(getText(el.children))
  })

  return texts.join('')
}

export const getVideos = async () => {
  try {
    //   const dataStr = await request.get(`${process.env.API_URL_PREFIX}videos?limit=3`)
    //   const data = JSON.parse(dataStr)
    const data = mockData.videoList

    const result = await Promise.allSettled(data.docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.thumbnail.filename}`, 'video-thumbnails'),
        videoId: doc.videoId,
        description: {
          html: getVideoDescHTML(doc.description),
          text: getText(doc.description)
        },
        length: doc.length,
        duration: getVideoDurationText(doc.length),
        date: doc.updatedAt || doc.createdAt
      }
    }))

    return result.map(x => x.value)
  } catch (error) {
    console.error(error)
  }

  return []
}
