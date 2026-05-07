import { useState, useEffect } from "react";

function Slide() {
    const ima = [
        "/csslogo.jpg",
        "/htmlogo.jpg",
        "/logojava.jpg",
        "/taillogo.png",
        "/logogit.jpg",
        "/jslogo.png",
        "/reactlogo.jpg",
        "clogo.png"
    ];

    const labels = [
        "CSS", "HTML", "Java", "Tailwind", "Git", "JavaScript", "React", "C++"
    ];

    const [indice, setIndice] = useState<number>(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 1) % ima.length);
        }, 2000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Background orb */}
            <div className="bg-orb w-[400px] h-[400px] bg-[#4361ee] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute"></div>

            <div className="relative z-10" style={{ width: '90%', maxWidth: '1152px', margin: '0 auto' }}>
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] animate-fade-in">
                        Conocimientos
                    </h2>
                    <div className="section-divider mx-auto"></div>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-lg mx-auto">
                        Tecnologías y lenguajes con los que trabajo
                    </p>
                </div>

                {/* Slide container */}
                <div className="glass-card p-6 md:p-10" style={{ maxWidth: '896px', margin: '0 auto' }}>
                    <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                        {[0, 1, 2, 3, 4].map((offset) => {
                            const i = (indice + offset) % ima.length;
                            return (
                                <div key={offset} className="flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: `${offset * 0.1}s` }}>
                                    <div className="slide-img-container">
                                        <img src={ima[i]} alt={labels[i]} />
                                    </div>
                                    <span className="text-xs md:text-sm text-[#94a3b8] font-medium">{labels[i]}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Slide;