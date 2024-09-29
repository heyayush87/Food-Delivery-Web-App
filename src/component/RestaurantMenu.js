import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import {restmenu}  from "../Constant";
import {IMG_URL} from "../Constant";
import TempShimmer from "./TempShimmer";
import {dominos}  from "../Constant"


const RestaurantMenu=()=>{
    const {id}=useParams();
    
   
    const [ResDetails, setResDetails] = useState(null);
    const [resMenu, setResMenu] = useState(null);
  
    
  
  
    const fetchResDetails = async () => {
        try {
          const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.148636167537521&lng=77.61002194136381&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
          const json = await data.json();
          
          console.log("API Response:", json);
      
          if (json?.data?.cards) {
            setResDetails(json.data.cards[2]?.card?.card?.info);
            setResMenu(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
          } else {
            console.warn("Unexpected data structure from API", json);
          }
        } catch (error) {
          console.error("Error fetching restaurant details:", error);
        }
      };
      
   


  
    useEffect(() => {
       
        
      fetchResDetails();
    }, []);
  
    // if (resDetails === null) {
    //   return <Shimmer/>
    // }
  

    //  const restaurantDetails =resDetails?.cards[2]?.card?.card?.info;
    //  const restaurantMenuCards=resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //   console.log(restaurantMenuCards)
      
      
    
    return(!ResDetails)?<TempShimmer/>:(
        <> 
         <div className="Menu">
            <div>
         <h1>{ResDetails.name}</h1>
         <img src={IMG_URL+ResDetails.cloudinaryImageId}></img>

         <p> {id }</p>
         <p>{ResDetails.id}</p>
         <p>{ResDetails.cuisines}</p>
         <p>{ResDetails.area}</p>
         <p>{ResDetails.city}</p>
         <p>{ResDetails.avgRating}</p>
         </div>
         
         <div className='restaurant-menu-details'>
            <h1>Menu</h1>
            <ul>
        {
          Object.values(resMenu).map((card,index)=> card?.card?.card?.title && index >3 ?(<div key={index}>{card.card.card.title}</div>):null)
              
        }
        </ul>
        </div>
        </div>

        
        </>
    )
}
export default RestaurantMenu;