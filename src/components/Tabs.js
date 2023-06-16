import React,{useState} from 'react';

function Tabs({tabs}){

let [content,setcontent] = useState("Tab 1");

//console.log(tabs.tabs);
    return (
        <div>
            <ul>
                {
                tabs.map((value)=>{
                return <li onClick={()=>setcontent(value.contents)}>{value.titles}</li>
                })
                }
                
            </ul>
            <p>This is the content for {content}.</p>
        </div>
    )
}

export default Tabs;