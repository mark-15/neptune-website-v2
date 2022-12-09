import React, { useState } from 'react'
import { VideoModal } from '../components/VideoModal'

const VideosContext = React.createContext(null)

export const VideosProvider = (props) => {
  // Id of selected video
  const [id, setId] = useState(null)
  const [iFrameWidth, setIFrameWidth] = useState(800)

  return (
    <VideosContext.Provider value={{ videos: props.videos, setId, setIFrameWidth }}>
      {props.children}

      <VideoModal videoId={id} iFrameWidth={iFrameWidth} setId={setId} />
    </VideosContext.Provider>
  )
}

export const useVideosContext = () => {
  const context = React.useContext(VideosContext)
  if (context === undefined) {
    throw new Error('useVideosContext must be used within a VideosContextProvider')
  }

  return context
}
