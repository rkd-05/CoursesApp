import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
  // jho data app.js se bheja tha usko recieve kar liya
    let courses = props.courses;
  let category = props.category;
  // initially all courses/cards are un-liked that's why useState is empty here
    const [likedCourses, setLikedCourses] = useState([]);
    
  // in this function we created an array(allCourses) that contains all data of  courses in allCourses array
    function getCourses() {
      if (category === "All") {
          // empty array named allCourses
        let allCourses = [];
        // courses mei data key-value pair mei hai tho courses ka sarra data i.e value of courses hamne allCourses wale empty array mei daal diya
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data/array pass krunga  , courses mei 4 array of cards hai
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {/* sabhi courses pe map function laga diya and  for every course we created a card*/}
      {
        getCourses().map( (course) => (
          <Card key={course.id} 
            // sabhi variables props ke through pass kar diye hai
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
