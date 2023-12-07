import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/appreciate');
    };
    return (
        <div className="bg-indigo-200 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="bg-white w-6/12 h-72 relative top-60 mb-6 mx-6 p-2 border shadow-lg rounded-lg bg-white">
                <h2 className="text-indigo-700 font-bold text-2xl m-12">Assessment Title</h2>
                <p className="text-blue-600	font-normal	mx-24 my-12 text-lg">Created: October 20, 2023
                </p>
                <p className="text-blue-700	font-normal	mx-24 my-12 text-lg">Today’s Date
                </p>
            </div>
            <div className="bg-white w-9/12 h-72 relative top-60 mx-auto p-2 border shadow-lg rounded-lg bg-white">
                <h2 className="text-indigo-700 font-bold text-2xl m-12">Question/ Statement</h2>
                <p className="text-blue-600	font-normal	mx-24 my-12 text-lg">Please rate your feelings of agreement
                 from 1 - 5 about the above question/ statement. 1 meaning you completely disagree and 5 meaning you completely agree
                </p>
            </div>
            <button className="bg-blue-600 w-60 h-12 rounded-full text-white flex items-center float-right justify-center"
                 onClick={handleClick}>Continue to Next Question</button>
        </div>
    
    )

}

export default Questions