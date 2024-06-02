import { Link } from "react-router-dom"
import assets from "../assets"
import "./index.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
export const ArrowButton = ({ nextIcon, prevIcon, path }) => {
    return (
        <Link className="arrow__btn" to={path}>
            {nextIcon ? <img src={assets.nextIcon} alt="next icon" /> : <img src={assets.prevIcon} alt="prev icon" />}
        </Link>
    )
}
