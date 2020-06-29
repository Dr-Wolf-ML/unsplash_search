import React, { Component, createRef } from 'react';

interface Props {
  key: any,
  image: any,
}

interface State {
  spans: number,
  imageRef: any,
}



class ImageCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { 
      spans: 0,
      imageRef: createRef(),
    };

  }

  componentDidMount() {
    this.state.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.state.imageRef.current.clientHeight;

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
