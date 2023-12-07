import SideMenu from "../../SideMenu";
//import "./Dashboard.css";


const Dashboard = () => {
    return (
        <div className="flex">
            <SideMenu />
            <section className="flex flex-col m-5 w-screen h-screen border-2 bg-indigo-100">
                <div className="w-full">
                    <div className="flex gap-6  m-4">
                        <h1 className="flex h-44 w-96 mr-2 p-2 self-center font-bold text-indigo-400 text-xl border-2 bg-white rounded-3xl">Hello!</h1>
                        <div className="h-44 w-3/5 border-2 rounded-3xl bg-white">Employee Satisfaction Data</div>
                    </div>
                </div>
                <div className="flex w-full h-full gap-8">
                    <div className="h-4/5 w-1/3 ml-4 border-2 bg-white rounded-3xl">Mental health Data</div>
                    <div className="grid grid-cols-2 gap-6 h-4/5">
                        <div className="h-72 w-96 border-2 bg-white rounded-3xl">Employee Enagement Data</div>
                        <div className="h-72 w-96 border-2 bg-white rounded-3xl">DEI Data</div>
                        <div className="h-72 w-96 border-2 bg-white rounded-3xl">Employee Experience Data</div>
                        <div className="h-72 w-96 border-2 bg-white rounded-3xl">Benefits Data</div>
                    </div>
                </div>
            </section>
        </div>

       
    )
}

export default Dashboard
