import SideMenu from "../../SideMenu";
import AssessmentImage from "../../Assets/Assessments Box.png";
import DonutChart from "../../Assets/Donut Chart.png";
import GenderChart from "../../Assets/Gender Chart.png";
import SatisfactionChart from "../../Assets/Satisfaction Chart.png";
import TopDash from "../../Assets/Top Dash.png";
import WhatsNewBox from "../../Assets/What's New Box.png";

//import "./Dashboard.css";


const Dashboard = () => {
    return (
        <div className="flex">
            <SideMenu />
            <section className="flex flex-col m-5 w-screen h-screen border-2 bg-indigo-100">
                <div className="w-full">
                    <div className="flex gap-6  m-4">
                        <h1 className="flex h-44 w-96 mr-2 p-2 self-center font-bold text-indigo-400 text-4xl border-2 bg-white rounded-3xl">Hello!</h1>
                        <div className="h-44 w-3/5 border-2 rounded-3xl bg-white"><img src={TopDash} alt="" className="h-44 w-full rounded-3xl bg-white"/></div>
                    </div>
                </div>
                <div className="flex w-full h-full gap-8">
                    <div className="h-[665px] w-1/3 ml-4 border-2 bg-white rounded-3xl"><img src={DonutChart} alt="" className="flex ml-8 rounded-3xl h-full w-11/12" /></div>
                    <div className="grid grid-cols-2 gap-6 h-4/5">
                        <div className="h-80 w-96 border-2 bg-white rounded-3xl"><img src={GenderChart} alt="" className="rounded-3xl" /></div>
                        <div className="h-80 w-96 border-2 bg-white rounded-3xl"><img src={SatisfactionChart} alt="" className="rounded-3xl"/></div>
                        <div className="h-80 w-96 border-2 bg-white rounded-3xl"> <img src={AssessmentImage} alt="" className="rounded-3xl"/></div>
                        <div className="h-80 w-96 border-2 bg-white rounded-3xl"><img src={WhatsNewBox} alt="" className="rounded-3xl"/></div>
                    </div>
                </div>
            </section>
        </div>

       
    )
}

export default Dashboard
