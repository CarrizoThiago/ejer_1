function Section3() {
    const proyectos = [
        {
            titulo: "Elige tu propia aventura",
            tech: "C++",
            desc: "Juego interactivo de narrativa donde el jugador toma decisiones que cambian el curso de la historia.",
            color: "#06d6a0",
            badgeText: "text-[#06d6a0]",
            badgeBg: "bg-[#06d6a01a]",
            badgeBorder: "border-[#06d6a040]",
            lineBg: "bg-[#06d6a0]",
            delay: "",
        },
        {
            titulo: "Réplica de PVZ1",
            tech: "Java",
            desc: "Recreación del clásico Plants vs Zombies.",
            color: "#4361ee",
            badgeText: "text-[#4361ee]",
            badgeBg: "bg-[#4361ee1a]",
            badgeBorder: "border-[#4361ee40]",
            lineBg: "bg-[#4361ee]",
            delay: "delay-150",
        },
        {
            titulo: "Juego Dungeon",
            tech: "Java",
            desc: "Juego tipo dungeon crawler con generación de salas.",
            color: "#f72585",
            badgeText: "text-[#f72585]",
            badgeBg: "bg-[#f725851a]",
            badgeBorder: "border-[#f7258540]",
            lineBg: "bg-[#f72585]",
            delay: "delay-300",
        },
    ];

    return (
        <section className="relative w-full py-16 md:py-20 flex justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="bg-orb w-[350px] h-[350px] bg-[#f72585] bottom-0 right-0 absolute"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] animate-fade-in">
                        Experiencia
                    </h2>
                    <div className="section-divider mx-auto"></div>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
                        Proyectos realizados en el marco de las exposiciones de la escuela.
                        Para referencias, consultar a Yessica Martinez.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {proyectos.map((p) => (
                        <div
                            key={p.titulo}
                            className={`glass-card p-6 group animate-slide-up text-center ${p.delay}`}
                        >
                            {/* Tech badge */}
                            <span
                                className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 border ${p.badgeText} ${p.badgeBg} ${p.badgeBorder}`}
                            >
                                {p.tech}
                            </span>

                            <h3 className="text-xl font-semibold text-[#f8fafc] mb-3 group-hover:text-[#06d6a0] transition-colors duration-300">
                                {p.titulo}
                            </h3>

                            <p className="text-sm text-[#94a3b8] leading-relaxed">
                                {p.desc}
                            </p>

                            {/* Bottom accent line */}
                            <div
                                className={`mt-5 mx-auto h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full ${p.lineBg}`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section3;