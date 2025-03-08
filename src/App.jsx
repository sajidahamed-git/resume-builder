import Form from "./Form";
import { Resume } from "./Resume";
import React, { useState } from "react";

const initialValue = {
  firstName: "",
  email: "",
  phone: "",
  location: "",
};

export default function App() {

    const [formData,setFormData] = useState(initialValue);
    const updateResume = (e) => {
      const {name,value} = e.target
      // console.log(e.target)
      // console.log(name,value)
      const updatedFormData = {
        ...formData,
        [name]: value
      };
      setFormData(updatedFormData);
      // console.log(updatedFormData);
  
    };
  
  return (
    //add bg gray 950 for the below div for darkmode
    <div className="flex w-full h-screen">
      <div className="w-1/3 border-2 p-4">
        <Form formData = {formData} updateResume={updateResume}/>
      </div>
      <div className="w-2/3 border-2">
        <Resume formData ={formData}/>
      </div>
    </div>
  );
}
