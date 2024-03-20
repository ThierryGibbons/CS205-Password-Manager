import Generate from "../components/Generate";

const PasswordPage = () => {
  return (
    <div>
      <h1 className="font-Poppins font-bold p-18">Password Page</h1>
      <div className="flex justify-center items-center">
        <div className="bg-background-900 p-4 mb-4 rounded-lg items-center">
          <Generate />
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
