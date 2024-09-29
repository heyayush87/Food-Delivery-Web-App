import {IMG_URL} from "../Constant";
   
 const Restaurant=({
  cloudinaryImageId,
  name,
  cuisines,
  sla
})=>{
 
  return(
    
    
    <div className  ="card">
      

      <img src={IMG_URL
      +cloudinaryImageId}
      /> 
      
      
       <h2>{name}</h2>  
       <h5>{cuisines.join(',')}</h5> 
       <h4>{sla.lastMileTravelString} </h4>
      
    </div>
  ) 
}

export default Restaurant;