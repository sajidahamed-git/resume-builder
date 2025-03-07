import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { FormHeading } from "./Components/FormHeading";
import PersonalForm from "./Components/PersonalForm";
function Form() {
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
          <AccordionTrigger className='text-xl'>Personal Information</AccordionTrigger>
          <AccordionContent>
            <PersonalForm></PersonalForm>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Form;
