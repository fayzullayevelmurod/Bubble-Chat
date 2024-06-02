import { Link } from 'react-router-dom'
import assets from '../../assets'
import './activity-feed.css'
import { Contact } from '../../components/contact/Contact'
import { useState } from 'react'
export const ActivityFeed = () => {
  const [showContact, setShowContact] = useState(true);

  const handleShowContact = () => {
    setShowContact(!showContact);
  }

  return (
    <>
      <Contact showContact={showContact} setShowContact={setShowContact} />
      <div className='activity__feed'>
        <div className="activity__feed-header">
          <Link>
            <img src={assets.userIcon} alt="user icon" width={30} height={30} />
          </Link>
          <div className='user__friends' onClick={handleShowContact}>
            <img src={assets.usersIcon} alt="users icon" width={27} height={25} />
            <span className='user__friends-text'>My friends</span>
          </div>
          <Link>
            <img src={assets.instagramIcon} alt="instagram icon" width={34} height={34} />
          </Link>
        </div>

        <div className="stories__updates">
          <h1 className='title'>Updates</h1>
          <div className="stories__boxes">
            <div className="stories__box">
              <div className="line__box">
                <div className="stories__bg">
                  <img className='stories__bg-img' src={assets.storyBg1} alt="stories bg" />
                  <div className="stories__content">
                    <div>
                      <img className='user__img' src={assets.userOne} alt="user icon" width={50} height={50} />
                      <span className='user__name'>Mark <br />
                        Batman</span>
                    </div>
                    <div className="stories__date">
                      <span>Today 12:45</span>
                      <img src={assets.watchIcon} alt="watch icon" width={11} height={11} />
                      <span>00:43</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stories__box">
              <div className="line__box">
                <div className="stories__bg">
                  <img className='stories__bg-img' src={assets.storyBg2} alt="stories bg" />
                  <div className="stories__content">
                    <div>
                      <img className='user__img' src={assets.userTwo} alt="user icon" width={50} height={50} />
                      <span className='user__name'>Mark <br />
                        Batman</span>
                    </div>
                    <div className="stories__date">
                      <span>Today 12:45</span>
                      <img src={assets.watchIcon} alt="watch icon" width={11} height={11} />
                      <span>00:43</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="already__seen">
          <h1 className='title'>Already seen</h1>
          <div className='already__seen-parent'>
            <div className="already__seen-boxes">
              <div className="already__seen-box">
                <div className='left__box'>
                  <img className='user__img' src={assets.userOne} alt="user img" width={50} height={50} />
                  <div className='left__box-content'>
                    <span className='user__name'>Olesha Elves</span>
                    <div className='seen__date'>
                      <span>Yesterday at 17:04</span>
                      <img src={assets.doubleCheckIcon} alt="double check icon" width={18} height={14} />
                    </div>
                  </div>
                </div>
                <div className='seen__watched'>
                  <img src={assets.watchIconBlack} alt="watch icon" />
                  <span>00:43</span>
                </div>
              </div>
              <div>
                <div className="seen__stories seen">
                  <img src={assets.seenStories} alt="seen stories" width={53} height={53} />
                </div>
              </div>
            </div>
            <div className="already__seen-boxes">
              <div className="already__seen-box">
                <div className='left__box'>
                  <img className='user__img' src={assets.userOne} alt="user img" width={50} height={50} />
                  <div className='left__box-content'>
                    <span className='user__name'>Chryssi Jeramiah Bartman</span>
                    <div className='seen__date'>
                      <span>Yesterday at 17:04</span>
                      <img src={assets.doubleCheckIcon} alt="double check icon" width={18} height={14} />
                    </div>
                  </div>
                </div>
                <div className='seen__watched'>
                  <img src={assets.watchIconBlack} alt="watch icon" />
                  <span>00:43</span>
                </div>
              </div>
              <div>
                <div className="seen__stories">
                  <img src={assets.seenStories} alt="seen stories" width={53} height={53} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
