import Form from "../Form";
import ContactService from "../ContactServices";
import './index.css'

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1 className="contact-head">Contact</h1>
        <div className="contact-divide">
          <Form />
          <ContactService />
        </div>
      </div>
    </section>
  );
}

export default Contact;
