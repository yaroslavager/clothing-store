import "./colorFilter.scss"
import { colors } from "./colors/colors" 

function ColorFilter(){
    return(
       <div className="color-filter__wrapper">
{colors.map((color)=>(
<label key={color.id}   htmlFor="color-filter__id">
    <input id="color-filter__id" className="color-filter__input" type="checkbox" style={{backgroundColor:color.hex}}/>
</label>
))

}
       </div>
    )
}
export default ColorFilter