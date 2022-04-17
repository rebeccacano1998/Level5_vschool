import homestyle from "./homestyle.css"
import {Link} from "react-router-dom"
import fitness3 from './Home'

export default function Home(){




return(
    <body className="home-background">
        

    

        <nav className="nav-list">
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Fitness_Tracker/Fitness_Tracker">Fitness Tracker</Link></li>
            <li><Link to="/Blog_Post/Blog_Post">Blog</Link></li>

         </nav>
   
       <div>
       <h1 className="title">She</h1>
       <h1 className="title2">Fit</h1>
       <h1 className="main">THERE IS NO LIMIT</h1>
       <h3 className="sub-main">A place for Excellence</h3>
       </div>
   
   
   
   
   
   
   
   
   
   
   </body>
)    
}