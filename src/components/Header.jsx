import newslyLogo from "../assets/newslyLogo.png";

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={newslyLogo} className="h-8" alt="Newsly Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
