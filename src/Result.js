const Result = () => {
    return (
        <div className="bg-indigo-200 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-full">
            <div className="flex flex-col items-center bg-white w-8/12 h-fit flex relative top-60 mx-auto p-20 border shadow-lg rounded-md bg-white">
                <h3 className="my-9 text-center text-indigo-700 font-bold text-2xl">Thank you so much for completing the assessment!
                 It gives us a better perspective on how to create an equitable workplace. Please close the window or
                  continue on to see your company’s initiatives. 
                </h3>
                  <button 
                  className="bg-blue-600 w-60 h-12 rounded-full text-white border-2 items-center justify-center"
                  >View Company Initiatives</button>
            </div>
        </div>
    
    )

}

export default Result