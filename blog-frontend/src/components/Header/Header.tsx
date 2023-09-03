import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="h-[50px] bg-fuchsia-900 px-24">
      <Link to="/">
        <h1 className="text-fuchsia-50 text-4xl">Blog</h1>
      </Link>
    </header>
  );
};
