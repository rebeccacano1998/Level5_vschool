import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import Fitness_Tracker from "./Fitness_Tracker/Fitness_Tracker"
import Blog_Post from "./Blog_Post/Blog_Post"

function App() {
  return (
    <>
  
   

         <Routes>

         
<Route exact path= "/" element={<Home/>}/>


<Route exact path= "/Fitness_Tracker/Fitness_Tracker" element={<Fitness_Tracker/>}/>


<Route exact path= "/Blog_Post/Blog_Post" element={<Blog_Post/>}/>


</Routes>


    </>
  );
}

export default App;
