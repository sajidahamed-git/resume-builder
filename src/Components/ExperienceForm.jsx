import React from "react";

function ExperienceForm({ formData, updateResume }) {
  return (
    <form className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <label htmlFor="company" className="m-1 text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="experience.company"
          value={formData.experience.company}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="position" className="m-1 text-sm font-medium text-gray-700">
          Position Title
        </label>
        <input
          type="text"
          id="position"
          name="experience.position"
          value={formData.experience.position}
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
              name="experience.startDate"
              value={formData.experience.startDate}
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
              name="experience.endDate"
              value={formData.experience.endDate}
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
          name="experience.location"
          value={formData.experience.location}
          onChange={updateResume}
          className="m-1 p-2 h-10 rounded-md border-2 border-gray-300 transition-all duration-200 focus:rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
}

export default ExperienceForm;
