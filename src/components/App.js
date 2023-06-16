
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs.js';

const App = () => {
let arr = [
  {titles:'Tab 1',contents:'Tab 1'},
  {titles:'Tab 2',contents:'Tab 2'},
  {titles:'Tab 3',contents:'Tab 3'}
]

  return (
    <>
        {/* Do not remove the main div */}
          <Tabs tabs={arr}/>
    </>
  )
}

export default App;
