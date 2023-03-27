import React from "react";

const Listitems=(props)=>
{
    return(
    <>
    <div className="listitem">
        <i onClick={()=>{
            props.onselect(props.id)
        }}
         class="fas fa-trash-alt"
         id="del">
         </i>
        <li>{props.text}</li>
    </div>
    </>
    )
}

export default Listitems;