import {Link} from "react-router-dom"
import Blogstyles from "./Blogstyles.css"
import food from "./food.jpeg"
import weights from "./weights.jpg"
import dance from "./dance.jpg"
import boxing from "./boxing.jpg"
import runner from "./runner.jpg"

export default function Blog_Post(){




    return(
       <div>

        <nav className="nav-list3">
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Fitness_Tracker/Fitness_Tracker">Fitness Tracker</Link></li>
            <li><Link to="/Blog_Post/Blog_Post">Blog</Link></li>

        </nav>
        
        <hr/>

        <header className="blog-header">
            <h1 className="title-blog">She Fit Blog</h1>
            <h3 className="subtitle-blog">Get the Scoop on the Latest Fitness Tips</h3>
        </header>

        <hr/>

        <div className="bottom-header"></div>

        <div className="boxer"></div>









        

        <div className="blog-wrap">

            <h1 className="blog-start">Feature post</h1>


            <br/>
            <br/>
            <div className="whole">

                    <div className="left-container">
                     <div className="left-content">
                        <img src={food} alt="food"/>
                    </div>
                    </div>

                    <div className="right-container">
                      <div className="right-content">
                          <h4 className="title3">10 Foods to Help your Burn Belly fat</h4>
                          <br/>
                          <p className="date">April, 10, 2022</p>
                          <br/>
                          <p className="paragraph">Starting off your day with a balanced breakfast is the best way to kick off your day. 
                              Down below we have 10 foods that will not only burn fat, but keep you energized all day.
                          </p>

                          <button className="button">Read More</button>
                          
                      </div>
                      </div>

                      {/*----------*/}

                      <div className="left-container">
                     <div className="left-content">
                        <img src={dance} alt="dance"/>
                    </div>
                    </div>

                    <div className="right-container">
                      <div className="right-content">
                          <h4 className="title3">5 Dances that burn over 500 Calories</h4>
                          <br/>
                          <p className="date">April, 11, 2022</p>
                          <br/>
                          <p className="paragraph">We all know dancing burns calories but certain dances are better than others. Today we 
                          will be discussing the top 5 latin dances that will help burn fat.
                          </p>

                          <button className="button">Read More</button>
                          
                      </div>
                      </div>

                      {/*--------*/}


                      <div className="left-container">
                     <div className="left-content">
                        <img src={boxing} alt="boxing"/>
                    </div>
                    </div>

                    <div className="right-container">
                      <div className="right-content">
                          <h4 className="title3">Why boxing is a great Exercise</h4>
                          <br/>
                          <p className="date">April, 12, 2022</p>
                          <br/>
                          <p className="paragraph">Boxing is one of the oldest sports but theres a reason why its so popular to this day.
                          Boxers need speed, endurance, strength and flexivility in the ring. Were going to go over all the benefits of it
                          down below.
                          </p>

                          <button className="button">Read More</button>
                          
                      </div>
                      </div>

                      {/*-------*/}

                      <div className="left-container">
                     <div className="left-content">
                        <img src={weights} alt="weights"/>
                    </div>
                    </div>

                    <div className="right-container">
                      <div className="right-content">
                          <h4 className="title3">Why Women should Start Lifting weights</h4>
                          <br/>
                          <p className="date">April, 13, 2022</p>
                          <br/>
                          <p className="paragraph">So many women think lifting weights are going to make them "manly" but that couldnt be 
                          futher from the truth. Weight training strengthens muscles, bones and helps keep you alive longer.
                          </p>

                          <button className="button">Read More</button>
                          
                      </div>
                      </div>

                      {/*---------*/}


                      <div className="left-container">
                     <div className="left-content">
                        <img src={runner} alt="athlete"/>
                    </div>
                    </div>

                    <div className="right-container">
                      <div className="right-content">
                          <h4 className="title3">We talk to Olympic Runner Missy Grant about the key to Fitness</h4>
                          <br/>
                          <p className="date">April, 14, 2022</p>
                          <br/>
                          <p className="paragraph">Missy has broken record after record when it comes to the track. But she claims
                          it hasn't always been this easy. Today she talks to us about what it tooj for her to get to where she is today.

                          </p>

                          <button className="button">Read More</button>
                          
                      </div>
                      </div>
                    
            
            
            
            
            
            
        
            
















        </div>
        </div>
        </div>
        
          






     
    )    
    }