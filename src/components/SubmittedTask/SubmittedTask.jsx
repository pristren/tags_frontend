import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const SubmittedTask = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(location.search).get("query");
  // console.log(query);

  const [userDt, setUserDt] = useState({});

  const [noData, setNoData] = useState("");

  // const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    setLoading(true);
    if (query) {
      const getUserSubmissionsByEmail = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/${query}`
          );
          setData(response.data);
        } catch (error) {
          if (error.response.status === 404) {
            setData([]);
            setNoData("No submissions found");
          }
        } finally {
          setLoading(false);
        }
      };

      const getUserInfo = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/user/${query}`
          );

          setUserDt(response.data);
        } catch (error) {
          // do something, take it for later.
        } finally {
          setLoading(false);
        }
      };

      // const completedPercentage = async () => {
      //   try {
      //     const response = await axios.get(
      //       `${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/user/${query}`
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
      getUserSubmissionsByEmail();
    }
  }, [query]);
  if (loading) {
    return <Loader />;
  }
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

                <th className="border border-gray-300 px-4 py-2">
                  Unique Code
                </th>
                <th className="border border-gray-300 px-4 py-2">Task Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Submitted Text
                </th>
                <th className="border border-gray-300 px-4 py-2">Video Link</th>
              </tr>
              {data?.map((details, i) => (
                <tr key={i}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.email}
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
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {details?.task?.video ? details?.task?.video : "N/A"}
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
