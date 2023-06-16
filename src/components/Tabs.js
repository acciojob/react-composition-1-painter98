import React,{useState} from 'react';

function Tabs(tabs){

    let array = tabs.tabs;

    
let [content,setcontent] = useState("Tab 1");

//console.log(tabs.tabs);
    return (
        <>
            <ul>
                {
                array.map((value)=>{
                return <li onClick={()=>setcontent(value.contents)}>{value.title}</li>
                })
                }
                
            </ul>
            <p>This is the content for {content}</p>
        </>
    )
}

export default Tabs;