import { useState, useEffect } from "react";  
import TempShimmer from "./TempShimmer";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";


function filterdata(search, restaurants) {
  const fildata = restaurants.filter((rest) =>
    rest.info.name.toLowerCase().includes(search.toLowerCase())
  );
  return fildata;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.148636167537521&lng=77.61002194136381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const js = await data.json();
      // Adjust the path based on actual response
     
      // console.log(RestaurantsList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      
      
      // const restaurantList = js?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(js?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(js?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }



  return restaurants.length === 0 ? 
  (
    <TempShimmer />
  ) 
  :
   
   (
    <> 
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button 
          className="search-btn"
          onClick={() => {
            const data = filterdata(search, restaurants);
            setFilteredRestaurants(data);
          }}
        > 
          Search 
        </button> 
      </div>
      <div className="food">
        {filteredRestaurants.map((restaurant) => {
        
          return <Link className="link"><Restaurant {...restaurant.info} key={restaurant.info.id} /> </Link>;
          
        })}
        
      </div>
    </>
  );
}

export default Body;
