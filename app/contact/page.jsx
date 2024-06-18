"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import React from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Form submitted successfully");
      setFormData({
        name: "",
        company: "",
        email: "",
        details: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

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
          name="name"
          value={formData.name}
          onChange={handleChange}
          labelPlacement="outside"
          size="lg"
          variant="flat"
          radius="lg"
        />
        <Input
          label="My company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          labelPlacement="outside"
          size="lg"
          variant="flat"
          radius="lg"
        />
        <Input
          isRequired
          label="My email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          labelPlacement="outside"
          size="lg"
          variant="flat"
          radius="lg"
        />
        <Textarea
          isRequired
          label="Deep details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          labelPlacement="outside"
          variant="flat"
          size="lg"
          disableAutosize
          classNames={{
            label: "text-foreground",
            base: "max-w-lg",
            input: "resize-y min-h-[100px]",
          }}
        />
        <Button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-background hover:text-foreground bg-cyan-300 hover:bg-cyan-700"
        >
          Submit
        </Button>
      </form>
    </main>
  );
}
