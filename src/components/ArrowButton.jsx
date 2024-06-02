import { Link } from "react-router-dom"
import assets from "../assets"
import "./index.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
export const ArrowButton = ({ nextIcon, prevIcon, path, text }) => {
    return (
        <Link className="arrow__btn" to={path}>
            {nextIcon && (<div className="icon__box"><img src={assets.nextIcon} alt="" /></div>)}
            {prevIcon && (<div className="icon__box"><img src={assets.prevIcon} alt="" /></div>)}
            <span>{text}</span>
        </Link >
    )
}
