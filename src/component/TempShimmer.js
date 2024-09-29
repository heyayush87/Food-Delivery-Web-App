const   TempShimmer=()=>{
 return <>
 <div className="food">
    {Array(20)
    .fill("")
    .map((e,index)=><div key={index} className="shimmer"></div>)}
   

   

    </div>
    </>
}

export default TempShimmer;