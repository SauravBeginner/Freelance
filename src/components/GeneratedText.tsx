"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `This functionality empowers you to generate a public link for your documents, ensuring effortless updates to the latest version without the need for frequent link modifications. When incorporated into your document on the login page of our client website, it simplifies the process, eliminating the hassle of constantly updating the link.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
