import { useActionState } from "react";

const updateName = async (name: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(name), 3000);
  });
};

export default function UseActionStateDemo() {
  const [name, submitAction, isPending] = useActionState(
    async (prevState: string, formData: FormData) => {
      const newName = await updateName(formData.get("name") as string);
      if (!newName) {
        return "";
      }
      return newName;
    },
    ""
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
        {name && <p className="text-sm">{name}</p>}
      </form>
    </div>
  );
}
