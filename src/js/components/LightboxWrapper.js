import React from "react";
import { connect } from "react-redux";
import  Lightbox  from 'react-image-lightbox';

const LightboxWrapper = React.createClass({
  getInitialState() {
    return {
      images:[
          'http://placekitten.com/1500/500',
          'http://placekitten.com/4000/3000',
          'http://placekitten.com/800/1200',
          'http://placekitten.com/1500/1500'
      ],
       index: 0,
       isOpen: false
    };
  },

  openLightbox(key) {
    this.setState({index: key});
    this.setState({ isOpen: true });
  },
  closeLightbox() {
      this.setState({index: 0});
      this.setState({ isOpen: false });
  },
  moveNext() {
      this.setState({ index: (this.state.index + 1) % this.state.images.length });
  },
  movePrev() {
      this.setState({ index: (this.state.index + this.state.images.length - 1) % this.state.images.length });
  },
  render() {
    const { index, images } = this.state;
    const lightbox =
                <Lightbox
                    mainSrc={images[index]}
                    nextSrc={images[(index + 1) % images.length]}
                    prevSrc={images[(index + images.length - 1) % images.length]}

                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={this.movePrev}
                    onMoveNextRequest={this.moveNext}
                />;
    const photoGrid = images.map((value, key) => {
      return <figure key={key} className="photo"><img key={key} src={value} onClick={() =>{ this.openLightbox(key)} } /></figure>
    });
    return <div className="photoGrid">
        {photoGrid}
        {this.state.isOpen ? lightbox : null}
      </div>
  }
});
export default LightboxWrapper;
