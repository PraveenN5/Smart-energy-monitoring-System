import React from "react";

const Home = () => {
  const teamMembers = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center">
        <table className="table-auto border-collapse border border-gray-400">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Row 1, Col 1</td>
              <td className="border border-gray-300 px-4 py-2">Row 1, Col 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Row 2, Col 1</td>
              <td className="border border-gray-300 px-4 py-2">Row 2, Col 2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Team Members</h2>
        <div className="grid grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-40 bg-blue-200 border-2 border-blue-400 rounded-lg"
            >
              {member}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
