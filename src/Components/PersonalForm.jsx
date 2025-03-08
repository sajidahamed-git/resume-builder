import { CctvIcon } from "lucide-react";
import React, { useState } from "react";
const initialValue = {
  firstName: "",
  email: "",
  phone: "",
  location: "",
};
function PersonalForm() {
  const [formData,setFormData] = useState(initialValue);

  const updateResume = (e) => {
    const {name,value} = e.target
    // console.log(e.target)
    // console.log(name,value)
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);
    // console.log(updatedFormData);

  };
  return (
    <form className="flex flex-col">
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className="m-1 text-sm font-medium text-black"
        >
          Full Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={updateResume}
          className="m-1 p-2 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="m-1 text-sm font-medium text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
            value={formData.email}
            onChange={updateResume}
          className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="mxtext-sm m-1 font-medium text-black">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
            value={formData.phone}
            onChange={updateResume}
          className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className="m-1 text-sm font-medium text-black"
        >
          Location
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
            value={formData.lastName}
            onChange={updateResume}
          className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
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
