function Header() {
    return (
        <header className="relative w-full overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#111827] to-[#0a0e1a]"></div>
            {/* Decorative orbs */}
            <div className="bg-orb w-[300px] h-[300px] bg-[#06d6a0] top-[-100px] left-[-50px] absolute"></div>
            <div className="bg-orb w-[250px] h-[250px] bg-[#4361ee] top-[-80px] right-[-30px] absolute"></div>

            <div className="relative z-10 flex flex-col items-center justify-center py-16 md:py-24 px-6">
                {/* Small label */}
                <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#94a3b8] mb-4 animate-fade-in">
                    Portfolio Personal
                </span>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text text-center animate-fade-in">
                    Carrizo Ham Thiago
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-lg md:text-xl text-[#94a3b8] text-center animate-fade-in max-w-xl" style={{ animationDelay: '0.2s' }}>
                    Estudiante de Programación · Desarrollador en formación
                </p>

                {/* Decorative line */}
                <div className="mt-8 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#06d6a0] to-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
            </div>

            {/* Bottom border fade */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
        </header>
    );
}

export default Header;