import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler (req, res) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get('message')
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        { message }
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
