import React from "react"
import {Link} from "react-router-dom";
import classes from "./NavigationBar.module.css"

const NavigationBar: React.FC = props =>{
    return(
        <div className = {classes.sidebar}>
            <nav>
                <ul>
                    <li>
                        <Link to = '/'>Add New Property</Link>
                    </li>
                    <li>
                        <Link to = '/managing-property'>Manage Property</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;