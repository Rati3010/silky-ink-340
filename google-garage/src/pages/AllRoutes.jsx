import {Routes,Route} from  "react-router-dom";
import Home from "./home";
import Login from "./login";
import OnlineCourse from "./onlinecourse";
import Register from "./register";



function AllRoutes (){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signin" element={<Login/>}></Route>
            <Route path="/online_course" element={<OnlineCourse/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    )
}
export default AllRoutes;