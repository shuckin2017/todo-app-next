import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Task from "../components/Task";
import Today from "../components/Today";

export default function Home() {
    return (
        <Layout>
            <Projects />
            <Today />
            <Task />
        </Layout>
    );
}


