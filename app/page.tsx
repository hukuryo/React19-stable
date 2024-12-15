"use client";

import UseActionStateDemo from "@/components/useActionStateDemo";
import UseTransitionDemo from "@/components/useTransitionDemo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <UseActionStateDemo />
      <hr />
      <UseTransitionDemo />
    </>
  );
}
