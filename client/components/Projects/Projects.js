import React from "react";
import axios from "axios";
import { ProjectList } from "./ProjectList";
import { UilPlus, UilTimes } from "@iconscout/react-unicons";
import Popup from "reactjs-popup";
import { AddProject } from "./AddProject";

export const Projects = () => {
  const [project, setProject] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const closeModal = () => setOpen(false);
  const submitFrom = () => {
    setLoading(true);
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://6113ed2bcba40600170c1d17.mockapi.io/api/v1/projects"
      );
      setProject(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className="h-full w-full">
      <div>
        <div className="flex items-center mb-5">
          <div className="text-3xl text-primary font-medium mr-5">Projects</div>
          <button
            className="rounded-full bg-gray px-1 py-1 text-primary outline-none hover:bg-gray-light transition-all "
            onClick={() => setOpen((i) => !i)}
          >
            <UilPlus />
          </button>
        </div>
        <div className="text-sm text-gray-dark">fasted quick tasks</div>
        {project ? (
          <ProjectList projects={project} />
        ) : (
          <div className="-full py-6 rounded-xl px-5 mb-5 hover:shadow-xl bg-gray text-primary text-xl font-medium mt-5 pr-5">
            Проектов нет
          </div>
        )}
      </div>
      <Popup
        open={open}
        modal
        closeOnDocumentClick
        keepTooltipInside=".services__modal-close"
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 modal__popup text-primary bg-white z-10">
          <div className="reletive bg-white px-10 py-10  w-3/5 rounded-xl flex flex-col justify-between z-40">
            <div className="">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-3xl font-medium">
                    Добавление сведений о проекте
                  </h4>
                  <p>
                    Эти сведения можно изменить в любое время в настройках
                    проекта.
                  </p>
                </div>
                <UilTimes
                  className="h-10 w-10 text-blue-600 hover:text-blue-700 relative -top-10 -right-8 "
                  onClick={closeModal}
                />
              </div>
              <div>
                <form>
                  <div className="mt-2">
                    <label className="font-medium text-gray-dark ">
                      Название
                    </label>
                    <input
                      className="w-full px-2 py-2 text-primary bg-gray-light rounded "
                      type="text"
                      placeholder="Название проекта"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-gray-dark font-medium">
                      ID проекта
                    </label>
                    <input
                      className="w-full px-2 py-2 text-primary bg-gray-light rounded "
                      type="text"
                      placeholder="ABSD"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-gray-dark font-medium">
                      Описание
                    </label>
                    <textarea
                      name=""
                      id=""
                      className="w-full px-2 py-2 text-primary bg-gray-light rounded h-24"
                      placeholder="Описание проекта"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button
                className="border-2 border-blue text-blue font-bold py-2 px-4 rounded mr-5 hover:bg-gray-light"
                onClick={submitFrom}
              >
                Отмена
              </button>
              <button
                className="border-2 border-blue bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-primary hover:border-primary"
                onClick={submitFrom}
              >
                Создать проект
              </button>
            </div>
          </div>
          {loading && (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-primary opacity-70 flex items-center justify-center">
              <div id="loading"></div>
            </div>
          )}
        </div>
      </Popup>
    </section>
  );
};
