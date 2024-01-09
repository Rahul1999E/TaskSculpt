import { useEffect, useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateAction } from '../Features/userDetailslice';


function Editpost() {

  const { user } = useSelector((state) => state.app);
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [updateData, setupdateData] = useState();

  useEffect(() => {
    const singleUser = user.filter((element) => element.id === id);
    setupdateData(singleUser[0]);
  }, [id, user])



  const newData = (e) => {

    setupdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log("this is newdata", updateData);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAction(updateData));
    alert("your form has been submitted");
    navigate("/read");
  }

  return (
    <>
      <div className='edit-container'>
        <form className="form-container">
          <div className="form-group" style={{ marginTop: '2.5rem' }}>
            <label for="exampleInputEmail1">Name</label>
            <input type="name" className="form-control" name="name" value={updateData && updateData.name} onChange={newData} />
          </div>
          <div className="form-group" style={{ marginTop: '2.5rem' }}>
            <label for="exampleInputPassword1">Email</label>
            <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" name="email" value={updateData && updateData.email} onChange={newData} />
          </div>
          <div className="form-group" style={{ marginTop: '2.5rem' }}>
            <label>Age</label>
            <input type="number" className="form-control" placeholder="Enter Age" name="age" value={updateData && updateData.age} />
          </div>
          <div className="custom-control custom-radio" style={{ marginTop: '2.5rem' }}>
            <input type="radio" id="customRadio1" className="custom-control-input" name="gender" value="male" checked={updateData && updateData.gender === 'male'} onChange={newData} />
            <label className="custom-control-label" for="customRadio1" >Male</label>
          </div>
          <div className="custom-control custom-radio" >
            <input type="radio" id="customRadio2" name="gender" className="custom-control-input" value="female" checked={updateData && updateData.gender === 'female'} onChange={newData} />
            <label className="custom-control-label" for="customRadio2">Female</label>
          </div>

          <button type="submit" className="btn btn-primary" id="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Editpost