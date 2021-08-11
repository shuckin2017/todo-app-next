export const AddProject = () => {
  return (
    <form>
      <div className="mt-2">
        <label className="font-medium">Название</label>
        <input
          className="w-full px-2 py-2 text-gray-dark bg-gray-light rounded "
          type="text"
          placeholder="Название проекта"
        />
      </div>
      <div className="mt-2">
        <label className="text-primary font-medium">ID проекта</label>
        <input
          className="w-full px-2 py-2 text-gray-dark bg-gray-light rounded "
          type="text"
          placeholder="ABSD"
        />
      </div>
      <div className="flex justify-end mt-5">
        <button className="border-2 border-blue text-blue font-bold py-2 px-4 rounded mr-5">
          Отмена
        </button>
        <button className="border-2 border-blue bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
          Создать проект
        </button>
      </div>
    </form>
  );
};
