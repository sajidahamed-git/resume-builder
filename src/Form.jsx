import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormHeading } from "./Components/FormHeading";
function Form() {
  return (
    <div className="flex flex-col gap-6">
      <FormHeading></FormHeading>
      {/* Accordion Section */}
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-2xl bg-gray-500 px-4 py-1 text-black"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent>
            Yes, it adheres to accessibility best practices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Form;
