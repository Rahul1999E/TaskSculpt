import React from 'react'
import { useSelector } from 'react-redux'


function Singlecard({setShow,id}) {
    const { user } = useSelector((state)=>state.app);

    const allUser = user.filter((elem)=> elem.id === id)

  return (
    <>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Name : {allUser[0].name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Email : {allUser[0].email}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Gender : {allUser[0].gender}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Age : {allUser[0].age}</h6>
    <button id="post-button" onClick={()=>setShow(false)}>Close</button>
  </div>
</div> 

    </>
  )
}

export default Singlecard