function ExperienceForm({ formData, updateResume }) {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className="m-1 text-sm font-medium text-black"
        >
          Company Name
        </label>
        <input
          type="text"
          id="experience.company"
          name="experience.company"
          //   value={formData.firstName}
          value={formData.experience.company}
          onChange={updateResume}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className="m-1 text-sm font-medium text-black"
        >
          Position Title
        </label>
        <input
          type="text"
          id="experience.position"
          name="experience.position"
          value={formData.experience.position}
          onChange={updateResume}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start">
          <div className="flex w-1/2 flex-col">
            <label
              htmlFor="email"
              className="m-1 text-sm font-medium text-black"
            >
              Start Date
            </label>
            <input
              type="date"
              id="experience.startDate"
              name="experience.startDate"
              value={formData.experience.startDate}
              onChange={updateResume}

              className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label
              htmlFor="email"
              className="m-1 ml-2 text-sm font-medium text-black"
            >
              End Date
            </label>
            <input
              type="date"
              id="experience.endDate"
              name="experience.endDate"
              value={formData.experience.endDate}
              onChange={updateResume}
              className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="m-1 text-sm font-medium text-black">
          Location
        </label>
        <input
          type="tel"
          id="experience.location"
          name="experience.location"
          value={formData.experience.location}
          onChange={updateResume}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="text-center">
        {/* <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            + Add Education
          </button> */}
      </div>
    </form>
  );
}
export default ExperienceForm;
