import {useState,useEffect} from "react"
import Axios from "axios"
import {Link} from "react-router-dom"
import { FaTrash } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import FitnessStyles from "./FitnessStyles.css"



export default function Fitness_Tracker(){

//1. create an empty state for all your values
const [item,setItem]=useState({
    workout:"",
    date:"",
    calories:"",
    duration:""
})

//5. added items will be stored in this variable
const [items,setItems]=useState([
    {
    workout:"",
    date:"",
    calories:"",
    duration:"",
    _id:""
    }
])

//9 (put/edit) create variable to open form
const [isPut,setIsPut]=useState(false)
//10 create variable to store updated values
const [updatedItem, setUpdatedItem]=useState({

    workout:"",
    date:"",
    calories:"",
    duration:"",
    id:""

})


//2.Create a handle change function
function handleChange(event){
    const{name,value}=event.target
    setItem(prevInput=>{
        return(
            {   ...prevInput,
                [name]:value
            }
        )
    })
}

//6 create a use effect to fetch the data
useEffect(()=>{
    fetch('http://localhost:9000/fitness')
    .then(res => {
        //if response is okay
        if (res.ok){
        //we want to return response in json format
        return res.json()
        }
    })
    //set items to json response
    .then(jsonRes => setItems(jsonRes))
    .catch(err => console.log (err))
},[items])//only render when we have changes in the items variable


//4.create add item funcion
function addItem(event){
    event.preventDefault()

    //create variable to hold all our values for out post method
    const newItem={
        workout:item.workout,
        date:item.date,
        calories:item.calories,
        duration:item.duration
    }
    //post request and what were posting
    Axios.post("http://localhost:9000/fitness",newItem )

    //set form inputs back to original state
    setItem({
        workout:"",
        date:"",
        calories:"",
        duration:""

    })
}

//12 put function
function openUpdate(id){
    //setting this to true will give us access to new form
    setIsPut(true)
    setUpdatedItem(Input=>{
        return(
            {
        ...Input,
        id:id
            }
        )
    })

}



//8b delete function
function deleteitem(id){
    Axios.delete('http://localhost:9000/fitness/'+id)
    alert('item deleted')

}


//14. put request
function updateItem(id){
    Axios.put('http://localhost:9000/fitness/'+id,updatedItem)
    //alert('item updated')
}

//16 handle update
function handleUpdate(event){
    const {name,value}=event.target
    setUpdatedItem(prevInput=>{
        return({
            ...prevInput,
            [name]:value
        })
    })

}

//3. Create your form
    return(

        
      
      
      <div className="fitness-wrapper">

       
        <nav className="nav-list2">
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Fitness_Tracker/Fitness_Tracker">Fitness Tracker</Link></li>
            <li><Link to="/Blog_Post/Blog_Post">Blog</Link></li>

        </nav>
        
        <h1 className="fitness-header">She</h1>
        <h1  className="fitness-header2">Fit</h1>

          
          {/*13. terinary operator for put*/}

          <br/>

          {!isPut ? 
          (<div>
           <input 
           className="input"
           name="workout" 
           placeholder="workout" 
           value={item.workout} 
           onChange={handleChange}/>

           <input 
           className="input"
           name="date" 
           placeholder="date" 
           value={item.date}
           onChange={handleChange}/>

           <input 
           className="input"
           name="calories" 
           placeholder="calories" 
           value={item.calories} 
           onChange={handleChange}/>

           <input 
           className="input"
           name="duration" 
           placeholder="duration" 
           value={item.duration} 
           onChange={handleChange}/>
           
           <FaPlus onClick={addItem} className="fitness-button3"/>

        </div>) : 

        
        (<div>
        {/*15. handle change needs to change to handle update and value needs to change to updated value*/}

        <input 
        name="workout" 
        placeholder="workout" 
        value={updatedItem.workout} 
        onChange={handleUpdate}/>

        <input 
        name="date" 
        placeholder="date" 
        value={updatedItem.date}
        onChange={handleUpdate}/>

        <input 
        name="calories" 
        placeholder="calories" 
        value={updatedItem.calories} 
        onChange={handleUpdate}/>

        <input 
        name="duration" 
        placeholder="duration" 
        value={updatedItem.duration} 
        onChange={handleUpdate}/>

    <FaUpload onClick={updateItem(updatedItem.id)} className="fitness-button4"/>

 </div>
 )}


        




           {/*Map through the data and render to the page*/}



<br/>
           {items.map(item =>{
               return(
                   //7 map through elements
                  
                  <div>

                   <h2 className="text">{item.workout}</h2>
                   <h2 className="text">{item.date}</h2>
                   <h2 className="text">{item.calories}</h2>
                   <h2 className="text">{item.duration}</h2>
                   {/*8a delete item function*/}
                        <br/>
                        
                        <FaTrash onClick={()=>deleteitem(item.id)} className="fitness-button"/>
                       
                    
                         
                        {/*11 update item function*/}
                        <FaUpload onClick={()=>openUpdate(item._id)}  className="fitness-button1"/>
                        
                        <br/>
                        <br/>

                    </div>
               )
           })}
        </div>


        
    )
    
}