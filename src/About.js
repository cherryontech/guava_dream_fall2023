import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/details');
    };
    return (
        <div className="bg-indigo-200 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-full">
            <div className="bg-white w-9/12 h-fit relative top-60 mx-auto p-20 border shadow-lg rounded-md bg-white">
                <h2 className="text-indigo-700 font-bold text-2xl m-12">What is Equivate?</h2>
                <p className="text-blue-600	font-normal	mx-24 my-12 text-lg">Lorem ipsum dolor sit amet consectetur 
                adipiscing eli mattis sit phasellus mollis
                sit aliquam sit nullam neque ultrices.
                </p>
                <p className="text-blue-700	font-normal	mx-24 my-12 text-lg">Lorem ipsum dolor sit amet consectetur 
                adipiscing eli mattis sit phasellus mollis
                sit aliquam sit nullam neque ultrices.
                </p>
                <p className="text-blue-700	font-normal	mx-24 my-12 text-lg">Lorem ipsum dolor sit amet consectetur 
                adipiscing eli mattis sit phasellus mollis
                sit aliquam sit nullam neque ultrices.
                </p>
                <button 
                className="bg-blue-600 w-20 h-12 rounded-full text-white flex items-center float-right justify-center"
                onClick={handleClick}
                >Next</button>
            </div>
        </div>
    
    )

}

export default About