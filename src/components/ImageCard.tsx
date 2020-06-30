import React, { Component, createRef, RefObject } from 'react';

interface Image {
  key: string,  
  image: {
    id: string,
    description: string,
    urls: {
        regular: string,
    },
  }
}

interface State {
  spans: number,
  imageRef: RefObject<HTMLImageElement>,
}

class ImageCard extends Component<Image, State> {
  constructor(props: Image) {
    super(props);

    this.state = { 
      spans: 0,
      imageRef: createRef(),
    };
  }

  componentDidMount() {
    this.state.imageRef.current?.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.state.imageRef.current?.clientHeight ?? 0;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.state.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
