import React from "react";

function PersonalForm({ formData, updateResume }) {
  return (
    <form className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="m-1 text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="firstName"
          name="personal.firstName"
          value={formData.personal.firstName}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="m-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="personal.email"
          value={formData.personal.email}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="m-1 text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="personal.phone"
          value={formData.personal.phone}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="m-1 text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="personal.location"
          value={formData.personal.location}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    </form>
  );
}

export default PersonalForm;
