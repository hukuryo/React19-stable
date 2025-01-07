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
    "aaa"
  );

  return (
    <div className="mt-10">
      <h1 className="flex justify-center text-xl">useActionState</h1>
      <form
        action={submitAction}
        className="space-y-4 p-6 shadow-md max-w-md mx-auto"
      >
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            className="border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 px-4 text-white bg-emerald-400 data-[disabled=true]:bg-red-500`}
          data-disabled={isPending}
        >
          {isPending ? "Updating..." : "Update"}
        </button>
        {name && <p>{name}</p>}
      </form>
    </div>
  );
}
