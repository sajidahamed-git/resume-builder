import Form from "./Form";
import { Resume } from "./Resume";

export default function App() {
  return (
    //add bg gray 950 for the below div for darkmode
    <div className="flex w-full h-screen">
      <div className="w-1/3 border-2 p-4">
        <Form/>
      </div>
      <div className="w-2/3 border-2">
        <Resume/>
      </div>
    </div>
  );
}
