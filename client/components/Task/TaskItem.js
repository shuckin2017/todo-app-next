export const TaskItem = ({ title }) => {
  console.log(title);
  return (
    <div className="flex items-center mt-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-primary mr-4"
          value=""
        />
        <div>{title}</div>
      </label>
    </div>
  );
};
