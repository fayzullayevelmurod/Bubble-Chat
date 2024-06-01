import { ArrowButton } from "../../components"
import './user-profile.css';
export const UserProfile = () => {
  return (
    <div className="user-profile">
      <ArrowButton path='#!' nextIcon={true} />
      <div className="user__box">
        <div className="border__box">
          <div className="user__box-child">
            <span>A</span>
          </div>
        </div>
        <span className="user__name">Aleksandr Polezhaev</span>
      </div>
    </div>
  )
}
