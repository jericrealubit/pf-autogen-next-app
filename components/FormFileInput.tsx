import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InputFile } from "@/components/InputFile";

const FormFileInput = () => {
  return (
    <div>
      <InputFile />
      <div className="box-input bg-zinc-300 w-full max-w-2xl shadow-md border-solid border-2 border-sky-200 rounded-lg p-5 mt-5 flex flex-row">
        <Input className="ml-5 w-96" placeholder="Enter your question" />
        <Button className="ml-5" variant="outline">
          send
        </Button>
      </div>
    </div>
  );
};
export default FormFileInput;
