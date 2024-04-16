import axios from "axios";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/user");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="w-9/12 mx-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Unique Code</th>
            <th className="border border-gray-300 px-4 py-2">Delete</th>
            <th className="border border-gray-300 px-4 py-2">Submission</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.email}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.phone}
              </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                01
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Trash className="size-7 mx-auto cursor-pointer" />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>SUBMISSION</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
