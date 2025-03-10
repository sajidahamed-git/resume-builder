import React from "react";
import { EnvelopeClosedIcon, DrawingPinFilledIcon } from "@radix-ui/react-icons";

export const Resume = ({ formData }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
        <div className="flex justify-center">
          <div className="w-2/3 p-2 text-left">
            <div className="flex">
              <strong>University:</strong>
              <div className="ml-2">{formData.education.university}</div>
            </div>
            <div className="flex">
              <strong>Degree:</strong>
              <div className="ml-2">{formData.education.degree}</div>
            </div>
          </div>
          <div className="w-1/3 p-2 text-right">
            <div className="flex flex-col items-end">
              <div>
                <strong>Duration:</strong> {formatDate(formData.education.startDate)} - {formatDate(formData.education.endDate)}
              </div>
              <div>{formData.education.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="text-center">
        <h2 className="mb-2 rounded-lg bg-blue-300 py-2 text-2xl font-bold shadow-md">
          Experience
        </h2>
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
              <strong>Duration:</strong> {formatDate('2023-01-01')} - {formatDate('2025-02-26')}
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
