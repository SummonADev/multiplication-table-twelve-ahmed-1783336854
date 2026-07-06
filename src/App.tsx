import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-6 text-center">
          <h1 className="text-3xl font-bold text-white">Table of 12</h1>
          <p className="text-indigo-100 mt-1">Multiplication from 1 to 10</p>
        </div>

        <ul className="divide-y divide-gray-100">
          {rows.map((n) => (
            <li
              key={n}
              className="flex items-center justify-between px-8 py-4 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-gray-700 text-lg">
                12 &times; <span className="font-semibold">{n}</span>
              </span>
              <span className="text-2xl font-bold text-indigo-600 tabular-nums">
                {12 * n}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
