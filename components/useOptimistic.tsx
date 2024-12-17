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
    <>
      <form action={submitAction}>
        <p>
          <label>Change Name:</label>
          <input type="text" name="name" disabled={"" !== optimisticName} />
        </p>
        <button type="submit">登録</button>
      </form>
      <p>Your name is: {optimisticName}</p>
    </>
  );
};
