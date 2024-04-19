import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("Loading ...");
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated || !user) {
    console.log("No user data available.");
    // return <div>No user data available.</div>;
  }

  isAuthenticated && console.log(user);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.sub}</p>
      </div>
    )
  );
};

export default Profile;
