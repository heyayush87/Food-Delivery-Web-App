 import{useState} from "react";
 import image from "../img/foodvilla.jpeg";
 import { Link } from "react-router-dom";
 import {RestMenu} from "../Constant";
 const Logo=()=>
    (
      <a href="/">
    <img
     className="logo "
    alt="logo"
    src={image}
    />
    </a>
    )


   
   
   

   const Header=()=>{
    const [loggedIn,setloggedIn]=useState(false);
      return ( 
       <div className="head">
      
        <Logo/>
        <div className="navbar" >
        <ul >  
        <li> 
             <Link to="/"> Home  </Link>
        </li>
          <li> 
                 <Link to="/about"> About us </Link> 
          </li>
          <li> 
          <Link to="/contact"> Conatct </Link>
          </li>
          <li>  
             <Link to="/cart"> Cart</Link>
           </li>

          {(loggedIn)? 
          <button onClick={()=>{
            setloggedIn(false)
          }}>logout</button >

           :<button onClick={()=>{
            setloggedIn(true)}}>  login</button>
          }

          

        </ul>
         
      </div>
      </div>
     )
    }

   export default Header;