function EducationForm({ formData, updateResume }) {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className="m-1 text-sm font-medium text-black"
        >
        University
        </label>
        <input
          type="text"
          id="university"
          name="education.university"
          value={formData.education.firstName}
          onChange={updateResume}
          className="m-1 p-2 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className="m-1 text-sm font-medium text-black"
        >
          Degree
        </label>
        <input
          type="text"
          id="degree"
          name="education.degree"
          value={formData.education.degree}
          onChange={updateResume}
          className="m-1 p-2 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start">
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="email"
              className="m-1 text-sm font-medium text-black"
            >
              Start Date
            </label>
            <input
              type=""
              id="StartDate"
              name="education.startDate"
              value={formData.education.startDate}
              onChange={updateResume}
              className="m-1 p-2 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="email"
              className="m-1 ml-2 text-sm font-medium text-black"
            >
              End Date
            </label>
            <input
              type=""
              id="date"
              name="education.endDate"
              value={formData.education.endDate}
              onChange={updateResume}
              //   value={formData.email}
              //   onChange={handleChange}
              className="m-1 h-8 p-2 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
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
          id="phone"
          name="phone"
          //   value={formData.phone}
          //   onChange={handleChange}
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
export default EducationForm;
