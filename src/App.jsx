/* eslint-disable no-unused-vars */
import Tags from "./components/Tags/Tags";
import TagsCard from "./components/TagsCard/TagsCard";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import Login from "./components/ui/Authentication/Login/Login";


const App = () => {

  return (
    <section className="bg-gray-50 ">
      <TaskDetails></TaskDetails>
      {/* <TagsCard></TagsCard> */}
      {/* <Tags></Tags> */}
      {/* <Login></Login> */}
    </section>
  );
};

export default App;
