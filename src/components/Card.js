import React from 'react'
// imported the Fclike-icon(heart shaped icon) from react-icons 
// FcLikePlaceholder contains light red color heart-icon that is used for un-liking 
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    // har card ke liye 1 course ka data mil jayega
    let course = props.course;
    // this variable will kep track of all courses/card that are liked 
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    // on clicking heart-icon this function will give toast 
    function clickHandler() {
        //checking if likedCourse contains ID of current course/card
        // iska matlab vho pehle se like hua pada tha
        if(likedCourses.includes(course.id)) {
            
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                  {/* iss button mei heart-shape(Fclike icon) icon hai */}
                  {/* on clicking the heart we will be getting a toast */}
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

          <div className='p-4'>
              {/* ocurse.title contains heading for every card */}
            <p className="text-white font-semibold text-lg leading-6">
                  {course.title}</p>
              {/* course.discription contains discription of every card below heading */}
              <p className='mt-2 text-white'>
                  {/* agar course.discription ki lenght >100 hai tho substring show karege of 100 length with ... at end  otherwise show the entire discription*/}
                  {
                        course.description.length >100 ? (course.description.substr(0,100)) + "..." :(course.description)
                    }
            </p>
        </div>
    </div>
  )
}

export default Card
