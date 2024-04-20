import { useState } from "react";
import Pwned from "../components/PwnedApi";

const AlertPage = () => {
  // const [email, setEmail] = useState("");
  // fetch("http://127.0.0.1:5000/getEmail", {
  //   method: "POST",
  //   mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     userId: localStorage.getItem("userId"),
  //   }),
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setEmail(data.email);
  //   });
  return (
    <div>
      <h1 className="font-Poppins text-text-default font-bold p-18">
        Alert Page
      </h1>
      {/* <h1 className="font-Poppins text-text-default font-bold p-18">{email}</h1> */}
      {/* <Pwned email={localStorage.getItem("email") ?? ""} /> */}
    </div>
  );
};

export default AlertPage;
