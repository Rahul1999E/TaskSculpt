import React,{ useState } from 'react';
import './navbar.css';
import { useDispatch } from 'react-redux';
import { createAction } from '../Features/userDetailslice';
// import { useNavigate } from 'react-router-dom';


function Card() {

   const [input, setInput] = useState({
      name : "",
      email : "",
      age : "",
      gender :"",
   })

  //  const navigate = useNavigate();

   const handleInput = (event)=>{

    const {value,name} = event.target;

    setInput({...input, [name]: value})

  }

  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
     e.preventDefault();
     console.log("handlesubS")
     dispatch(createAction(input));
    //  navigate("/read");
    setInput({
      name: "",
      email: "",
      age: "",
      gender: "",
    });
    alert("your form has been submitted");
  }

  return (
    <>
     <form className="form-container">
  <div className="form-group" style={{marginTop: '2.5rem'}}>
    <label for="exampleInputEmail1">Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" name="name" value={input.name} onChange={handleInput}/>
  </div>
  <div className="form-group" style={{marginTop: '2.5rem'}}>
    <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" value={input.email} onChange={handleInput} name="email"/>
  </div>
  <div className="form-group" style={{marginTop: '2.5rem'}}>
    <label>Age</label>
    <input type="number" className="form-control" placeholder="Enter Age" name="age" value={input.age} onChange={handleInput}/>
  </div>

  <div className="custom-control custom-radio"style={{marginTop: '2.5rem'}}>
  <input type="radio" id="customRadio1"  className="custom-control-input" name="gender" value="male" onChange={handleInput}/>
  <label className="custom-control-label" for="customRadio1">Male</label>
</div>
<div className="custom-control custom-radio" >
  <input type="radio" id="customRadio2" name="gender" className="custom-control-input" value="female" onChange={handleInput}/>
  <label className="custom-control-label" for="customRadio2">Female</label>
</div>

  <button type="submit" className="btn btn-primary" id="button" onClick={handleSubmit}>Submit</button>
  </form>

    </>
  );
}

export default Card;
