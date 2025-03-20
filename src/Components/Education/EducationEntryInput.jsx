import { Button } from "@/components/ui/button";


function EducationEntryInput({setShowForm,savetoArray}) {
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

    
    if (!educationObject.university) {
      alert("Please fill in all required fields (University, Degree, Start Date, End Date).");
      return;
    }
    savetoArray(educationObject)
    

  };
    return (
        <form className="flex flex-col">
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="m-1 text-sm font-medium text-black"
          >
            University
          </label>
          <input
            type="text"
            id="university"
            name="education.university"
            // onChange={console.log(educationDetails)}
            className="m-1 h-8 rounded-sm border-2 border-gray-600 p-2 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="m-1 text-sm font-medium text-black"
          >
            Degree
          </label>
          <input
            type="text"
            id="degree"
            name="education.degree"
            className="m-1 h-8 rounded-sm border-2 border-gray-600 p-2 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-start">
            <div className="flex w-1/2 flex-col">
              <label
                htmlFor="email"
                className="m-1 text-sm font-medium text-black"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="education.startDate"
                className="m-1 h-8 rounded-sm border-2 border-gray-600 p-2 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label
                htmlFor="email"
                className="m-1 ml-2 text-sm font-medium text-black"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="education.endDate"
                className="m-1 h-8 rounded-sm border-2 border-gray-600 p-2 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="m-1 text-sm font-medium text-black">
            Locationn
          </label>
          <input
            type="tel"
            id="location"
            name="education.location"
            className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="mt-2 text-center">
          <Button
            className='hover:cursor-pointer hover:bg-green-200'
            type="button"
            variant="outline"
            onClick={() => {
              saveEducation();
              setShowForm(false);
            }}
          >
            Save
          </Button>
        </div>
      </form>
    )
}
export default EducationEntryInput