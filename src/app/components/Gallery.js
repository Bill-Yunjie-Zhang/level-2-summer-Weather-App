import React from 'react'
import ImageGallery from 'react-image-gallery'
import photos from '../data/photos'

class MyGallery extends React.Component{
    render(){
        return <ImageGallery items={photos} />
    }
}

export default MyGallery