import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons" //impoter les icons

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+33 611 22 82 55</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>rjeb.zied2@gmail.com</span>
                    </div>
                    
                </div>
                <div className="right">Menu</div>
            </div>
        </div>
    )
}
