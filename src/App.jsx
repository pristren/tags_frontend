/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import Tags from "./components/Tags/Tags";
import TagsCard from "./components/TagsCard/TagsCard";
import TaskCompletionParcent from "./components/TaskCompletionParcent/TaskCompletionParcent";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import MainLayout from "./Layout/MainLayout";
import SignUp from "./components/Authentication/Login/SignUp";
import UsersTable from "./components/UsersTable/UsersTable";
import PrivateRoute from "./routes/PrivateRoute";
import SubmittedTask from "./components/SubmittedTask/SubmittedTask";

const App = () => {
  return (
    <BrowserRouter>
      <section className="bg-gray-50 ">
        <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route index element={<Login></Login>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/all-users" element={<UsersTable></UsersTable>}></Route>
            <Route path="/tags" element={<Tags></Tags>}></Route>
            <Route path="/submitted-task" element={<SubmittedTask></SubmittedTask>}></Route>
            
            <Route path="/tags-card" element={<PrivateRoute><TagsCard></TagsCard></PrivateRoute>}></Route>
            
            <Route
              path="/task-details/:id"
              element={<TaskDetails></TaskDetails>}
            ></Route>
            <Route
              path="/complete-task"
              element={<TaskCompletionParcent></TaskCompletionParcent>}
            ></Route>
          </Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
