// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  let value = useRef();
  let gender = useRef();
  let role = useRef();
  let marit = useRef();
  let[val,setval]=useState();
  // let setvalue = () => {
  //   console.log(value.current.value);
  // };
  // console.log(value)
  let start =(e)=>{
    setval(val=value.current.value)
    alert(`<=======================>
    name => ${val}
    gender => ${gender.current.value}
    role => ${role.current.value}
    marital status => ${marit.current.value}`)
    e.preventDefault()
    value.current.value = '';
    gender.current.value = 'a';
    role.current.value = 'a';
    marit.current.value = 'a';
    value.current.focus();
  }
  return (
    <div className="App">
      <div className="box">
        <div className="main" >
          <div >
            <form onSubmit={start}>
            <input ref={value} placeholder="Enter Your Name"/>
            <select name="gender" ref={gender}>
              <option value="a">---------</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="none">none of above</option>
            </select>
            <select name="role" ref={role}>
              <option value="a">---------</option>
              <option value="manger">manager</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
            </select>
            <select name="marit" ref={marit}>
              <option value="a">---------</option>
              <option value="marit">marit</option>
              <option value="non-marit">non-marit</option>
            </select>
            <input type="submit" value="click" className="sub"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
