// React
import React from 'react';

// Navegación
import { NavLink } from 'react-router-dom';

// Contexto
import { LogisticoContext } from '../../Context';

// Iconos
import { Sun, Moon } from 'lucide-react';

function Header() {
    const { isDark, toggleDarkMode } = React.useContext(LogisticoContext);

    return (
        <header className={`relative ${isDark ? 'bg-wg_dark' : 'bg-wg_ligth'}`}>
            <nav className="z-60 relative flex justify-between items-center pt-4 w-[90%] mx-auto">

                {/* Logo y Título */}
                <div className="flex items-center">
                    <img src="../public/Logo.png" alt="Logo" className="w-10 mr-2  slow-spin" />
                    <span className='text-3xl font-bold text-gray-800 dark:text-gray-300'>LOGISTICO<span className="text-gray-500 dark:text-gray-400">.AI</span></span>

                </div>

                {/* Botones */}
                <div className="flex items-center space-x-4 text-sm font-medium text-zinc-300 sm:space-x-6">
                    {/* Botón de inicio de sesión */}
                    <button className="hidden lg:block group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 dark:hover:text-zinc-100 hover:text-zinc-500 hover:shadow-glow">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(108,194,74,0.6)_0%,rgba(108,194,74,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative z-10 rounded-full bg-white/50 dark:bg-black bg-opacity-20 backdrop-blur-xl px-4 py-1.5 ring-1 ring-white/10">
                            Iniciar sesión
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#6CC24A]/0 via-[#6CC24A]/90 to-[#6CC24A]/0 transition-opacity duration-500 group-hover:opacity-40" />                    </button>

                    {/* Botón de modo oscuro */}
                    <button onClick={toggleDarkMode}
                        className={`relative w-20 h-[35px] rounded-full transition-all duration-300  dark:hover:text-zinc-100 ${isDark
                            ? 'bg-black shadow-lg shadow-gray-500/30 ring-1 ring-white/10'
                            : 'bg-white/50 dark:bg-gray-600'
                            }`}>
                        {/* Círculo deslizante */}
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${isDark ? 'left-12' : 'left-1'}`}>
                            {/* Iconos con transición */}
                            <div className="relative w-4 h-4">
                                <Sun className={`absolute inset-0 w-4 h-4 text-yellow-500 transition-all duration-300 ${isDark
                                    ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                                <Moon className={`absolute inset-0 w-4 h-4 text-indigo-900 transition-all duration-300 ${isDark
                                    ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                                />
                            </div>
                        </div>
                    </button>

                </div>
            </nav>

            <div className=" w-full h-screen flex items-center justify-center text-center">
                <div className='w-[90%] max-w-6xl flex flex-col items-center'>
                    <div className='z-60'>
                        <h1 className='text-7xl lg:text-8xl font-black text-gray-800 leading-none mb-2 float-animation'>
                            <span className='bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent dark:from-white dark:to-zinc-500'>LOGISTICO CHATBOT</span>
                        </h1>
                        <p className='w-[80%] mx-auto text-gray-700 dark:text-zinc-400'>
                            Deja atrás la complejidad en la gestión logística. Ahora, cualquier miembro de tu organización puede acceder a información precisa y actualizada sobre tus procesos logísticos en segundos. Eficiente. Confiable. Diseñado para tomar decisiones inteligentes.
                        </p>
                    </div>
                    <div className="z-60 pt-6 flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100  sm:space-x-6">
                        {/* Botón de inicio de sesión */}
                        <button className="block lg:hidden group relative rounded-full p-px text-sm/6 text-zinc-500 duration-300 hover:text-zinc-800 dark:hover:text-zinc-100 hover:shadow-glow">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(108,194,74,0.6)_0%,rgba(108,194,74,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative z-10 rounded-full bg-zinc-900/5 dark:bg-black bg-opacity-20 backdrop-blur-xl px-4 py-1.5 ring-1 ring-white/10">
                                Iniciar sesión
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#6CC24A]/0 via-[#6CC24A]/90 to-[#6CC24A]/0 transition-opacity duration-500 group-hover:opacity-40" />                        </button>

                    </div>
                    <div className='group pt-16 z-60'>
                        <a className='flex flex-col items-center gap-1' href='#Section_WhoIsLogistico'>
                            <p className='text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-700 dark:group-hover:text-zinc-100'>Obtener más información</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-100">
                                <path d="M12 5v14" />
                                <path d="m19 12-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
