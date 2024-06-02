import assets from "../../assets";
import './capture-screen.css';
// eslint-disable-next-line react/prop-types
export const CaptureScreen = ({ showCamera, setShowCamera }) => {
  return (
    <div className={`capture__screen ${showCamera ? 'show' : ''}`}>
      <div>
        <button className="chat__btn" onClick={() => setShowCamera(false)}>
          <img src={assets.chatIcon} alt="chat icon" width={42} height={42} />
        </button>

        <img className="screen__img" src={assets.photo} alt="photo" />
        <span className="capture__time">67 % / 0:42 sec</span>
      </div>

      <div className="bottom__box">
        <img className="flash__icon" src={assets.flashIcon} alt="" />
        <div className="flex__box">
          <img src={assets.captureImg1} alt="capture img" />
          <div className="capture__btn">
            <div className="capture__btn-box"></div>
          </div>
          <button className="replace__camera-btn">
            <img src={assets.replaceIcon} alt="replace icon" width={21} height={21} />
          </button>
        </div>
      </div>
    </div>
  )
}
