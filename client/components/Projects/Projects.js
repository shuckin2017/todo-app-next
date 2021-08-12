import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ProjectList } from "./ProjectList";
import { UilPlus, UilTimes } from "@iconscout/react-unicons";
import Popup from "reactjs-popup";
import { AddProject } from "./AddProject";

export const Projects = () => {
    const URL = "https://6113ed2bcba40600170c1d17.mockapi.io/api/v1/projects";

    const [project, setProject] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [form, setForm] = React.useState({
        title: "",
        id: "",
        description: "",
    });

    const handleChange = (e) => {
        const newForm = { ...form };
        newForm[e.target.id] = e.target.value;
        setForm(newForm);
        console.log(newForm);
    };

    const submitFrom = () => {
        setLoading(true);
        setTimeout(() => {
            setOpen(false);
            setLoading(false);
        }, 2000);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(URL, {
                title: form.title,
                id: form.id,
                description: form.description,
            })
            .then((res) => {
                console.log(res.data);
            });
    };

    const getData = () => {};
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(URL);
            setProject(result.data);
        };
        fetchData();
    }, []);

    const closeModal = () => setOpen(false);
    return (
        <section className="h-full w-full">
            <div>
                <div className="flex items-center mb-5">
                    <div className="text-3xl text-primary font-medium mr-5">
                        Проекты
                    </div>
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
                    <div className="reletive bg-white px-10 py-10  w-auto h-auto rounded-xl flex flex-col justify-between z-40">
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="text-3xl font-medium">
                                        Добавление сведений о проекте
                                    </h4>
                                    <p>
                                        Эти сведения можно изменить в любое
                                        время в настройках проекта.
                                    </p>
                                </div>
                                <UilTimes
                                    className="h-10 w-10 text-blue-600 hover:text-blue-700 relative -top-10 -right-8 "
                                    onClick={closeModal}
                                />
                            </div>
                            <div>
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <div className="mt-2">
                                        <label className="font-medium text-gray-dark ">
                                            Название
                                        </label>
                                        <input
                                            className="w-full px-2 py-2 text-primary bg-gray-light rounded "
                                            type="text"
                                            name="title"
                                            id="title"
                                            onChange={(e) => handleChange(e)}
                                            value={form.title}
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
                                            name="id"
                                            id="id"
                                            value={form.id}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <label className="text-gray-dark font-medium">
                                            Описание
                                        </label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            className="w-full px-2 py-2 text-primary bg-gray-light rounded h-24"
                                            placeholder="Описание проекта"
                                            value={form.description}
                                            onChange={(e) => handleChange(e)}
                                        ></textarea>
                                    </div>
                                    <button
                                        className="border-2 border-blue text-blue font-bold py-2 px-4 rounded mr-5 hover:bg-gray-light"
                                        onClick={submitFrom}
                                    >
                                        Отмена
                                    </button>
                                    <button
                                        className="border-2 border-blue bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-primary hover:border-primary"
                                        type="submit"
                                        onClick={submitFrom}
                                    >
                                        Создать проект
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex justify-end mt-5"></div>
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
