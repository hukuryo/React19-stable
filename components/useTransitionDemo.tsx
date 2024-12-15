import { SetStateAction, useState, useTransition } from "react";

async function updateName(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("リセットしました");
  return "name";
}

export default function UseTransitionDemo() {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(async () => {
      const name = await updateName("name!!");
      window.alert(name);
    });
  };

  return (
    <>
      <button onClick={handleClick}>実行!</button>
      {isPending && <p>Loading...</p>}
    </>
  );
}
