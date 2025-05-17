import Form from "../Form";
import ContactIcon from "../ContactIocn";

function Contact() {
  return (
    <section id="contact">
      <div className="min-h-screen mainContainer pb-5">
        <h1 className="text-center text-4xl mask-radial-from-stone-50 border-b-2 border-blue-50 shadow-m  ">
          Contact
        </h1>
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row">
          <div className="flex flex-row justify-center items-center">
            <Form />
          </div>
          <div className="flex flex-col justify-center items-center">
            <ContactIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
