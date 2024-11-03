import Lottie from "lottie-react";
import React from "react";
import contact from "../assets/Animation - 1730261998291.json";
import email_icon from "../assets/icons8-email-24.png"
import github_icon from "../assets/icons8-github-24.png"
import linkedin_icon from "../assets/icons8-linkedin-24.png"
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="relative px-5 md:px-0">
      <div className="mt-[10em] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="scale-1 text-3xl font-bold mb-3 text-white">
              Get in Touch
            </h2>
            <p className="scale-1 text-white/85">
              I'm always open to new opportunities and Collaboration. Feel free
              to reach out!
            </p>
            <Lottie animationData={contact} className="scale-1 hidden md:block"/>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
