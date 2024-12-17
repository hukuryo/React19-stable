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
    ): Promise<any | null> => {
      const error = await updateName(formData.get("name") as string);
      if (error) {
        return error;
      }
      return null;
    },
    null
  );

  return (
    <div className="mt-10">
      <h1 className="flex justify-center font-bold text-xl">useActionState</h1>
      <form
        action={submitAction}
        className="space-y-4 bg-white p-6 shadow-md rounded-lg max-w-md mx-auto"
      >
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your name"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isPending
              ? "bg-emerald-400 cursor-not-allowed"
              : "bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          }`}
        >
          {isPending ? "Updating..." : "Update"}
        </button>
        {isPending && <p className="text-sm text-gray-500">Loading...</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </div>
  );
}
