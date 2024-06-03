"use client";
import { useEffect } from "react";
import CustomImage from "./components/CustomImage";

export default function Home() {
  useEffect(() => {
    console.log("this should only be logged in the browser console");
  }, []);
  return (
    <main>
      <span style={{ border: "solid 1px white", backgroundColor: "red" }}>
        <CustomImage src="/vercel.svg" alt="Next.js logo" width={180} height={37} priority />
      </span>
      <p>Test</p>
    </main>
  );
}
