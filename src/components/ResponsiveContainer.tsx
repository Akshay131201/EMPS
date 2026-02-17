import { ReactNode, CSSProperties } from 'react'

interface ResponsiveContainerProps {
  children: ReactNode
  style?: CSSProperties
}

const ResponsiveContainer = ({ children, style }: ResponsiveContainerProps) => {
  return (
    <div style={{
      padding: 'clamp(16px, 4vw, 32px)',
      maxWidth: '1400px',
      margin: '0 auto',
      ...style,
    }}>
      {children}
    </div>
  )
}

export default ResponsiveContainer
