import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(props) {
  return <h1> {props.name}</h1>
}


function App() {
  return (
     //create element (element, where we need to render) arguments(name of tag, propeties, children)
    React.createElement("h1", null, "Hello!" ),
    <div >
     
     <Lake name="Lake Tahoe" />
     <Lake name="Nayagara Lake" />
    </div>
  );
}

ReactDOM.render(
  
  <App/>,
  document.getElementById('root')
);

