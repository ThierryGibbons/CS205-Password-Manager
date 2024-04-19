import InteractiveText from "../components/InteractiveText";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div
        className="hidden lg:grid grid-rows-6 grid-flow-col"
        style={{ height: `calc(100vh - 192px)` }}
      >
        <div className="row-span-2 w-[80ch] m-auto row-start-2">
          <h1 className="font-poppins font-extraBold text-3xl text-center">
            <InteractiveText originalText="MAKING" />{" "}
            <span className="inline-block bg-gradient-to-r from-primary-default to-accent-default bg-clip-text text-transparent">
              <InteractiveText originalText="PASSWORDS" />
            </span>{" "}
            <InteractiveText originalText="EASY" />
            <br />
            <InteractiveText originalText="FOR" />{" "}
            <InteractiveText originalText="EVERYDAY" />{" "}
            <InteractiveText originalText="PEOPLE" />
            <br />
            <span className="font-thin italic">
              <InteractiveText originalText="That's Us" />
              {".."}
            </span>
          </h1>
        </div>

        <div className="flex flex-col justify-center">
          <button
            className="text-xl text-center whitespace-pre font-poppins font-medium text-primary-default cursor-pointer"
            onClick={() => loginWithRedirect()}
          >
            {">>> Get Started <<<"}
          </button>
        </div>
      </div>
      <div
        className="w-3/4 pt-20 text-center lg:hidden"
        style={{ height: `calc(100vh - 192px)` }}
      >
        <p className="text-wrap text-3xl whitespace-pre font-poppins font-medium text-primary-default ">
          It looks like you're viewing this page from a mobile device..
        </p>
        <p className="text-wrap pt-5 text-xl whitespace-pre font-poppins font-medium text-text-default">
          'Passwords Made Easy' is built to be utilized in a desktop
          environment, and is not built to function on mobile phones. <br />{" "}
          <br />
          Please re-open this page on a desktop machine to make ideal use of the
          service!
        </p>
      </div>
    </>
  );
};

export default HomePage;
