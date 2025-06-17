//React
import { useState } from 'react'
import React from 'react'
//componentes
import Header from '../../Components/Home/header'

function Home() {
    return (
        <>
            <main className='bg-white dark:bg-[#09090B]'>
                {/* fondo azul */}
                <div className="h-full absolute inset-0 z-40 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
                {/* svg a cuadros */}
                <svg className="absolute inset-0 z-40 h-[1400px] w-full text-zinc-900/15 dark:text-white/10 
                            [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"
                    width="100%" height="100%" aria-hidden="true">

                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>

                        <pattern id="highlightGrid" width="560" height="480" patternUnits="userSpaceOnUse">
                            <rect className="" x="160" y="80" width="80" height="80" fill="rgba(100,100,100,0.1)" />
                            <rect className="" x="400" y="240" width="80" height="80" fill="rgba(100,100,100,0.09)" />
                            <rect className="" x="80" y="320" width="80" height="80" fill="rgba(100,100,100,0.08)" />
                        </pattern>

                        <radialGradient id="fade" cx="50%" cy="0%" r="75%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>

                        <mask id="fadeMask">
                            <rect width="100%" height="100%" fill="url(#fade)" />
                        </mask>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#highlightGrid)" mask="url(#fadeMask)" opacity="0.6" className="animate-pulse" />

                    <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />
                </svg>
                {/* Header */}
                <Header></Header>
            </main>

        </>
    )
}

export default Home
