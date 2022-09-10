import React from 'react';
import './App.css';
import GetData from './GetData';
import Profile from './Profile';
import Search from './Search';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="home" caseSensitive={false} element={<Home/>} />
        <Route path="search" caseSensitive={false} element={<Search />} />
        <Route path="profile" caseSensitive={false} element={<Profile />} />
        <Route path="post" caseSensitive={false} element={<GetData />} />
      </Routes>
      <div className="navbar">
      <Link to="/home"><i className="fa fa-fw fa-home"></i> Home</Link> 
        <Link to="/search"><i className="fa fa-fw fa-search"></i> Search</Link> 
        <Link to="/profile"><i className="fa fa-fw fa-envelope"></i> Profile</Link> 
        <Link to="/post"><i className="fa fa-fw fa-user"></i> Post</Link>
        </div>
    </Router>
    </>
  );
}

export default App;
