import { useLocation } from "react-router-dom";
import { ArrowButton } from "../../components";
import './user-profile.css';

export const UserProfile = () => {
  const location = useLocation();
  const { fullName } = location.state || { fullName: '' };

  return (
    <div className="user-profile">
      <ArrowButton path='/activity-feed' nextIcon={true} />
      <div className="user__box">
        <div className="border__box">
          <div className="user__box-child">
            {fullName ? <span>{fullName.charAt(0)}</span> : <span>A</span>}
          </div>
        </div>
        {fullName ? <span className="user__name">{fullName}</span> : <span className="user__name">Aleksandr Polezhaev</span>}
      </div>
    </div>
  )
}
