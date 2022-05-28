import { ReactNode } from "react";
import Footer from "../../organisms/Footer";

type Props = {
  children?: ReactNode;
  footer?: boolean;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col p-6 h-full">{children}</main>
      <Footer />
    </div>
  );
};
