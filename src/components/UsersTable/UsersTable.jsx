import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/user");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-9/12 mx-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Unique Code</th>
            <th className="border border-gray-300 px-4 py-2">Completed Task</th>
            <th className="border border-gray-300 px-4 py-2">Submission</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user?.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user?.email}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user?.phone}
              </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                {user?.uniqueCode}
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">
                <Trash className="size-7 mx-auto cursor-pointer" />
              </td> */}
              <td className="border border-gray-300 px-4 py-2 text-center">
                {((user?.completedTask / 48) * 100).toFixed(2) + "%"}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link to={`/submitted-task?query=${user?.email}`}>
                  <Button>Submission</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
