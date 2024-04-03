import React from "react";

const AccountPage = () => {
  return (
    <div
      className="grid grid-rows-8 w-full max-w-md mx-auto"
      style={{ height: `calc(100vh - 96px)` }}
    >
      {/* Row 2/3: Account Title */}
      <div className="row-span-1">
        <h1 className="font-bold text-4xl text-center text-primary-default">
          Account
        </h1>
      </div>

    {/* Row 5: Email */}
<div className="row-span-1 flex h-20">
  <div className="w-1/3 mr-1 mx-4 my-4 flex items-center justify-end">
    <label
      htmlFor="email"
      className="w-full bg-primary-default p-1.5 pl-5 pr-5 rounded-lg border border-primary-700 text-lg font-medium text-white shadow flex items-center justify-center"
    >
      Email
    </label>
  </div>
  <div className="w-1/2 ml-1 flex items-center">
    <input
      type="email"
      id="email"
      className="bg-gray-700 p-1.5 pl-5 pr-5 rounded shadow text-white w-full"
      placeholder="you@email.com"
    />
  </div>
</div>

{/* Row 6: Password */}
<div className="row-span-1 flex">
  <div className="w-1/3 mr-1 mx-4 my-4 flex items-center justify-end">
    <label
      htmlFor="password"
      className="w-full bg-primary-default p-1.5 pl-5 pr-5 rounded-lg border border-primary-700 text-lg font-medium text-white shadow flex items-center justify-center"
    >
      Password
    </label>
  </div>
  <div className="w-1/2 ml-1 mx-4 my-4 flex items-center">
    <input
      type="password"
      id="password"
      className="bg-gray-700 p-1.5 pl-5 pr-5 rounded shadow text-white w-full"
      placeholder="********"
    />
  </div>
</div>

{/* Row 8: Import Button */}
<div className="row-span-1 flex">
  <div className="w-1/3 mr-1 mx-4 my-4 flex items-center justify-end">
    <label
      htmlFor="import"
      className="w-full bg-primary-default p-1.5 pl-5 pr-5 rounded-lg border border-primary-700 text-lg font-medium text-white shadow flex items-center justify-center"
    >
      Import
    </label>
  </div>
  <div className="w-1/2 ml-1 flex items-center">
    <button className="w-full bg-primary-default p-1.5 pl-5 pr-5 rounded shadow text-white">
      CSV
    </button>
  </div>
</div>

{/* Row 9: Export Button */}
<div className="row-span-1 flex">
  <div className="w-1/3 mr-1 mx-4 my-4 flex items-center justify-end">
    <label
      htmlFor="export"
      className="w-full bg-primary-default p-1.5 pl-5 pr-5 rounded-lg border border-primary-700 text-lg font-medium text-white shadow flex items-center justify-center"
    >
      Export
    </label>
  </div>
  <div className="w-1/2 ml-1 flex items-center">
    <button className="w-full bg-primary-default p-1.5 pl-5 pr-5 rounded shadow text-white">
      CSV
    </button>
  </div>
</div>




{/* Row 11: Terms & Conditions */}
<div className="row-span-1 flex justify-center">
  <div className="w-1/2 mx-4 my-4 flex items-center justify-center">
    <div className="bg-primary-default p-1.5 pl-5 pr-5  rounded-lg border border-primary-700 text-lg font-medium text-white shadow cursor-pointer hover:bg-primary-600 text-center">
      Terms & Conditions
    </div>
  </div>
</div>


      {/* Row 14: Log Out Button */}
      <div className="row-span-1">
        <a
          href="/logout"
          className="text-primary-default bg-transparent py-2 px-4 rounded shadow hover:bg-gray-700 hover:text-white transition-colors w-full flex justify-center"
        >
          {">>> Log Out <<<"}
        </a>
      </div>
    </div>
  );
};

export default AccountPage;
