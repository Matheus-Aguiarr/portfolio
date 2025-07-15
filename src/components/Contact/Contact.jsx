import "./Contact.css";
import { motion } from "framer-motion";

const Contact = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="contact mt-[300px] mb-[200px] max-w-[100vw]"
      id="contact"
      initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="text-white text-2xl text-center mb-[50px]">
        Get in <span className="text-[var(--main-color)]">Touch</span>
      </h1>
      <div className="contact-container ">
        <form
          method="POST"
          action="https://formsubmit.co/matheusaguiardealmeida@gmail.com"
          className="contact-form flex flex-col gap-[10px] w-[500px] m-auto"
        >
          <div className="flex flex-row gap-[10px]">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="bg-[var(--bg-color03)]/30 backdrop-blur-lg p-2 text-white rounded-md w-[50%] border-none "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="bg-[var(--bg-color03)]/30 backdrop-blur-lg p-2 text-white rounded-md w-[50%] border-none"
            />
          </div>
          <div className="flex flex-row gap-[10px]">
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              name="phone"
              className="bg-[var(--bg-color03)]/30 backdrop-blur-lg p-2 text-white rounded-md w-[50%] border-none"
            />
            <input
              type="text"
              placeholder="Subject (optional)"
              name="subject"
              className="bg-[var(--bg-color03)]/30 backdrop-blur-lg p-2 text-white rounded-md w-[50%] border-none"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <textarea
              placeholder="Message"
              name="message"
              rows="5"
              required
              className="bg-[var(--bg-color03)]/30 backdrop-blur-lg p-2 text-white rounded-md resize-none"
            ></textarea>
            <button
              type="submit"
              className="shadow-lg shadow-[#ff1e1e6c] bg-[var(--main-color)] w-[fit-content] m-auto text-[#fff] mt-4 p-2 rounded-xl px-8 hover:bg-[var(--bg-color)] duration-[.5s] hover:text-[var(--main-color)] border-1 border-[var(--main-color)] font-bold cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
