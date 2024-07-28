import {useEffect} from 'react'
import axios from 'axios';
export default function Test() {
  function  getDeletedBlogs() {
    axios.get("https://maroon-foul-pixie.glitch.me//api/deletedBlogs",{
     Authorization:"dvfvsdfv"
    }).then(response => {
     // Handle success
     console.log(response.data);
     return (response.data)
   })
   
  
   }
console.log(getDeletedBlogs());
}