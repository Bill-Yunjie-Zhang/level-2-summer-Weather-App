import React from 'react'
import ImageGallery from 'react-image-gallery'
import photos from '../data/photos'
import "react-image-gallery/styles/css/image-gallery.css";


class MyGallery extends React.Component{
    render(){
        return <ImageGallery items={photos} />
    }
}

export default MyGallery