import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nashirul - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 
              'radial-gradient(circle at 25px 25px, rgba(100, 116, 139, 0.15) 2%, transparent 0%), ' +
              'radial-gradient(circle at 75px 75px, rgba(100, 116, 139, 0.15) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            padding: '40px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            Nashirul
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 40,
              color: '#94a3b8',
              marginBottom: 30,
            }}
          >
            Web Developer & Software Engineer
          </div>
          
          {/* Tech Stack */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              fontSize: 24,
              color: '#cbd5e1',
            }}
          >
            <span style={{ padding: '8px 20px', background: '#1e293b', borderRadius: '8px' }}>
              Next.js
            </span>
            <span style={{ padding: '8px 20px', background: '#1e293b', borderRadius: '8px' }}>
              React
            </span>
            <span style={{ padding: '8px 20px', background: '#1e293b', borderRadius: '8px' }}>
              TypeScript
            </span>
          </div>
        </div>
        
        {/* Bottom Logo/Text */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#64748b',
          }}
        >
          nashirul.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
