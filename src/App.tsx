import './App.css';
import Up from './images/Up.png'
import GetData from './Components/GetData';
import Profile from './Components/Profile';
import Search from './Components/Search';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes,Link,NavLink } from "react-router-dom";

function App() {

  return (
    <>
    <div className='topImage'>
      <img  src={Up} alt="fireSpot"/>
    </div>
      <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home/>} />
        <Route path="search" caseSensitive={false} element={<Search />} />
        <Route path="profile" caseSensitive={false} element={<Profile />} />
        <Route path="post" caseSensitive={false} element={<GetData />} />  
      </Routes>
      <div className="navbar">
        <NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}><i className="fa fa-home"></i><span>Home</span></NavLink > 
        <NavLink to="/search"className={({ isActive }) => isActive ? "active" : ""}><i className="fa fa-search"></i><span>Search</span></NavLink> 
        <NavLink to="/post" className={({ isActive }) => isActive ? "active" : ""}><i className="fa fa-picture-o"></i><span>Post</span></NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}><i className="fa fa-fw fa-user"></i><span>Profile</span></NavLink> 
        </div>
    </Router>
    </>
  );
}

export default App;
