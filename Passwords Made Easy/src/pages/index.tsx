const HomePage = () => {
  return (
    <>
      <div
        className="grid grid-rows-6 grid-flow-col"
        style={{ height: `calc(100vh - 192px)` }}
      >
        <div className="grid grid-rows-subgrid row-span-3">
          <h1 className="font-poppins font-extraBold text-3xl text-center row-start-3">
            MAKING{" "}
            <span className="inline-block bg-gradient-to-r from-primary-default to-accent-default bg-clip-text text-transparent">
              PASSWORDS
            </span>{" "}
            EASY
            <br />
            FOR EVERYDAY PEOPLE
            <br />
            <span className="font-thin italic">Thats Us..</span>
          </h1>
        </div>
        <h1 className="text-xl text-center mt-[50%] row-start-4 whitespace-pre font-poppins font-medium text-primary-default">
          <a href="/getstarted">{">>>        Get Started        <<<"}</a>
        </h1>
      </div>
    </>
  );
};

export default HomePage;
