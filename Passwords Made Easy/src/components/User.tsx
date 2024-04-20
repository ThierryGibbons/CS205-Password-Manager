import { useAuth0 } from "@auth0/auth0-react";

const ThisUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("Loading ...");
  }

  if (!isAuthenticated || !user) {
    console.log("No user data available.");
  }

  if (isAuthenticated && user) {
    console.log("User ID: ", user?.sub);
    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user?.sub,
        email: user?.email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
};

export default ThisUser;
