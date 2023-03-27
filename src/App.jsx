import React, { useState } from "react";
import Listitems from "./Listitems";
const App=()=>{
    const[item,setItem]=useState('');
    const[itemarray,setArray]=useState([]);
    const inputevent=(e)=>{
        setItem(e.target.value);
    }
    const additem=()=>{
        if(item=='' || item.trim().length==0)
        {
            alert("Nothing entered !");
            setItem('')
            return;
        }
        setArray((old)=>{
            return(
                [...old,item]
            );
        })
        setItem('')
    }
    const deleteitem=(id)=>{
        console.log("Deleted");
        setArray((old)=>{
            return(
                old.filter((arrayitem,index)=>{
                    return index !== id;
                })
            )
        })
    }
    return(
        <>
        <div className="main">
            <div className="central">
                <h1>Things ToDo</h1>
                <input type="text" placeholder="Add tasks" value={item} onChange={inputevent}/>
                <i  id="add" onClick={additem} class="fas fa-check-circle"></i>
                <ul>   
                    {itemarray.map((arrayitem,index)=>{
                        return(<Listitems text={arrayitem}  id={index}
                        onselect={deleteitem}/>)
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}

export default App;