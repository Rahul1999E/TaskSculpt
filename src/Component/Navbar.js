import React, { useEffect, useState } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchUser } from '../Features/userDetailslice';

const YourNavbar = () => {

    const dispatch = useDispatch();

    const [searchData, updateSearch] = useState("");
    useEffect(()=>{
        dispatch(searchUser(searchData));
    },[searchData])
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor:"#563DE7"}}>
            <a className="navbar-brand" href="google.com" style={{ fontSize: '1.5rem', color: 'white', padding:'10px' }}>Glimse</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" id='font'>Create Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/read" className="nav-link" id="font">All post</Link>
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
                <form className="form-inline my-2 my-lg-0" style={{display : "flex"}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '5px', marginRight: '5px' }} onChange={(e)=> updateSearch(e.target.value)}/>
                    <button className="btn btn-success" type="submit" style={{ borderRadius: '5px', fontWeight: 'bold' }}>Search</button>
                </form>
            </div>  
        </nav>
    );
};

export default YourNavbar;
