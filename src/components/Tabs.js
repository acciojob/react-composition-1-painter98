import React,{useState} from 'react';

function Tabs(tabs){

    let array = tabs.tabs;

    
let [content,setcontent] = useState(array[0].title);

function clicking(e){
  setcontent(e.target.innerText);
 // console.log(e.target.innerText);
}

//console.log(tabs.tabs);
    return (
        <>
            <ul>
                {
                array.map((value)=>{
                return <li onClick={clicking}>{value.title}</li>
                })
                }
                
            </ul>
            <div>This is the content for {content}</div>
        </>
    )
}

export default Tabs;