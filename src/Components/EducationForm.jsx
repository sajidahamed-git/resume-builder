import React from "react";

function EducationForm({ formData, updateResume }) {
  return (
    <form className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <label htmlFor="university" className="m-1 text-sm font-medium text-gray-700">
          University
        </label>
        <input
          type="text"
          id="university"
          name="education.university"
          value={formData.education.university}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="degree" className="m-1 text-sm font-medium text-gray-700">
          Degree
        </label>
        <input
          type="text"
          id="degree"
          name="education.degree"
          value={formData.education.degree}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="startDate" className="m-1 text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="education.startDate"
              value={formData.education.startDate}
              onChange={updateResume}
              className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="endDate" className="m-1 text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="education.endDate"
              value={formData.education.endDate}
              onChange={updateResume}
              className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="location" className="m-1 text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="education.location"
          value={formData.education.location}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    </form>
  );
}

export default EducationForm;
