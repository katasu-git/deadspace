import { Layout } from "../../components/templates/layout";

const Contents = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-start underline underline-offset-2">
          <a href="https://leica-converter.web.app/">📸 LEICA CONVERTER</a>
          <a href="https://mikan-blanding.web.app/" className="mt-2">
            🍊 MIKAN COUNTRY
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contents;
