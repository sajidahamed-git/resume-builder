import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { FormHeading } from "./Components/FormHeading";
import PersonalForm from "./Components/Personal/PersonalForm";
import EducationList from "./Components/Education/EducationList";
// import ExperienceForm from "./Components/Experience/ExperienceForm";
import ExperienceList from "./Components/Experience/ExperienceList";
function Form({
  formData,
  updateResume,
  educationDetails,
  setEducationDetails,
  experienceDetails,
  setExperienceDetails,
}) {
  return (
    <div className="flex flex-col gap-6">
      <FormHeading></FormHeading>
      {/* Accordion Section */}
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-2xl bg-gray-500 px-4 py-1 text-black"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            Personal Information
          </AccordionTrigger>
          <AccordionContent>
            <PersonalForm
              formData={formData}
              updateResume={updateResume}
            ></PersonalForm>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className={"text-xl"}>Education</AccordionTrigger>
          <AccordionContent>
            <EducationList
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
            ></EducationList>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={"text-xl"}>Experience</AccordionTrigger>
          <AccordionContent>
            <ExperienceList
              experienceDetails={experienceDetails}
              setExperienceDetails={setExperienceDetails}
            ></ExperienceList>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Form;
