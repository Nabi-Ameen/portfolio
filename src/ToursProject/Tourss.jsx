// import Birthday from "./birthdayproject/Birthday";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function ToursProject() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const removeTour = (id)=>{
    const newtours= tours.filter((tour)=> tour.id !== id);
    setTours(newtours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    }catch(error){
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )

  }

  if(tours.length===0){
    return(
      <div className="flex justify-center flex-col md:w-1/3 mx-auto space-y-4 mt-4 text-center">
        <h2 className=" text-lg font-semibold ">No tour left</h2>
        <button onClick={()=> fetchTours()} className=" bg-blue-600 text-white w-24 h-8 rounded py-1 px-3 mx-auto">Refresh</button>
      </div>
    )
  }
  
  return (
    
      <div>
        {/* <Birthday/> */}
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    
  );
}

export default ToursProject;
