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
    //add bg gray 950 for the below div for darkmode
    <div className="flex h-screen w-full">
      <div className="w-1/3 border-2 p-4">
        <Form formData={formData} updateResume={updateResume} />
      </div>
      <div className="w-2/3 border-2">
        <Resume formData={formData} />
      </div>
    </div>
  );
}
