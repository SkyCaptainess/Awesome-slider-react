import React from 'react';
import PropTypes from 'prop-types';

export default class Media extends React.Component {
  static propTypes = {
    media: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
  };
  state = {};
  render() {
    const { media, className } = this.props;

    let background = null;
    if (media.url) {
      if (media.url.match(/\.(mp4|webm)/)) {
        background = (
          <video
            title={media.title}
            src={media.url}
            type="video/mp4"
            controls
          />
        );
      } else {
        // DEFAULTS TO AN IMAGE TAG
        background = (
          <img alt={media.alt || media.title || null} src={media.url} />
        );
      }
    }
    return (
      <div className={className} style={media.style || null}>
        {background}
        {media.children && (
          <div className={media.className || null}>{media.children}</div>
        )}
      </div>
    );
  }
}
