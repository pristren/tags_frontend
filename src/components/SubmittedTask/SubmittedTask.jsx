import axios from "axios";
import { useEffect, useState } from "react";

const SubmittedTask = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  // get the query parameter from the URL
  const query = new URLSearchParams(location.search).get("query");
  // console.log(query);

  const [userDt, setUserDt] = useState({});

  const [noData, setNoData] = useState("");

  // const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    if (query) {
      const getUserSubmissionsByEmail = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/tasks/${query}`
          );
          setData(response.data);
        } catch (error) {
          if (error.response.status === 404) {
            setData([]);
            setNoData("No submissions found");
          }
        }
      };

      const getUserInfo = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/user/${query}`
          );

          setUserDt(response.data);
        } catch (error) {
          // do something, take it for later.
        }
      };

      // const completedPercentage = async () => {
      //   try {
      //     const response = await axios.get(
      //       `http://localhost:5000/api/v1/tasks/user/${query}`
      //     );
      //     // setUserData(response.data.data);
      //     const completedTasks = response.data.data.filter(
      //       (task) => task.status === "completed"
      //     );
      //     const percentage =
      //       (completedTasks.length / response.data.data.length) * 100;
      //     setCompletionPercentage(percentage);
      //   } catch (error) {
      //     console.error("Error fetching data:", error);
      //   }
      // };

      getUserInfo();

      // completedPercentage();
      getUserSubmissionsByEmail();
    }
  }, [query]);
  return (
    <div className="w-full px-5 md:px-0 md:w-9/12 mx-auto min-h-screen ">
      {query && (
        <h3 className="my-5 font-semibold">
          {userDt?.name ? `Submissions of ${userDt?.name}` : "Submissions"}
        </h3>
      )}
      {!noData ? (
        <table className="w-full">
          {!query ? (
            <tbody className="w-full border-collapse border border-gray-300">
              <tr>
                <th>Select a user to view their submissions</th>
              </tr>
            </tbody>
          ) : (
            <tbody className="w-full border-collapse border border-gray-300">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">
                  Unique Code
                </th>
                <th className="border border-gray-300 px-4 py-2">Task Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Submitted Text
                </th>
              </tr>
              {data?.map((details, i) => (
                <tr key={i}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.uniqueCode}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.task?.taskName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.text}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      ) : (
        <p className="text-center">{noData}</p>
      )}
    </div>
  );
};

export default SubmittedTask;
