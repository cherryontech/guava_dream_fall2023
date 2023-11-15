//import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
//import ViewAssessmentDraft from "/ViewAssessmentDraft"

 function SendAssessment() {
//Use props instead of ref to get name and email
  
  const [loading, setLoading] = useState(false)
  useEffect(() => emailjs.init("zo743h247QwTwz8gU"), []);
  //... 
    const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_qzyuot1";
    const templateId = "template_7zacm7f";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: this.name.current.value,
        recipient: this.email.current.value
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
   
  
  <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}></form>
            <h5> Who would you like to send the assessment to?</h5>
          <div className="form_group">
            <label htmlFor="name" aria-label="name">name*</label>
            <input placeholder="Enter recipient name" />
            <label htmlFor="email" aria-label="email">email*</label>
            <input placeholder="Enter recipient email" />
          </div>
           <button className="btn" disabled={loading}>
                Send Assessment
            </button>
  </section>
  )
}

export {SendAssessment}
