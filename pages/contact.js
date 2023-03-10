import styles from '../styles/Home.module.css';
import React, { useState, useRef } from 'react';
import { send } from 'emailjs-com';
import emailjs from '@emailjs/browser';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Contact = () => {
  const [value, setValue] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dx0jdvx',
        'template_zr1cvwi',
        form.current,
        'cqnaG6ergeuhUBgPF'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const onSubmit = (e) => {
      e.target.reset();
    };
  };

  return (
    <div className=" self-center">
      <div className="flex justify-center	">
        <img src="/images/smallLogo.png" height="300" width="200" />
      </div>

      <p className="text-center	leading-relaxed	">
        I would love to collaborate with you. Let me know any ideas or thoughts
        you have and I will get back to you as quickly as possible.
      </p>
      <p className="font-bold text-center leading-relaxed	text-lg">
        Thank you for stopping by.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        method="post"
        encType="multipart/form-data"
        className="bg-white  px-8 pt-6 pb-8 mb-4"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Name"
          required
        />

        <label className="block text-gray-700 text-sm pt-1 font-bold mb-2">
          Email
        </label>

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        <label className="block text-gray-700 text-sm py-1 pt-1 font-bold mb-2">
          Phone Number
        </label>

        <PhoneInput
          placeholder="000 000 0000"
          value={value}
          onChange={setValue}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="user_phone"
        />

        <label className="block text-gray-700 text-sm pt-1 font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="What would you like to make together?"
          className="shadow appearance-none border rounded w-full py-2 px-3 pb-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          required
        />

        <div className="shrink-0"></div>
        <label className="block">
          <span className="sr-only">Choose Sample Photo</span>
          <input
            name="file"
            type="file"
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-500 file:text-white
              hover:file:bg-violet-100"
          />
        </label>

        <input
          className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2 md:w-1/4 md:justify-center	"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
