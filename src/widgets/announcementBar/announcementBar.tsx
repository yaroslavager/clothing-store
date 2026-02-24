import "./announcementBar.css"
import { useState } from "react"
function AnnouncementBar(){
const [state, setState]=useState(()=>{
const saved= localStorage.getItem("announcement");
return saved !== null ? JSON.parse(saved) : true ;

})

const closeBar=()=>{
setState(false);
localStorage.setItem("announcement", JSON.stringify(false))
}


if(!state) return null
    return(

<div className="announcement-bar">
    <div className="announcement-bar__container">
<p className="announcement-bar__text">Sign up and get 20% off to your first order. <span className="announcement-bar__link">Sign Up Now</span>  </p> 
<img className="announcement-bar__icon" src="/annBarExit.svg" alt="close announcement bar" onClick={closeBar} />
</div>
</div>



    )
}
export default AnnouncementBar