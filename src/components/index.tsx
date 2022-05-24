import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  footer?: boolean;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col grow shrink-0 p-6">{children}</main>
    </div>
  );
};
