import axios from 'axios';
import { useEffect, useState } from 'react';

const SubmittedTask = () => {
    const [data, setData] = useState([])
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const getUserByEmail = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/v1/tasks/${user?.email}`
            );
            setData(response.data); // Assuming the response data contains the user object
          } catch (error) {
            console.error("Error fetching user by email:", error);
            throw error; // You can handle the error in the calling function
          }
        };
        getUserByEmail();
      }, []);
    return (
        <table className='w-9/12 mx-auto'>
           <tbody className="w-full border-collapse border border-gray-300">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Unique Code</th>
                    <th className="border border-gray-300 px-4 py-2">Task Name</th>
                    <th className="border border-gray-300 px-4 py-2">Task Description</th>
                </tr>
                {
                    data?.map((details, i) => <tr key={i}>
                    <td className='border border-gray-300 px-4 py-2 text-center'>{details?.email}</td>
                    <td className='border border-gray-300 px-4 py-2 text-center'>{details?.uniqueCode}</td>
                    <td className='border border-gray-300 px-4 py-2 text-center'>{details?.task?.taskName}</td>
                    <td className='border border-gray-300 px-4 py-2 text-center'>{details?.task?.taskDescription}</td>
                </tr>)
                }
            </tbody> 
        </table>
    );
};

export default SubmittedTask;