import Form from "../Form";
import ContactIcon from "../ContactIocn";

function Contact() {
  return (
    <section id="contact">
      <div className="mainContainer h-screen">
        <div className="border-b-1">
          <h1 className="text-center text-4xl mask-radial-from-stone-50  ">
            Contact
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="w-2/3">
            <Form />
          </div>
          <div className="w-1/3">
            <ContactIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
