import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">logicCode.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+44 543 43 55</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>logicCode@gmail.com</span>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
