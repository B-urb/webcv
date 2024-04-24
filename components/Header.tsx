import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <h1 className="col-span-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-4xl text-transparent hover:cursor-pointer md:text-7xl">
        Björn Urban
      </h1>
    </Link>
  );
};

export default Header;
