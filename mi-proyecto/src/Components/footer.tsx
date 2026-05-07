function Footer() {
    return (
        <footer className="relative w-full mt-10 flex flex-col items-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
            <div className="w-full bg-gradient-to-b from-[#0a0e1a] to-[#060810] py-12 px-6 flex justify-center">
                <div className="relative z-10 w-full max-w-4xl px-4 text-center">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold gradient-text mb-1">Carrizo Ham Thiago</h3>
                        <p className="text-sm text-[#64748b]">Estudiante de Programación</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 mb-8">
                        <a href="mailto:Hamthiago08@gmail.com" className="text-sm text-[#94a3b8] no-underline transition-colors duration-300 hover:text-[#06d6a0]">
                            ✉ Hamthiago08@gmail.com
                        </a>
                        <a href="mailto:Carrizo.Ham@tecnica7.edu.ar" className="text-sm text-[#94a3b8] no-underline transition-colors duration-300 hover:text-[#4361ee]">
                            🏫 Carrizo.Ham@tecnica7.edu.ar
                        </a>
                    </div>
                    <div className="h-px bg-[rgba(255,255,255,0.06)] mb-6"></div>
                    <p className="text-xs text-[#475569]">© 2026 Carrizo Ham Thiago. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;