import React from "react";
import {
  EnvelopeClosedIcon,
  DrawingPinFilledIcon,
} from "@radix-ui/react-icons";

export const Resume = ({ formData, educationDetails, experienceDetails }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  // console.log(educationDetails, 'from resume')
  const educationResume = educationDetails.map((details) => (
    <div key={details.university}>
      <div className="flex justify-center">
        <div className="w-2/3 p-2 text-left">
          <div className="flex gap-2">
            <strong>University:</strong>
            {details.university}
          </div>
          <div className="flex gap-2">
            <strong>Degree:</strong>
            {details.degree}
          </div>
        </div>
        <div className="w-1/3 p-2 text-right">
          <div className="flex flex-col items-end">
            <div>
              <strong>Duration:</strong> {formatDate(details.startDate)} -{" "}
              {formatDate(details.endDate)}
            </div>
          </div>
          <strong>Location:</strong> {details.location}
        </div>
      </div>
    </div>
  ));
  const experienceResume =experienceDetails.map((details) => (
    <div key={details.company}>
      <div className="flex justify-center">
        <div className="w-2/3 p-2 text-left">
          <div className="flex gap-2">
            <strong>University:</strong>
            {details.company}
          </div>
          <div className="flex gap-2">
            <strong>Degree:</strong>
            {details.position}
          </div>
        </div>
        <div className="w-1/3 p-2 text-right">
          <div className="flex flex-col items-end">
            <div>
              <strong>Duration:</strong> {formatDate(details.startDate)} -{" "}
              {formatDate(details.endDate)}
            </div>
          </div>
          <strong>Location:</strong> {details.location}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      {/* Personal Details Section */}
      <section className="mb-6 w-full rounded-lg bg-blue-400 py-8 text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-white">
          {formData.personal.firstName}
        </h2>
        <div className="flex justify-around text-white">
          <div className="flex items-center">
            <EnvelopeClosedIcon className="mr-2" />
            <div>{formData.personal.email}</div>
          </div>
          <div>{formData.personal.phone}</div>
          <div>
            <div className="flex items-center">
              <DrawingPinFilledIcon className="mr-2"></DrawingPinFilledIcon>
              <div>{formData.personal.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6 text-center">
        <h2 className="mb-2 rounded-lg bg-blue-300 py-2 text-2xl font-bold shadow-md">
          Education
        </h2>
        <div>{educationResume}</div>
      </section>

      {/* Experience Section */}
      <section className="text-center">
        <h2 className="mb-2 rounded-lg bg-blue-300 py-2 text-2xl font-bold shadow-md">
          Experience
        </h2>
        <div>{experienceResume}</div>
 
      </section>
    </div>
  );
};
