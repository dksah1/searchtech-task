
import { Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Posts from './components/Posts';
import Users from './components/Users';
import Nav from './components/Navbar';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
 const [posts,setPost]=useState([]);
 const [isError,setIsError]=useState("");
const getApiData = () =>{
 axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
  console.log('res',res.data)
   setPost(res.data);
 }).catch(err=>{
  setIsError("Something went wrong",err);
 })
 
}
useEffect(()=>{
  getApiData();
},[])

  return (
    
   <>
   
     <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="users" element={ <Users/> } />
        <Route path="posts" element={ <Posts/> } />
      </Routes>
    
      </>
    
  )
        }

export default App;
