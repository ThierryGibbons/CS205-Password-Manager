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

  //   return (
  //     isAuthenticated &&
  //     user && (
  //       <ProtectedRoute>
  //         <h1>{user.sub}</h1>
  //       </ProtectedRoute>
  //     )
  //   );

  //   if (isAuthenticated && user) {
  //     return <h1>{user.sub}</h1>;
  //   } else {
  //     return <h1>Not Authenticated</h1>;
  //   }
};

export default ThisUser;
