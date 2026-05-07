function Footer() {
    return (
        <footer className="relative mt-10">
            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}></div>
            <div style={{ background: 'linear-gradient(to bottom, #0a0e1a, #060810)', padding: '48px 24px' }}>
                <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ marginBottom: '32px' }}>
                        <h3 className="text-xl font-bold gradient-text" style={{ marginBottom: '4px' }}>Carrizo Ham Thiago</h3>
                        <p style={{ fontSize: '14px', color: '#64748b' }}>Estudiante de Programación</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <a href="mailto:Hamthiago08@gmail.com" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#06d6a0')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                            ✉ Hamthiago08@gmail.com
                        </a>
                        <a href="mailto:Carrizo.Ham@tecnica7.edu.ar" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#4361ee')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                            🏫 Carrizo.Ham@tecnica7.edu.ar
                        </a>
                    </div>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }}></div>
                    <p style={{ fontSize: '12px', color: '#475569' }}>© 2026 Carrizo Ham Thiago. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;