// import React, { useState } from 'react';

function PersonalForm() {
  //   const [formData, setFormData] = useState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     console.log('Form submitted:', formData);
  //   };

  return (
    <form className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className="m-1 text-sm font-medium text-black"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   value={formData.firstName}
          //   onChange={handleChange}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-sm font-medium text-black">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          //   value={formData.lastName}
          //   onChange={handleChange}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          //   value={formData.email}
          //   onChange={handleChange}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm font-medium text-black">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          //   value={formData.phone}
          //   onChange={handleChange}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        {/* <button */}
        {/* type="submit" */}
        {/* className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" */}
        {/* > */}
        {/* Submit */}
        {/* </button> */}
      </div>
    </form>
  );
}

export default PersonalForm;
