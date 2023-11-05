import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="page">
            <section className="dashboard-container">
                <h1 className="welcome-box">Hello!</h1>
                <div className="employee-satisfaction-box">Employee Satisfaction Data</div>
                <div className="mental-health-box">Mental health Data</div>
                <div className="employee-engagement-box">Employee Enagement Data</div>
                <div className="dei-box">DEI Data</div>
                <div className="employee-experience-box">Employee Experience Data</div>
                <div className="benefits-box">Benefits Data</div>
            </section>
        </div>
    )
}

export default Dashboard