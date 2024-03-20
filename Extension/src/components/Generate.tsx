import { useState } from "react";

const Generate = () => {
  const [text, setText] = useState("Generate");
  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/`~";
    let result = "";
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const handleClick = () => {
    const randomString = generateRandomString();
    setText(randomString);
    console.log(randomString);
  };

  return (
    <>
      <div className="bg-background-900 p-4 mb-4 rounded-lg items-center">
        <button onClick={handleClick}>{text}</button>
      </div>
    </>
  );
};

export default Generate;
