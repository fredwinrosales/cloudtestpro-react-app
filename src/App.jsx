import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function App() {
  const tools = [
    { name: 'Generador de APIs Mock', description: 'Crea respuestas simuladas para tus pruebas.' },
    { name: 'Conversor JSON-CSV', description: 'Convierte entre formatos de datos fácilmente.' },
    { name: 'Formateador de Código', description: 'Embellece tu código JavaScript, HTML y CSS.' },
  ];

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        {/* Fondo dinámico */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-70 -z-10"></div>

        {/* Main content */}
        <main className="p-10">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4"
              >
                <h2 className="text-5xl font-extrabold text-purple-700 mb-4 leading-tight">
                  Impulsa tu <span className="text-pink-500">desarrollo web</span> <motion.span animate={{ y: [-5, 0, -5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="inline-block ml-2">🚀</motion.span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                  Herramientas poderosas para desarrolladores, disponibles en un solo lugar.<br />
                  Simplifica tu flujo de trabajo y crea sin límites.
                </p>
                <Link
                  to="/tools"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                >
                  Explorar herramientas
                </Link>
              </motion.div>
            } />

            <Route path="/tools" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4"
              >
                <Link
                  to="/"
                  className="mb-8 bg-white hover:bg-gray-100 text-purple-700 font-semibold py-2 px-6 rounded-full shadow transition duration-300"
                >
                  ⬅ Volver al inicio
                </Link>

                <h2 className="text-4xl font-extrabold text-purple-700 mb-10 leading-tight">
                  Herramientas Disponibles 🛠️
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-left">
                      <h3 className="text-2xl font-bold text-purple-700 mb-3">{tool.name}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            } />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center p-4 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CloudTestPro. Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}
