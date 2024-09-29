import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error=useRouteError();
    console.log(error);
    
    return(
    <>
    <h1> Oops! </h1>
    <h2>you entered wrong url</h2>
    <h1> {error.status +" " + error.statusText}</h1>
    </>
    )
}

export default Error;



