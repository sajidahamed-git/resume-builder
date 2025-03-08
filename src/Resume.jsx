import React from "react";

export const Resume = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Personal Details Section */}
      <section className="mb-6 w-full bg-blue-400 py-8 text-center rounded-lg shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-white">Full Name</h2>
        <div className="flex justify-around text-white">
          <div>Email</div>
          <div>Phone</div>
          <div>Location</div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6 text-center">
        <h2 className="mb-2 bg-blue-300 text-2xl font-bold py-2 rounded-lg shadow-md">Education</h2>
        <div className="flex justify-center">
          <div className="w-2/3 p-2 text-left">   
            <p>
              <strong>University:</strong> XYZ University
            </p>
            <p>
              <strong>Degree:</strong> Bachelor of Science in Computer Science
            </p>
          </div>
          <div className="w-1/3 p-2 text-right">
            <div>From Date - To Date</div>
            <div>Location</div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="text-center">
        <h2 className="mb-2 bg-blue-300 text-2xl font-bold py-2 rounded-lg shadow-md">Experience</h2>
        <div className="flex justify-center">
          <div className="w-2/3 p-2 text-left">
            <p>
              <strong>Company:</strong> ABC Corp
            </p>
            <p>
              <strong>Position:</strong> Software Developer
            </p>
          </div>
          <div className="w-1/3 p-2 text-right">
            <p>
              <strong>Duration:</strong> Jan 2023 - Present
            </p>
            <p>
              <strong>Location:</strong> City, Country
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
