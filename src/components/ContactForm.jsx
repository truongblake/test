import React from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4db88bad-3667-4b2d-888f-992c8a1ddf85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="scale-1 m-4 w-full md:w-1/2 bg-zinc-300 rounded-lg border border-blue-400 shadow-blue-500 p-10"
    >
      <h1 className="text-gray-900 text-2xl lg:text-4xl font-bold mb-7">Contact Me</h1>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="text-black bg-zinc-100 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="text-black bg-zinc-100 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          className="text-black bg-zinc-100 h-[15em] mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring opacity-50"
        />
      </div>
      <button
        className="btn px-3 py-2 rounded-lg bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}
