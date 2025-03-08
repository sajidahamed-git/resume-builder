import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { FormHeading } from "./Components/FormHeading";
import PersonalForm from "./Components/PersonalForm";
import EducationForm from "./Components/EducationForm";
import ExperienceForm from "./Components/ExperienceForm";
function Form({formData,updateResume}) {
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
            <PersonalForm formData={formData} updateResume={updateResume}></PersonalForm>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value = 'item-2'>
          <AccordionTrigger className={'text-xl'}>Education</AccordionTrigger>
          <AccordionContent>
            <EducationForm></EducationForm>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value = 'item-3'>
          <AccordionTrigger className={'text-xl'}>Experience</AccordionTrigger>
          <AccordionContent>
            <ExperienceForm></ExperienceForm>
          </AccordionContent>

        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Form;
