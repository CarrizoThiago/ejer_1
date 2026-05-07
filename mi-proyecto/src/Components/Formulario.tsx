import { useState } from "react";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");

    try {
      const response = await fetch("http://localhost:8080/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEstado("ok");
        setFormData({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado("error");
    }
  };

  return (
    <section className="relative w-full py-16 md:py-20 flex justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-orb w-[400px] h-[400px] bg-[#06d6a0] top-[20%] left-[-100px] absolute"></div>
        <div className="bg-orb w-[300px] h-[300px] bg-[#4361ee] bottom-[10%] right-[-50px] absolute"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] animate-fade-in">
            Contacto
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#94a3b8] text-base md:text-lg">
            ¿Tenés alguna propuesta o consulta? ¡Escribime!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">Nombre</label>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">Apellido</label>
              <input
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Tu apellido"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">Teléfono</label>
              <input
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+54 11 1234-5678"
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#94a3b8] mb-2">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribí tu mensaje acá..."
              required
              rows={4}
              className="form-input resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="form-button"
          >
            {estado === "enviando" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="31.4 31.4" strokeDashoffset="10" />
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar mensaje"
            )}
          </button>

          {/* Status messages */}
          {estado === "ok" && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-[rgba(6,214,160,0.1)] border border-[rgba(6,214,160,0.2)] animate-fade-in">
              <svg className="w-5 h-5 text-[#06d6a0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-[#06d6a0]">¡Mensaje enviado correctamente!</p>
            </div>
          )}
          {estado === "error" && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-[rgba(247,37,133,0.1)] border border-[rgba(247,37,133,0.2)] animate-fade-in">
              <svg className="w-5 h-5 text-[#f72585] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-[#f72585]">Hubo un error, intentá de nuevo.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Formulario;