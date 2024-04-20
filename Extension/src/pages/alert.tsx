import { useState, useEffect } from "react";

const AlertPage = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  fetch("https://teyehree.co.nz/getEmail", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: localStorage.getItem("userId"),
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setEmail(data.response);
    });

  useEffect(() => {
    const fetchData = async () => {
      if (typeof email !== "string" || email === "") {
        setResult(`Loading.. ${email}`);
        return;
      }
      const res = await fetch(
        `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`,
        {
          headers: {
            "hibp-api-key": "5dec7a3c1d04424693816febd897cd2a",
          },
          method: "GET",
          mode: "no-cors",
        }
      );

      if (res.ok) {
        setResult("Your email address has been the victim of a data breach");
      } else {
        setResult("Your email is secure");
      }
    };

    fetchData();
  }, [email]);

  return (
    <div>
      <h1 className="font-Poppins text-text-default font-bold p-18">
        Alert Page
      </h1>
      <h1 className="font-Poppins text-text-default font-bold p-18">{email}</h1>
      {/* <Pwned email={email} /> */}
      <h1 className="font-Poppins text-text-default font-bold p-18">
        {result}
      </h1>
    </div>
  );
};

export default AlertPage;
