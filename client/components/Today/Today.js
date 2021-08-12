import { UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";
export const Today = () => {
    return (
        <section className="h-full w-full">
            <div>
                <div className="flex items-center justify-start w-full mb-5">
                    <div className="text-3xl text-primary font-medium mr-5">
                        Сегодня
                    </div>
                    <div>
                        <button className="rounded-l-xl bg-gray px-1 py-1 text-primary outline-none border-r border-white hover:bg-gray-light transition-all">
                            <UilAngleLeft />
                        </button>
                        <button className="rounded-r-xl bg-gray px-1 py-1 text-primary outline-none hover:bg-gray-light transition-all">
                            <UilAngleRight />
                        </button>
                    </div>
                </div>
                <div className="text-sm text-gray-dark">fasted quick tasks</div>
            </div>
        </section>
    );
};
