import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
// importing filter data from data and calling api
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


const App = () => { 
  // created a state variable courses and courses is initially set to NULL
  const [courses, setCourses] = useState(null);
  // cretaed  a state variable loading that is true initially . 
  // The loading icon that we see when we click on load button to load the website will be provided by this state variable
  const [loading, setLoading] = useState(true);
  // initially category "ALL" hogi that is filterData ki 1st value
  const [category, setCategory] = useState(filterData[0].title);

  // this fetchData function sarre courses ka data le kar aa jayega 
  // and try-catch is used to handle error
  async function fetchData() {
    // jeb tek API data fetch karke lata hai teb tek loading wala icon show karna hai thats why its is set true for fetching data
    setLoading(true);
    try {
      // fetching api
      let response = await fetch(apiUrl);
      // response ko json format mei convert kaer diya
      let output = await response.json();
      ///output -> 
      // sarre data ko setCourses mei copy kar diya
      setCourses(output.data);
    }
    // if error ocuurs while fetching data etc then a toast will apear saying "network mei koi dikkat hai"
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    // now , hamara data aa chuka hai tho loading icon ko mat dekhao aab
    setLoading(false);
  }
// calling API using useEffect
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    // for css classname is used in react
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        {/* navbar component call kar diya */}
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          {/* filter component call kar diya */}
          <Filter 
            // accessing filter data using props
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {/* loading(state variable) pe depend karega ki spinner icon show karna hai ya cards show karne hai */}
          {/* if loading is true then show "spinner i.e loading icon" otherwise show cards  */}
          {/* courses={courses} -> it is a prop through which we sent data of courses to cards component */}
          {  
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>


    </div>
  );
};

export default App;
