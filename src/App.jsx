import Form from "./Form";
import { Resume } from "./Resume";
import React, { useState } from "react";

const initialValue = {
  personal: { firstName: "", email: "", phone: "", location: "" },
  education: {
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
  experience: {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
  },
};

export default function App() {
  const [formData, setFormData] = useState(initialValue);

  const updateResume = (e) => {
    const { name, value } = e.target;
    const [section, key] = name.split(".");
    const updatedFormData = {
      ...formData,
      [section]: {
        ...formData[section],
        [key]: value,
      },
    };
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <div className="w-1/3 border-r-2 p-6">
        <Form formData={formData} updateResume={updateResume} />
      </div>
      <div className="w-2/3 p-6">
        <Resume formData={formData} />
      </div>
    </div>
  );
}
