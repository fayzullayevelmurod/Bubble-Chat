import { Link } from "react-router-dom"
import './chat.css';
import assets from '../../assets'
export const Chat = () => {
  return (
    <div className="chat__page">
      <div className="chat__header">
        <Link className="go__back">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 7L7 1" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </Link>
        <div className="profile__card">
          <div className="profile__card-content">
            <img src={assets.userOne} alt="" />
            <div>
              <span className="user__name">Olesya Kravets</span>
              <span className="shooting__text">shooting bubble...</span>
            </div>
          </div>
        </div>
        <img src={assets.heartIcon} alt="heart icon" />
      </div>
      <button className="pink__btn">Today</button>
      <div className="messages__box">
        <div className="stories__msg">
          <div className="stories__msg-img">
            <img src={assets.msgStories} alt="msg stories" width={207} height={207} />
          </div>
          <span className="send__date">21:45</span>
        </div>

        <div className="stories__msg">
          <div className="stories__msg-img">
            <img src={assets.msgStories} alt="msg stories" width={207} height={207} />
          </div>
          <span className="send__date">21:45</span>
        </div>
      </div>

      <button className="bottom__btn">
        <img src={assets.cameraIcon} alt="cmera icon" />
      </button>
    </div>
  )
}
