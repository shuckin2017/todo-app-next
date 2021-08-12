import React from "react";
import { UilSun, UilTimes } from "@iconscout/react-unicons";
import Popup from "reactjs-popup";

export const Header = () => {
    const [auth, setAuth] = React.useState(false);
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
    return (
        <header className="bg-blue w-full shadow h-16">
            <div className=" flex justify-between items-center h-full  container mx-auto">
                <div className="flex ilems-center justify-center text-white">
                    <UilSun className="h-10 w-10 mr-3" />
                    <h1 className="text-3xl font-medium">Days</h1>
                </div>
                {auth && (
                    <div
                        className="border-2 rounded px-3 py-1 border-white flex items-center text-xl font-medium  transition-all cursor-pointer text-white"
                        onClick={() => setOpen((i) => !i)}
                    >
                        Login
                    </div>
                )}
            </div>
            <Popup
                open={open}
                modal
                closeOnDocumentClick
                keepTooltipInside=".services__modal-close"
            >
                <div className="fixed top-0 left-0 right-0 bottom-0 modal__popup text-primary bg-white">
                    <div className="reletive bg-white px-10 py-10 h-96 w-96 rounded-xl">
                        <div className="flex justify-between items-center">
                            <h4 className="text-3xl font-medium">
                                Авторизация
                            </h4>
                            <UilTimes
                                className="h-10 w-10 text-blue-600 hover:text-blue-700"
                                onClick={closeModal}
                            />
                        </div>
                        <div>
                            <div className="mt-8">
                                <div className="mb-4">
                                    <label
                                        className="block text-grey-darker font-bold mb-2"
                                        for="username"
                                    >
                                        Логин
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="username"
                                        type="text"
                                        placeholder="Логин"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block text-grey-darker font-bold mb-2"
                                        for="password"
                                    >
                                        Пароль
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                        type="button"
                                        onClick={submitFrom}
                                    >
                                        Войти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-primary opacity-70 flex items-center justify-center">
                            <div id="loading"></div>
                        </div>
                    )}
                </div>
            </Popup>
        </header>
    );
};
