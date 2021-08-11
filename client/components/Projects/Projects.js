import { UilPlus } from "@iconscout/react-unicons";
export const Projects = () => {
    return (
        <section className="h-full w-full">
            <div>
                <div className="flex items-center">
                    <div className="text-3xl text-primary font-medium">
                        Projects
                    </div>
                    <button className="rounded-full bg-gray px-1 py-1 text-primary outline-none">
                        <UilPlus />
                    </button>
                </div>
            </div>
        </section>
    );
};
