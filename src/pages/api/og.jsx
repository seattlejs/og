/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler (req, res) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get('message')
  const fontFamily = searchParams.get('fontFamily') || 'monospace'
  return new ImageResponse(
    (
      <div
        style={{
          background: '#6A9541',
          width: '100%',
          height: '100%',
          display: 'flex',
          padding: '18px',
          fontFamily,
        }}
      >
        <div 
          style={{ 
            display: 'flex',
            width: '600px'
          }}
        >
          <img 
            alt="photo of SPEAKER" 
            src="https://seattlejs.com/_public/images/speakers/brian-tran-51c97f157c.jpg" 
            height={300} 
            width={300}
            style={{
              transform: 'rotate(-15deg)'
            }}
          />
        </div>
        <div 
          style={{
            marginLeft: '18px',
            display: 'flex',
            flexDirection: 'column',
            flex: '1'
            }}
          >
          <div 
            style={{
              fontSize: 68,
            }}
          >This is static text</div>
          <div 
            style={{
              fontSize: 48,
            }}
            >{ message }</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      debug: true,
      embedFont: false
    },
  );
}
