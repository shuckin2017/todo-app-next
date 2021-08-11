export const Today = () => {
    return (
        <section className="h-full w-full">
            <div>
                <div>
                    <div className="text-3xl text-primary font-medium">
                        Today
                    </div>
                    <div>
                        <button className="rounded-full bg-gray px-1 py-1 text-primary outline-none">
                            <UilPlus />
                        </button>
                        <button className="rounded-full bg-gray px-1 py-1 text-primary outline-none">
                            <UilPlus />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
