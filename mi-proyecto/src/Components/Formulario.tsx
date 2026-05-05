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
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
      <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Mensaje" required />
      
      <button type="submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando..." : "Enviar"}
      </button>

      {estado === "ok" && <p>¡Mensaje enviado correctamente!</p>}
      {estado === "error" && <p>Hubo un error, intentá de nuevo.</p>}
    </form>
  );
};

export default Formulario;