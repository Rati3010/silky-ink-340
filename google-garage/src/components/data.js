import axios from "axios";

export const  getData = async () =>{
    var course; 
 try {
    var res = await fetch("http://localhost:3000/courses");
    let data = await res.json();
    return data;
 } catch (error) {
    console.log(error);
 }
    
} 