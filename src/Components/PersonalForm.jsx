import React from "react";

function PersonalForm({ formData, updateResume }) {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="m-1 text-sm font-medium text-black">
          Full Name
        </label>
        <input
          type="text"
          id="firstName"
          name="personal.firstName"
          value={formData.personal.firstName}
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
          name="personal.email"
          value={formData.personal.email}
          onChange={updateResume}
          className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="m-1 text-sm font-medium text-black">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="personal.phone"
          value={formData.personal.phone}
          onChange={updateResume}
          className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="m-1 text-sm font-medium text-black">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="personal.location"
          value={formData.personal.location}
          onChange={updateResume}
          className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
    </form>
  );
}

export default PersonalForm;
