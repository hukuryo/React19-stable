import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

async function updateName() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

function Form({ action }: { action: () => void }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export const UseFormStatusDemo = () => {
  return (
    <div className="mt-10 flex justify-center">
      <Form action={() => updateName()} />
    </div>
  );
};
