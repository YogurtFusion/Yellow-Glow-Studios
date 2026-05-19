import React from 'react'
import ContactBtn from "./ContactBtn";

const ContactForm = () => {
  return (
    <form
        action=""
        className="   w-full px-3 py-12  md:p-24 mb-24 md:mb-12 max-w-xl  md:mx-auto shadow-sm flex flex-col justify-center gap-8  "
      >
        <div className="flex flex-col gap-2 justify-center items-start  py-2 px-3">
          <label
            htmlFor="name"
            className="text-xs text-neutral-700 tracking-widest font-medium uppercase"
          >
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="capitalize outline-none w-full border-b focus:text-text"
            placeholder="john Doe"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-start  py-2 px-3">
          <label
            htmlFor="email"
            className="text-xs text-neutral-700 tracking-widest font-medium uppercase"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className=" outline-none w-full border-b focus:text-text"
            placeholder="johnDoe@email.com"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-start  py-2 px-3">
          <label
            htmlFor="subject"
            className="text-xs text-neutral-700 tracking-widest font-medium uppercase"
          >
            subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="capitalize outline-none w-full border-b focus:text-text"
            placeholder="New Project"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-start  py-2 px-3">
          <label
            htmlFor="message"
            className="text-xs text-neutral-700 tracking-widest font-medium uppercase"
          >
            message
          </label>
          <textarea
            id="message"
            name="message"
            className=" outline-none w-full border-b focus:text-text resize-none"
            placeholder="Tell us about your project..."
            rows={4}
          />
        </div>
        <div className="px-2">
          <ContactBtn />
        </div>
      </form>
  )
}

export default ContactForm