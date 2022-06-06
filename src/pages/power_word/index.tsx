import { Layout } from "../../components/templates/layout";
import { History } from "../../../Resources/History";

const PowerWord = () => {
  const PowerWords = History.map((h) => {
    const year = h.year;
    const contents = h.contents.map((content) => {
      return (
        <div className="mt-2" key={content.text}>
          <div>{"・ " + content.text}</div>
          <div>{content.detail}</div>
        </div>
      );
    });
    return (
      <div key={h.year} className="mt-4">
        <div className="text-3xl font-bold">{year}</div>
        <div>{contents}</div>
      </div>
    );
  });

  return (
    <Layout>
      <div className="text-4xl font-bold">
        <p>POWER WORD and MINUTES</p>
        <p></p>
      </div>
      <div className="flex flex-col justify-start items-start h-full">
        <div className="flex flex-col items-start">
          <div className="mt-4">{PowerWords}</div>
        </div>
      </div>
    </Layout>
  );
};

export default PowerWord;
