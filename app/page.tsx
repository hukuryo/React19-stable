"use client";

import UseActionStateDemo from "@/components/useActionStateDemo";
import { UseFormStatusDemo } from "@/components/useFormStatus";
import { UseOptimisticDemo } from "@/components/useOptimisticDemo";

export default function Home() {
  return (
    <>
      <UseActionStateDemo />
      <hr className="mt-10" />
      <UseFormStatusDemo />
      <hr className="mt-10" />
      <UseOptimisticDemo />
    </>
  );
}
