import React from 'react';
import Menu from './Menu';
import './App.css';
 let items= [ { 
  text:'Home',
  link:'#',
  active:true 
  } ,
  { 
  text:'Services',
  link:'#',
  active:false ,
  submenu:['For entrepreneurs','For students','For hobbyists']
  } ,
  {
   text:'Contact',
  link:'#',
  active:false
  } 
  ]
function App() {
  return (
    <ul className="App">
     { 
      items.map(el => <Menu data={el} /> )
    }
    </ul>
  );
}
export default App;