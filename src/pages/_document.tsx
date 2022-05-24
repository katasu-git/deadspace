import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static getInitialProps = async (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  };

  render(): JSX.Element {
    return (
      <Html lang="en" className="bg-black h-full">
        <Head></Head>
        <body className="overflow-x-hidden text-base antialiased h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
