import { useState } from "react";

const checkPasswordQuality = (password: string): boolean => {
  // Check if the password meets the required criteria
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}[\]|:;<>,.?/`~]/.test(password);
  const isLongEnough = password.length >= 8;

  // Return true if all criteria are met, otherwise return false
  return (
    hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough
  );
};

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
    const run = true;
    while (run) {
      console.log("Generating random string...");
      const randomString = generateRandomString();
      if (checkPasswordQuality(randomString)) {
        setText(randomString);
        console.log(
          "Requirements Met\nrandomString:",
          randomString,
          "length: ",
          randomString.length
        );
        break;
      }
    }
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
