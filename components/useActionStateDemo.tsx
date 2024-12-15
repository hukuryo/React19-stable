import { useState, useActionState } from "react";

const updateName = async (name: string) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(name), 3000);
  });

export default function UseActionStateDemo() {
  const [error, submitAction, isPending] = useActionState(
    async (
      _previousError: string | null,
      formData: FormData
    ): Promise<string | null> => {
      const error = await updateName(formData.get("name") as string);
      if (error) {
        return error;
      }
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" className="" />
      <button type="submit" disabled={isPending} className="bg-emerald-600">
        Update
      </button>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
