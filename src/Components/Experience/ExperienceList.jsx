import { Button } from "@/components/ui/button.jsx";
import { Trash } from "lucide-react";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm.jsx";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function ExperienceList({ experienceDetails, setExperienceDetails }) {
  const [showForm, setShowForm] = useState(false); //false - dont show the form

  const savetoArray = (experienceObject) => {
    setExperienceDetails([...experienceDetails, experienceObject]); // Create a new array
  };
  const handleRemoveExperience = (company) => {
    const updatedDetails = experienceDetails.filter(
      (details) => details.company !== company,
    );
    setExperienceDetails(updatedDetails); // Update the state with the filtered array
  };
  const educationList = experienceDetails.map((details) => (
    <div
      key={details.company} //not recommended but okay for now
      className="mb-2 flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow-md"
    >
      <div>
        <div className="font-semibold">{details.company}</div>
        <div className="text-sm text-gray-600">
          {formatDate(details.startDate)} - {formatDate(details.endDate)}
        </div>
      </div>
      <Button
        variant="outline"
        className="text-sm hover:cursor-pointer hover:bg-red-400"
        onClick={() => handleRemoveExperience(details.company)}
      >
        <Trash />
      </Button>
    </div>
  ));

  if (!showForm) {
    if (experienceDetails.length > 0) {
      return (
        <div>
          <div>{educationList}</div>
          <Button
            className="hover:cursor-pointer hover:bg-gray-100"
            variant="outline"
            onClick={() => setShowForm(true)}
          >
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
    <ExperienceForm setShowForm={setShowForm} savetoArray={savetoArray} />
  );
}
export default ExperienceList;
