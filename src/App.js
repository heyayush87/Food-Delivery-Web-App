   import React from "react";
   import ReactDOM from "react-dom/client";
   import Header  from "./component/Header";
   import Body from "./component/Body";
   import Footer from "./component/Footer";
   
   import About from"./component/About";
   import Error from "./component/Error";
   import Contact from "./component/Contact";
   import Cart from "./component/Cart";
   import RestaurantMenu from "./component/RestaurantMenu"
   

   import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";

    const Applayout=()=>{
      return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </> 
      )

    } 

    const appRouter=createBrowserRouter([
      {
          path:"/",
          element:<Applayout/>,
          errorElement:<Error/>,
          children:[

            {
              path:"/",
              element:<Body/>
            }, 

            {
              path:"/about",
              element:<About/>
            },

            
            {
              path:"/contact",
              element:<Contact/>
            },
            {
              path:"/cart", 
              element:<Cart/>
            },
            {
              path:"/restaurant/:id",
              element:<RestaurantMenu/>
            },
          ],
      },
      
      
    ])

     const root=ReactDOM.createRoot(document.getElementById('root'))
      root.render(<RouterProvider router={ appRouter }/>)

    
