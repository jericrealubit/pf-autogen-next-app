"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

export function InputFile() {
  const [file, setFile] = useState<string>("");
  const [openAIResponce, setopenAIResponce] = useState<string>("");

  let fileExtension = "";

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      window.alert("No file selected. Choose a file.");
    } else {
      const file = event.target.files[0];
      fileExtension = file.name.split(".").reverse()[0]; // get file extension

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === "string") {
          console.log(reader.result);
          setFile(reader.result);
        }
      };

      reader.onerror = (error) => {
        console.log("error: " + error);
      };
    }
  };

  return (
    <div className="grid w-full  items-center gap-1.5 p-5">
      <Input
        className="cursor-pointer"
        id="picture"
        type="file"
        // accept=".pdf"
        onChange={(e) => handleFileChange(e)}
      />
      {file !== "" ? (
        <div className="overflow-hidden">
          <object data={file} width="600" height="300"></object>
          {fileExtension !== "pdf" ?? (
            <Image
              src={file}
              className="w-full object-contain max-h-72"
              width={100}
              height={100}
              alt="File preview"
            />
          )}
        </div>
      ) : (
        <div className="mb-4 p-8 text-center">
          <p>Once you upload a file, you will see it here</p>
        </div>
      )}
    </div>
  );
}
