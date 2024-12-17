"use client";

import UseActionStateDemo from "@/components/useActionStateDemo";
import { UseOptimisticDemo } from "@/components/useOptimisticDemo";

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
