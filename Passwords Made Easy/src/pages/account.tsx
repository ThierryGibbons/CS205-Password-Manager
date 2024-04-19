import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("Loading ...");
    return <div className="text-center py-2">Loading ...</div>;
  }

  if (!isAuthenticated || !user) {
    console.log("No user data available.");
    return <div className="text-center py-2">No user data available.</div>;
  }

  return (
    isAuthenticated && (
      <div className="grid grid-rows-2 w-full max-w-md mx-auto" style={{ height: `calc(100vh - 96px)` }}>
        {/* Account Title */}
        <div className="row-span-1">
          <h1 className="font-bold text-4xl text-center text-primary-default pt-4">
            Account
          </h1>
        </div>

        {/* User Profile Information */}
        <div className="row-span-1 flex flex-col items-center justify-center py-4">
          <img 
            src={user.picture} 
            alt={user.name} 
            className="w-24 h-24 rounded-full shadow-lg" // Adjust the size as necessary
          />
          <h2 className="text-xl font-semibold text-primary-default mt-2">
            {user.name}
          </h2>
        </div>
      </div>
    )
  );
};

export default Profile;
