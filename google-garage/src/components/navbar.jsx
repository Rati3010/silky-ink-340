import { NavLink } from "react-router-dom";

const Navbar = () =>{
     return(  <>
    <nav className="navbar navbar-expand-lg bg-white shadow-lg p-2 mb-1 bg-white rounded sticky-top">
  <div className="container-fluid">
    <NavLink key={"/"} to={"/"}>
    <button className="navbar-brand btn btn-white"> <img src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw" alt="GOOGLE" style ={{width:"240px",height:"30px"}}/></button>
    </NavLink>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink key={"/online_course"} to={"/online_course"}>
          <button className=" btn btn-white">Online Courses</button>
          </NavLink>
          
        </li>
        <li className="nav-item">
          <button className=" btn btn-white" >Certification</button>
        </li>
        <li className="nav-item">
          <button className=" btn btn-white" >Live Training</button>
        </li>
        <li className="nav-item pe-auto">
          <button className=" btn btn-white" >Remote Working</button>
        </li>
        <li className="nav-item dropdown ">
          <button className=" dropdown-toggle  btn btn-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </button>
          <ul className="dropdown-menu">
             <div>Tools & Resources</div>
             <div>Help & FAQs</div>
             <div>Feedback</div>            
          </ul>
        </li>
        
      </ul>
      <NavLink key={"/signin"} to={"/signin"}>
      <button type="button" className="btn btn-white mx-4 text-primary">Sign in</button>
      </NavLink>
      <NavLink key={"/register"} to={"/register"}>
      <button type="button" className="btn btn-primary">Register</button>
      </NavLink>
      
    </div>
  </div>
</nav>
</>);
}

export default Navbar;