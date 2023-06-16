import React,{useState} from 'react';

function Tabs(tabs){

    let array = tabs.tabs;

    
let [content,setcontent] = useState(array[0].title);

//console.log(tabs.tabs);
    return (
        <>
            <ul>
                {
                array.map((value)=>{
                return <li onClick={(e)=>setcontent(e.target.innerText)}>{value.title}</li>
                })
                }
                
            </ul>
            <div>This is the content for {content}</div>
        </>
    )
}

export default Tabs;