import { ReactNode } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

type Props = {
  children?: ReactNode;
  footer?: boolean;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col grow shrink-0 p-6">{children}</main>
      <Footer />
    </div>
  );
};
