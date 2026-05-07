function Section3() {
    const proyectos = [
        {
            titulo: "Elige tu propia aventura",
            tech: "C++",
            desc: "Juego interactivo de narrativa donde el jugador toma decisiones que cambian el curso de la historia.",
            color: "#06d6a0",
        },
        {
            titulo: "Réplica de PVZ1",
            tech: "Java",
            desc: "Recreación del clásico Plants vs Zombies.",
            color: "#4361ee",
        },
        {
            titulo: "Juego Dungeon",
            tech: "Java",
            desc: "Juego tipo dungeon crawler con generación de salas.",
            color: "#f72585",
        },
    ];

    return (
        <section className="relative py-16 md:py-20">
            <div className="bg-orb w-[350px] h-[350px] bg-[#f72585] bottom-0 right-0 absolute"></div>

            <div className="relative z-10 w-[90%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] animate-fade-in">
                    Experiencia
                </h2>
                <div className="section-divider"></div>
                <p className="text-[#94a3b8] text-base md:text-lg mb-10 max-w-2xl">
                    Proyectos realizados en el marco de las exposiciones de la escuela.
                    Para referencias, consultar a Yessica Martinez.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {proyectos.map((p, i) => (
                        <div
                            key={i}
                            className="glass-card p-6 group animate-slide-up"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            {/* Tech badge */}
                            <span
                                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                                style={{
                                    color: p.color,
                                    background: `${p.color}18`,
                                    border: `1px solid ${p.color}40`,
                                }}
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
                                className="mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                style={{ background: p.color }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section3;