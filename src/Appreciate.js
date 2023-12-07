import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/details');
    };
    return (
        <div className="flex flex-row	bg-indigo-200 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="bg-white w-9/12 h-fit relative top-60 mx-auto p-20 border shadow-lg rounded-md bg-white">
                <h3 className="text-indigo-700 font-bold text-2xl w-6/12">Thank you for completing the assessment! It is
                 important to the company that we gather information on company demographics so we can better ease
                  imposter syndrome in the workplace. Do you consent to providing demographic information?
                </h3>
                <div className='flex flex-col float-right gap-6'>
                  <button 
                  className="bg-white w-60 h-12 rounded-full text-blue-600 border-2 items-center justify-center"
                  onClick={handleClick}
                  >Yes, I consent</button>
                  <button 
                  className="bg-blue-600 w-60 h-12 rounded-full text-white items-center justify-center"
                  onClick={handleClick}
                  >No, I do not consent</button>
                </div>
            </div>
        </div>
    
    )

}

export default About