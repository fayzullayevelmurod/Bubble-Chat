import './contact.css';
import assets from '../../assets/'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export const Contact = ({ showContact, setShowContact }) => {
  return (
    <div className={`contact ${showContact ? 'show' : ''}`}>
      <button className='close__btn' onClick={() => setShowContact(false)}></button>
      <div className='suggestions'>
        <div className="title__box">
          <img src={assets.starsIcon} alt="starts icon" width={20} height={20} />
          <h2>Suggestions</h2>
        </div>
        <div className="contact__boxes">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="contact__box">
              <div className="user__content">
                <div className="user__img">
                  <div className="user__img-box">A</div>
                </div>
                <div className='right__box'>
                  <span className='user__name'>Ivan Ivanovich</span>
                  <div className='flex__box'>
                    <span>Already use Bubble</span>
                    <img src={assets.commentIcon} alt="comment icon" width={10} height={10} />
                  </div>
                </div>
              </div>
              <Link className="send__box">
                <span>Chat</span>
                <img src={assets.airplanIcon} alt="airplan icon" width={12} height={12} />
              </Link>
            </div>
          ))}
        </div>
        <div className='show__more-box'>
          <div className="line"></div>
          <button className='show__more-btn'>Show more</button>
          <div className="line"></div>
        </div>
      </div>
      <div className="me__contacts">
        <div className="title__box">
          <img src={assets.purpleUserIcon} alt="starts icon" width={20} height={20} />
          <h2>Your contacts</h2>
        </div>
        <div className="contact__boxes">
          {Array.from({ length: 13 }).map((_, idx) => (
            <div key={idx} className="contact__box">
              <div className="user__content">
                <div className="user__img">
                  <div className="user__img-box">A</div>
                </div>
                <div className='right__box'>
                  <span className='user__name'>Ivan Ivanovich</span>
                </div>
              </div>
              <Link className="send__box">
                <span>Add</span>
                <img src={assets.plusIcon} alt="plus icon" width={15} height={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
