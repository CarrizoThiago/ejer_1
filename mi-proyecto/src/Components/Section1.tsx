function Section1() {
    return (
        <section className="relative w-full py-16 md:py-20 flex justify-center">
            <div className="relative z-10 w-full max-w-6xl px-4">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                {/* Left - Text content */}
                <div className="flex-1 animate-slide-in-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc]">
                        Estudios
                    </h2>
                    <div className="section-divider"></div>
                    <div className="glass-card p-6 md:p-8">
                        <p className="text-base md:text-lg leading-relaxed text-[#94a3b8]">
                            Soy estudiante de último año en{" "}
                            <span className="text-[#06d6a0] font-semibold">
                                E.E.S.T N°7 "Jose Hernandez"
                            </span>
                            , dentro de la modalidad de programación.
                        </p>
                        <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                            <p className="text-base md:text-lg leading-relaxed text-[#94a3b8]">
                                A la vez me encuentro cursando{" "}
                                <span className="text-[#4cc9f0] font-semibold">
                                    7mo año de inglés
                                </span>{" "}
                                en lenguas vivas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right - Photo */}
                <div className="animate-slide-in-right">
                    <a
                        href="https://www.instagram.com/thiago_carri_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                    >
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#06d6a0] via-[#4361ee] to-[#f72585] p-[3px] animate-glow-pulse">
                                <div className="w-full h-full rounded-full bg-[#0a0e1a]"></div>
                            </div>
                            <img
                                className="relative z-10 w-[200px] h-[200px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full object-cover border-[3px] border-transparent group-hover:scale-105 transition-transform duration-500"
                                src="/fotondacv.jpg"
                                alt="Carrizo Ham Thiago"
                            />
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;