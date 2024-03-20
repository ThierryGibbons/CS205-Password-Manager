import InteractiveText from "../components/InteractiveText";

const HomePage = () => {
  return (
    <>
      <div
        className="grid grid-rows-6 grid-flow-col"
        style={{ height: `calc(100vh - 192px)` }}
      >
        <div></div>
        <div></div>
        <div className="row-span-2" style={{ width: "80ch", margin: "0 auto" }}>
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
              <InteractiveText originalText="Thats Us"></InteractiveText>
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl text-center whitespace-pre font-poppins font-medium text-primary-default">
            <a href="/getstarted">{">>> Get Started <<<"}</a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
