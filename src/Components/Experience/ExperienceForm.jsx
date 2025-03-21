import { Button } from "@/components/ui/button";

function ExperienceForm({ setShowForm, savetoArray }) {
  const saveExperience = () => {
    const experienceObject = {
      company: document.getElementById("experience.company").value.trim(),
      position: document.getElementById("experience.position").value.trim(),
      startDate: document.getElementById("experience.startDate").value.trim(),
      endDate: document.getElementById("experience.endDate").value.trim(),
      location: document.getElementById("experience.location").value.trim(),
    };

      // Clear the input fields after saving
  document.getElementById("experience.company").value = "";
  document.getElementById("experience.position").value = "";
  document.getElementById("experience.startDate").value = "";
  document.getElementById("experience.endDate").value = "";
  document.getElementById("experience.location").value = "";

    
    if (!experienceObject.company) {
      alert("Please fill in all required fields (University, Degree, Start Date, End Date).");
      return;
    }
    savetoArray(experienceObject)
    

  };

  return (
    <form className="flex flex-col">
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className="m-1 text-sm font-medium text-black"
        >
          Company Name
        </label>
        <input
          type="text"
          id="experience.company"
          name="experience.company"
          //   value={formData.firstName}
          // value={formData.experience.company}
          // onChange={updateResume}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className="m-1 text-sm font-medium text-black"
        >
          Position Title
        </label>
        <input
          type="text"
          id="experience.position"
          name="experience.position"
          // value={formData.experience.position}
          // onChange={updateResume}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
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
              id="experience.startDate"
              name="experience.startDate"
              // value={formData.experience.startDate}
              // onChange={updateResume}

              className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
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
              id="experience.endDate"
              name="experience.endDate"
              // value={formData.experience.endDate}
              // onChange={updateResume}
              className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="m-1 text-sm font-medium text-black">
          Location
        </label>
        <input
          type="tel"
          id="experience.location"
          name="experience.location"
          // value={formData.experience.location}
          // onChange={updateResume}
          className="m-1 h-8 rounded-sm border-2 border-gray-600 transition-all duration-200 focus:rounded-md focus:border-black focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="mt-2 text-center">
      <Button
            className='hover:cursor-pointer hover:bg-green-200'
            type="button"
            variant="outline"
            onClick={() => {
              console.log('clicked')
              saveExperience();
              setShowForm(false);
            }}
          >
            Save
          </Button>
      
      </div>
    </form>
  );
}
export default ExperienceForm;
