const GetStartedPage = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: `calc(100vh - 192px)` }}
      >
        <div className="text-center">
          <h1 className="font-poppins font-extraBold text-3xl text-primary-default align-text-top pb-[15vh]">
            Getting Started
          </h1>
        </div>
        {/* Details */}
        <div className="mt-8 flex flex-row items-center justify-center gap-4 pb-[25vh]">
          <div className="flex flex-col">
            {/* Email Label Box */}
            <div className="bg-background-900 p-4 mb-4 rounded-lg">
              Email<span className="text-accent-default">*</span>
            </div>
            {/* Password Label Box */}
            <div className="bg-background-900 p-4 rounded-lg">
              Password<span className="text-accent-default">*</span>
            </div>
          </div>
          <div className="flex flex-col w-[40vh]">
            {/* Email Input Box */}
            <input
              type="email"
              placeholder="you@email.com"
              className="p-4 mb-4 bg-background-900 rounded-lg"
            />
            {/* Password Input Box */}
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                className="left-0 p-4 bg-background-900 rounded-lg w-full"
              />
              <button
                className="absolute inset-y-0 right-0 px-4 text-text-default hover:text-accent-default text-3xl rounded-r-lg"
                onClick={() => {
                  //   Generate a random password
                }}
              >
                ⚄
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-xl text-center row-start-4 whitespace-pre font-poppins font-medium text-primary-default">
          <a href="#">{">>>          Sign Up          <<<"}</a>
        </h1>
      </div>
    </>
  );
};

export default GetStartedPage;
