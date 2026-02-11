interface UnderConstructionProps {
  pageName: string
}

const UnderConstruction = ({ pageName }: UnderConstructionProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '80px',
        marginBottom: '24px',
      }}>
        🚧
      </div>
      
      <h1 style={{
        fontSize: '32px',
        fontWeight: 700,
        color: '#1a1a1a',
        marginBottom: '12px',
        letterSpacing: '-0.02em',
      }}>
        {pageName}
      </h1>
      
      <p style={{
        fontSize: '16px',
        color: '#666666',
        maxWidth: '400px',
        lineHeight: '1.6',
      }}>
        This page is currently under construction. Check back soon for updates!
      </p>

      <div style={{
        marginTop: '32px',
        padding: '12px 24px',
        background: '#fafafa',
        border: '1px solid #e5e5e5',
        borderRadius: '10px',
        fontSize: '14px',
        color: '#666666',
      }}>
        Status: <span style={{ fontWeight: 600, color: '#1a1a1a' }}>Coming Soon</span>
      </div>
    </div>
  )
}

export default UnderConstruction
