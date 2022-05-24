import type { NextPage } from "next";
import { Layout } from "../components/templates/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-7xl">🤔👹👺</p>
        <p className="text-white font-bold pt-4 text-4xl">DEAD SPACE</p>
      </div>
    </Layout>
  );
};

export default Home;
