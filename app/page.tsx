"use client";

import UseActionStateDemo from "@/components/useActionStateDemo";
import { UseOptimisticDemo } from "@/components/useOptimistic";

export default function Home() {
  return (
    <>
      <UseActionStateDemo />
      <hr className="mt-10" />
      <UseOptimisticDemo />
      <hr className="mt-10" />
    </>
  );
}
