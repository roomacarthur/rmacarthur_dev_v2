"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

export default function contactPage() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form data
    console.log("Form submitted");
  };
  const [value, setValue] = React.useState("junior2nextui.org");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24 w-full mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 lg:mb-12 text-foreground text-center">
        Get in touch 📧
      </h1>
      <form onSubmit={handleSubmit} className="space-y-12 w-full max-w-lg">
        <Input
          isRequired
          label="I am"
          type="text"
          labelPlacement="outside"
          size="lg"
          variant="flat"
          radius="lg"
        ></Input>
        <Input
          label="My company"
          type="text"
          labelPlacement="outside"
          size="lg"
          variant="flat"
          radius="lg"
        ></Input>
        <Input
          isRequired
          label="My email"
          type="email"
          labelPlacement="outside"
          size="lg"
          variant="bordered"
          radius="lg"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "success"}
          errorMessage={isInvalid && "Please enter a valid email"}
          onValueChange={setValue}
        ></Input>
        <Input
          isRequired
          label="Deep details"
          type="text"
          labelPlacement="outside"
          size="lg"
          variant="flat"
          radius="lg"
        ></Input>
        <Button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </Button>
      </form>
    </main>
  );
}
