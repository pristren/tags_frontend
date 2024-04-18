/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import AdminRoute from "./routes/AdminRoute";

const App = () => {
  return (
    <BrowserRouter>
      <section className="bg-gray-50 ">
        <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route
              index
              element={
                <PrivateRoute>
                  <TagsCard></TagsCard>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            {/* <Route path="/signup" element={<SignUp></SignUp>}></Route> */}
            <Route
              path="/all-users"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <UsersTable></UsersTable>
                  </AdminRoute>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/tags"
              element={
                <PrivateRoute>
                  <Tags></Tags>
                </PrivateRoute>
              }
            ></Route>

            <Route
              // path="/submitted-task?query=:email"
              path="/submitted-task"
              element={
                <PrivateRoute>
                  <SubmittedTask></SubmittedTask>
                </PrivateRoute>
              }
            ></Route>

            {/* <Route
              path="/submitted-task"
              element={<Navigate to="/"></Navigate>}
            ></Route> */}

            <Route
              path="/tags-card"
              element={
                <PrivateRoute>
                  <TagsCard></TagsCard>
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/task-details/:id"
              element={
                <PrivateRoute>
                  <TaskDetails></TaskDetails>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/complete-task"
              element={
                <PrivateRoute>
                  <TaskCompletionParcent></TaskCompletionParcent>
                </PrivateRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
