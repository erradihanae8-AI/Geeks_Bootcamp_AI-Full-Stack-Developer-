
function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-indigo-600">
          MyLanding
        </h1>

        <ul className="flex gap-6 text-gray-700">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;