import {NavLink} from "react-router-dom";
import React from "react";
import d from  './Dialog.module.css'

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    let css
    if (props.css == "activ"){
        css = d.dialog + ' ' + d.active
    }
    else {
        css = d.dialog
    }
    return (
        <div className={css}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;