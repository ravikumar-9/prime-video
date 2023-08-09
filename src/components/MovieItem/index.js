// Write your code here

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props

  console.log(details)

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img
            src={details.thumbnailUrl}
            className="trigger-image"
            alt="thumbnail"
          />
        }
      >
        {close => (
          <>
            <div>
              <div className="video-container">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
                <div className="responsive-container">
                  <ReactPlayer url={details.videoUrl} />
                </div>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
