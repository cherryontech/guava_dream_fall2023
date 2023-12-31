import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    };
    return (
        <div className="bg-indigo-200 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-full">
            <div className="bg-white w-8/12 h-fit flex relative top-60 mx-auto p-20 border shadow-lg rounded-md bg-white">
                <h3 className="text-indigo-700 font-bold text-2xl">Thank you for completing the assessment! It is
                 important to the company that we gather information on company demographics so we can better ease
                  imposter syndrome in the workplace. Do you consent to providing demographic information?
                </h3>
                <div className='flex flex-col justify-center ml-9 gap-6'>
                  <button 
                  className="bg-white w-60 h-12 rounded-full text-blue-600 border-2 items-center justify-center hover:bg-blue-600 hover:text-white"
                  onClick={handleClick}
                  >Yes, I consent</button>
                  <button 
                  className="bg-white w-60 h-12 rounded-full text-blue-600 border-2 items-center justify-center hover:bg-blue-600 hover:text-white"
                  onClick={handleClick}
                  >No, I do not consent</button>
                </div>
            </div>
        </div>
    
    )

}

export default About