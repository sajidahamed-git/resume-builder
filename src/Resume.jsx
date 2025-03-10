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
            <div className="flex gap-2">
              <strong>University:</strong>{formData.education.university}
            </div>
            <div className="flex gap-2">
              <strong>Degree:</strong>{formData.education.degree}
            </div>
          </div>
          <div className="w-1/3 p-2 text-right">
            <div className="flex flex-col items-end">
              <div>
                <strong>Duration:</strong> {formatDate(formData.education.startDate)} - {formatDate(formData.education.endDate)}
              </div>
            </div>
              <strong>Location:</strong> {formData.education.location}
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
            <div className="flex gap-2">
              <strong>Company:</strong>{formData.experience.company}
            </div>
            <div className="flex gap-2">
              <strong>Position:</strong>{formData.experience.position}
            </div>
          </div>
          <div className="w-1/3 p-2 text-right">
            <div className="flex flex-col items-end">
              <div>
                <strong>Duration:</strong> {formatDate(formData.experience.startDate)} - {formatDate(formData.experience.endDate)}
              </div>
            </div>
              <strong>Location:</strong> {formData.experience.location}
          </div>
        </div>

      </section>
    </div>
  );
};
