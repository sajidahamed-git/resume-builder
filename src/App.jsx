import Form from "./Form";
import { Resume } from "./Resume";
import React, { useState } from "react";

const initialValue = {
  personal: {
    firstName: "James Charles Stuart",
    email: "king.james@royalcourt.uk",
    phone: "+44 1603 1625",
    location: "Palace of Whitehall, London",
  },
};

export default function App() {
  const [formData, setFormData] = useState(initialValue);
  const [educationDetails, setEducationDetails] = useState([
    {
      university: "University of Edinburgh",
      degree: "Philosophiæ Doctor (Honorary)",
      startDate: "01-01-1570",
      endDate: "01-01-1574",
      location: "Edinburgh, Scotland",
    },
  ]);
  const [experienceDetails, setExperienceDetails] = useState([
    {
      company: "Kingdom of England & Scotland",
      position: "Monarch & Supreme Governor",
      startDate: "03-24-1603",
      endDate: "03-27-1625",
      location: "London, England",
    },
  ]);
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
        <Form
          formData={formData}
          updateResume={updateResume}
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      </div>
      <div className="w-2/3 border-2">
        <Resume
          formData={formData}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
        />
      </div>
    </div>
  );
}
