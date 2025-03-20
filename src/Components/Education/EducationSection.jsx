import { Button } from "@/components/ui/button";
import { useState } from "react";
import EducationEntryInput from "./EducationEntryInput";
//education object is losing its previous entry
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
function EducationSection() {
  // const educationDetails = [];
  // const saveEducation = () => {
  //   const educationObject = {
  //     university: document.getElementById("university").value.trim(),
  //     degree: document.getElementById("degree").value.trim(),
  //     startDate: document.getElementById("startDate").value.trim(),
  //     endDate: document.getElementById("endDate").value.trim(),
  //     location: document.getElementById("location").value.trim(),
  //   };

  //   document.getElementById("university").value = "";
  //   document.getElementById("degree").value = "";
  //   document.getElementById("startDate").value = "";
  //   document.getElementById("endDate").value = "";
  //   document.getElementById("location").value = "";
  //   if (!educationObject.university || !educationObject.degree || !educationObject.startDate || !educationObject.endDate) {
  //     alert("Please fill in all required fields (University, Degree, Start Date, End Date).");
  //     return;
  //   }

  //   educationDetails.push(educationObject);
  //   console.log(educationDetails);
  // };
  const [showForm, setShowForm] = useState(false); //false - dont show the form
  const [educationDetails, setEducationDetails] = useState([]);

  const handleSaveEducation = (educationObject) => {
    educationDetails.push(educationObject);
    setEducationDetails(educationDetails);
    console.log(educationDetails);
  };

  const educationList = educationDetails.map((details, index) => (
    <div
      key={index}
      className="flex justify-between items-center p-4 mb-2 bg-gray-100 rounded-lg shadow-md"
    >
      <div>
        <div className="font-semibold">{details.university}</div>
        <div className="text-sm text-gray-600">
          {formatDate(details.startDate)} - {formatDate(details.endDate)}
        </div>
      </div>
      <Button
        variant="outline"
        className="text-sm"
        onClick={() => console.log(`Edit entry for ${details.university}`)}
      >
       Remove
      </Button>
    </div>
  ));

  if (!showForm) {
    if (educationDetails.length > 0) {
      return (
        <div>
          <div>{educationList}</div>
          <Button variant="outline" onClick={() => setShowForm(true)}>
            + Add
          </Button>
        </div>
      );
    }
    return (
      <Button variant="outline" onClick={() => setShowForm(true)}>
        + Add
      </Button>
    );
  }
  //if state set to true display the below from
  return (
    //I want to share the showForm state with the below component
    <EducationEntryInput setShowForm={setShowForm} save={handleSaveEducation} />
  );
}
export default EducationSection;
