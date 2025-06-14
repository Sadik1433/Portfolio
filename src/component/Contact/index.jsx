import Form from "../Form";
import ContactService from "../ContactServices";

function Contact() {
  return (
    <section id="contact">
      <div className="min-h-screen mainContainer pb-5">
        <h1 className="text-center text-4xl mask-radial-from-stone-50 border-b-2 border-blue-50 shadow-m  ">
          Contact
        </h1>
        <div className="flex flex-col justify-center items-center  md:flex-row space-around gap-15 pt-15">
          <div>
            <Form />
          </div>
          <div>
            <ContactService />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
