import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

interface Images {
  images: {}[],
}

const ImageList = ({images}: Images) => {
  const imageResults =  images.map((image: any) => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{imageResults}</div>
};

export default ImageList;
