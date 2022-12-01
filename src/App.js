// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import EditableElement from './components/editableElement';

export default function App() {
  let initialValue = "value";
  const [value, setValue] = useState('value');
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(value));
  }, [value]);

  const handleLoad = () => {
    setValue(JSON.parse(localStorage.getItem('items')))
  }
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="container">
      <EditableElement onLoad={handleLoad} onChange={handleChange}>
        <div style={{ outline: "none" }} className="m-5">
          <p>{initialValue}</p>
        </div>
      </EditableElement>
      {/* <label>{value}</label> */}
    </div>
  );
}

// export default App;