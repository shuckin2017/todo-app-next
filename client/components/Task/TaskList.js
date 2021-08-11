import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks }) => {
  // console.log(tasks);
  return (
    <div>
      <div>
        {tasks.map((task) => {
          <TaskItem title={task} />;
        })}
      </div>
      <input
        id="name"
        type="text"
        name="name"
        class="h-full w-full border-gray-300 px-2 transition-all outline-none text-gray-dark"
        placeholder="add task"
      />
    </div>
  );
};
