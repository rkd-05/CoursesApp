import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
// jis filter pe clikc karege uski category change kar dege and title ko as parameter pass kar diya 
    function filterHandler(title) {
        setCategory(title);
    }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {/*  filter ke data ko map kar diya so that we can create onlu 1 filter and copy that for other filters   */}
      {
        
        filterData.map( (data) => (
            <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? "bg-opacity-60 border-white" :"bg-opacity-40 border-transparent"}`}
            key={data.id}
            // click handler on filter button i.e ALL/development/bussines/design
             onClick ={() => filterHandler(data.title)}>{data.title}
          </button>
        ))
      }
    </div>
  )
}

export default Filter


