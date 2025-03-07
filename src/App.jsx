import Form from "./Form";
import { Resume } from "./Resume";

export default function App() {
  return (
    <div className="flex w-full h-screen bg-gray-950">
      <div className="w-1/3 border-2 p-4">
        <Form/>
      </div>
      <div className="w-2/3 border-2 p-4">
        <Resume/>
      </div>
    </div>
  );
}
