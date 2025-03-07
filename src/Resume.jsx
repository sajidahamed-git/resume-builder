import React from "react";

export const Resume = () => {
  return (
    <div className="">
      {/* Personal Details Section */}
      <section className="mb-6 w-full bg-blue-400 py-8 text-center">
        <h2 className="mb-2 text-xl font-bold">Full Name</h2>
        <div className="flex justify-around">
          <div>Email</div>
          <div>Phone </div>
          <div>Location</div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6 text-center">
        <h2 className="mb-2 bg-blue-300 text-xl font-bold">Education</h2>
        <div className="flex">
          <div id="left" className="w-1/3">
            <div>from date to date</div>
            <div>Location</div>
          </div>
          <div className="right">
            <p>
              <strong>University:</strong> XYZ University
            </p>
            <p>
              <strong>Degree:</strong> Bachelor of Science in Computer Science
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="text-center">
        <h2 className="mb-2 bg-blue-300 text-xl font-bold">Experience</h2>
        <strong>Company:</strong> ABC Corp
        <p>
          <strong>Position:</strong> Software Developer
        </p>
        <p></p>
        <p>
          <strong>Duration:</strong> Jan 2023 - Present
        </p>
      </section>
    </div>
  );
};
