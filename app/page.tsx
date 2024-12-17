"use client";

import UseActionStateDemo from "@/components/useActionStateDemo";
import { UseOptimisticDemo } from "@/components/useOptimistic";
import UseTransitionDemo from "@/components/useTransitionDemo";

export default function Home() {
  return (
    <>
      <h1>useActionState</h1>
      <UseActionStateDemo />
      <hr />
      <h1>useTransition</h1>
      <UseTransitionDemo />
      <hr />
      <h1>useOptimistic</h1>
      <UseOptimisticDemo />
    </>
  );
}
