import './globals.css';

export const metadata = {
  title: '?????? ?? ?????? - ????? ?????',
  description: '?????? ?? ????? ?? ?????? ?????? ?? ?????',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
