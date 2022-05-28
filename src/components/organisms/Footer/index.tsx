import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row justify-center items-center h-16">
      <Link href="/">TOP</Link>
      <p className="mx-2">/</p>
      <Link href="/CONTENTS">CONTENTS</Link>
    </footer>
  );
};

export default Footer;
