import assets from "../../assets"
import { ArrowButton, Button } from "../../components"

export const AllDone = () => {
  return (
    <div className="register__page">
      <div>
        <ArrowButton path='/register-full-name' text='Registration' prevIcon={true} />
        <h1 className="register__title">All is done!</h1>
        <img className="prize__icon" src={assets.prizeIcon} alt="prize icon" width={125} height={125} />
      </div>
      <Button text='Start using BubbleChat' to='/user-profile' />
    </div>
  )
}
