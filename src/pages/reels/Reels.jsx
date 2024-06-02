import { useState } from "react";
import assets from "../../assets"
import './reels.css';
import { CaptureScreen } from "../../components";
export const Reels = () => {
  const [showCamera, setShowCamera] = useState(false);

  const handleShowCamera = () => {
    setShowCamera(!showCamera);
  }
  return (
    <>
      <CaptureScreen showCamera={showCamera} setShowCamera={setShowCamera} />
      <div className="reels__page">
        <button className="open__camera-btn" onClick={handleShowCamera}>
          <img src={assets.cameraIcon2} alt="camera icon" width={25} height={25} />
          <span>Go to camera</span>
        </button>

        <div className="reels__filter">
          <button className="recents__btn">
            <span>Recents</span>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="select__btn">
            <img src={assets.copyIcon} alt="copt icon" width={20} height={20} />
            <span>Select</span>
          </button>
        </div>

        <div className="reels__boxes">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div key={idx} className="reels__box">
              <img src={assets.reelsImg1} alt="reels img" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
