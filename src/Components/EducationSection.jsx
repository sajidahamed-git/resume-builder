import { Button } from "@/components/ui/button";
import { useState } from "react";
import EducationEntryInput from "./Education/EducationEntryInput";

function EducationSection() {
  const educationDetails = [];
  const saveEducation = () => {
    const educationObject = {
      university: document.getElementById("university").value.trim(),
      degree: document.getElementById("degree").value.trim(),
      startDate: document.getElementById("startDate").value.trim(),
      endDate: document.getElementById("endDate").value.trim(),
      location: document.getElementById("location").value.trim(),
    };

    document.getElementById("university").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("location").value = "";

    educationDetails.push(educationObject);
    console.log(educationDetails);
  };
  const [showForm,setShowForm] = useState(false); //false - dont show the form

  if (!showForm) {
    return (
      <Button variant="outline" onClick={() =>setShowForm(true)}>
        + Add
      </Button>
    );
  }
  //if state set to true display the below from
  return (
    //I want to share the showForm state with the below component
    <EducationEntryInput  showForm={showForm} setShowForm = {setShowForm} saveEducation = {saveEducation}/>
  );
}
export default EducationSection;
