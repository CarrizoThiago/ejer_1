function Footer() {
    return (
        <footer className="relative mt-10">
            <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
            <div className="bg-gradient-to-b from-[#0a0e1a] to-[#060810] py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold gradient-text mb-1">Carrizo Ham Thiago</h3>
                            <p className="text-sm text-[#64748b]">Estudiante de Programación</p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-3">
                            <a href="mailto:Hamthiago08@gmail.com" className="text-sm text-[#94a3b8] hover:text-[#06d6a0] transition-colors duration-300">
                                ✉ Hamthiago08@gmail.com
                            </a>
                            <a href="mailto:Carrizo.Ham@tecnica7.edu.ar" className="text-sm text-[#94a3b8] hover:text-[#4361ee] transition-colors duration-300">
                                🏫 Carrizo.Ham@tecnica7.edu.ar
                            </a>
                        </div>
                    </div>
                    <div className="h-px bg-[rgba(255,255,255,0.06)] mb-6"></div>
                    <p className="text-center text-xs text-[#475569]">© 2026 Carrizo Ham Thiago. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;