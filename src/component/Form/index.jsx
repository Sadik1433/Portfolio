import "./index.css";

function Form() {
  return (
      <div className="form-container"  data-aos="fade-right">
        <form className="form" id="form-container">
            <h1 className="contact-header">Contact Me!</h1>         
            <input type="text" className="input-field"  name="email" id="email" placeholder="Email"/>
            <input type="text" className="input-field"  name="phone" id="phone" placeholder="Phone"/>
            <textarea  rows="5"  className="text-area" placeholder="Type here...."/>
            <button className="submit-btn">Submit</button>
        </form>
      </div>
  );
}

export default Form;
