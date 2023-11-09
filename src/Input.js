import "./Pages/Dashboard/Dashboard.css"

const Input = () => {
    return (
        <section className="dashboard-page">
                    <label htmlFor="name" aria-label="name">name*</label>
                    <input aria-label="name" id="name" type="text" placeholder="Full name" maxLength="30" name="name" tabIndex="1" required />
                    <label htmlFor="email" aria-label="email">email*</label>
                    <input aria-label="email" id="email" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" placeholder="Email address" name="email" required tabIndex="2"/>
        </section>
    
    )

}

export default Input