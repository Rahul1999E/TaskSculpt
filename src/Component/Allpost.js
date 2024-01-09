import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { showAction,deleteAction } from '../Features/userDetailslice';
import Singlecard from './Singlecard';
import { Link } from "react-router-dom"

// import { Link } from 'react-router-dom';

function Allpost() {
const { user, searchContainer } = useSelector((state)=>state.app);
const dispatch = useDispatch();

const [show, setShow] = useState(false);

const [id, setId] = useState();

useEffect(()=>{

    dispatch(showAction());
},[dispatch])


const handleDelete =(id)=>{

    dispatch(deleteAction(id));
}

    return (
        <>
        <body>
              { show && <Singlecard setShow={setShow} id={id}/> }
            <div className="data-container">
                <h1 >See your data here....</h1>
               
                 </div>

            <div className="card-container">
                {
                    user && 
                    user.filter((elem)=>{
                      if(elem.length === 0){
                        return elem;
                      }
                      else{
                        const nameMatches = elem.name.toLowerCase().includes(searchContainer.toLowerCase());
                        const emailMatches = elem.email.toLowerCase().includes(searchContainer.toLowerCase());
                        return emailMatches || nameMatches;
                      }
                    })
              
                  .map((item)=>(
                        <div className="card" key={item.id}>
                        <div className="card-body">
                            <h4 className="card-title">Name : {item.name}</h4>
                            <h5 className="card-text">email : {item.email}</h5>
                            <h5 className="card-text">Gender : {item.gender}</h5>
                            <button id='post-button' onClick={()=>[setShow(true), setId(item.id)]}>View post</button>
                            <Link to={`/edit/${item.id}`}>Edit post</Link>
                            <button id='post-button' onClick={()=>{handleDelete(item.id)}}>Delete</button>
                        </div>
                    </div>
                    ))
                }
               
            </div>
            </body>
        </>
    )
}


export default Allpost