import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-0"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-75"></div>
      </div>
    </div>
  );
};

export default Loading;
