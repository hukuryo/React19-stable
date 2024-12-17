import { useOptimistic, useState } from "react";

async function updateName(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return name;
}

export const UseOptimisticDemo = () => {
  const [optimisticName, setOptimisticName] = useOptimistic("");

  const submitAction = async (formData: FormData) => {
    const newName = formData.get("name") as string;
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
  };

  return (
    <div className="mt-10">
      <h1 className="flex justify-center font-bold text-xl">useOptimistic</h1>
      <form
        action={submitAction}
        className="space-y-4 bg-white p-6 shadow-md rounded-lg max-w-md mx-auto"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">
            Change Name:
          </label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={"" !== optimisticName}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          登録
        </button>
      </form>
      <p className="mt-4 text-gray-600 text-center">
        Your name is: <span className="font-semibold">{optimisticName}</span>
      </p>
    </div>
  );
};
