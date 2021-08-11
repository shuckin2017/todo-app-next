import Head from "next/head";
import Header from "../Header";
export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <Head>
                <title>Todo App Next.js</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className="flex flex-row w-full flex-1 container mx-auto py-10 justify-between content">
                {children}
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t  container mx-auto">
                <a
                    className="flex items-center justify-center"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by shuckin.io
                </a>
            </footer>
        </div>
    );
};
