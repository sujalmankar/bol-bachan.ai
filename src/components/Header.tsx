export function Header() {
  return (
    <header className="relative w-full py-6">
      {/* Top Left Logo */}
      <div className="absolute left-4 top-6 z-10">
        <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
      </div>
      
      {/* Top Right Logo */}
      <div className="absolute right-4 top-6 z-10">
        <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
      </div>
      
      {/* Centered Brand Text */}
      <div className="text-center mt-4">
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900">Bol</h1>
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-purple-700 mt-1">
          Bachan.AI
        </h2>
      </div>
    </header>
  );
}