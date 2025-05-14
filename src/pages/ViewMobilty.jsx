import React from "react";

export const ViewMobility = () => {
  const newsItems = [
    {
      id: 1,
      title: "Toyota bZ All Electric SUV Adds Range, Charging, and Exterior Updates for 2026",
      date: "May 13, 2025",
      category: "PRODUCT",
      image:
        "https://c4.wallpaperflare.com/wallpaper/420/527/611/silver-cars-car-toyota-ft-1-concept-vehicle-wallpaper-preview.jpg",
    },
    {
      id: 2,
      title: "The Countdown to the Next Adventure Begins",
      date: "May 13, 2025",
      category: "PRODUCT",
      image:
        "https://c4.wallpaperflare.com/wallpaper/420/527/611/silver-cars-car-toyota-ft-1-concept-vehicle-wallpaper-preview.jpg",
    },
    {
      id: 3,
      title: "Akio Toyoda Receives the Industry Leadership Award From the Society of Automotive Engineers",
      date: "May 13, 2025",
      category: "PRODUCT",
      image:
        "https://c4.wallpaperflare.com/wallpaper/420/527/611/silver-cars-car-toyota-ft-1-concept-vehicle-wallpaper-preview.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6">
      {/* Navbar */}
      <nav className="mb-8">
        <div className="border-b-2 flex flex-wrap justify-between items-center text-sm font-extrabold">
          <ul className="flex flex-wrap gap-6">
            {["LATEST NEWS", "FEATURES", "MANUFACTURING", "MOBILITY"].map((item, i) => (
              <li key={i} className="group relative cursor-pointer">
                <a
                  href={i === 0 ? "#latest" : "#"}
                  className="block py-2 px-1 hover:text-red-500 transition-colors duration-200"
                >
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <button className="text-white px-4 py-2 mt-2 mb-4 sm:mt-0 bg-red-500  hover:bg-red-600 transition">
            VIEW ALL NEWS
          </button>
        </div>
      </nav>

      {/* News Grid */}
      <section id="latest" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden bg-white rounded shadow-md hover:shadow-lg transition hover:text-red-500"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:opacity-30 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-end justify-start gap-4 opacity-0 group-hover:opacity-100 transition duration-500 p-4">
                <button className="text-gray-200 text-xs hover:text-white">Add to Cart 🛒</button>
                <button className="text-gray-200 text-xs hover:text-white">Convert to PDF</button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-red-500 text-sm font-extrabold mb-2">{item.category}</h2>
              <h1 className="text-lg font-bold mb-2">{item.title}</h1>
              <p className="text-sm  mb-3">{item.date}</p>
              <a
                href="#"
                className=" hover:text-red-500 transition underline flex items-center gap-1"
              >
                READ MORE <span className="text-red-500 no-underline">❯</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
