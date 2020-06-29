import React from 'react';
import './ImageList.css';

import ImageCard from './ImageCard';

// interface Props {
//   images: [
//     {id: string},
//   ],
// }

const ImageList = (props: any) => {
  const images = props.images.map((image: any) => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{images}</div>
};

export default ImageList;
