import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateChange = () => {
    this.state.settings.bitrate = 12
  }

  handleVideoSettingsResolution = () => {
    this.state.settings.video.resolution = '720p'
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateChange}></button>
        <button className='resolution' onClick={this.handleVideoSettingsResolution}></button>
      </div>
    )
  }
}

export default YouTubeDebugger;
