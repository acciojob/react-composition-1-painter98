
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs.js';

const App = () => {
let arr = [
  {title:'Tab 1'},
  {title:'Tab 2'},
  {title:'Tab 3'}
]

  return (
    <>
        {/* Do not remove the main div */}
          <Tabs tabs={arr}/>
    </>
  )
}

export default App;
