import dynamic from 'next/dynamic';
import { useEffect } from "react";

// Bepaal of we in een ontwikkelingsomgeving zijn
const isDev = process.env.NODE_ENV === 'development';

// Dynamische import voor ClientComponent alleen tijdens ontwikkeling
const ClientComponent = isDev
  ? dynamic(() => import('./page'), { ssr: false })
  : require('./page').default;

export default function RootLayout({ children }) {
  useEffect(() => {
    console.log("RootLayout mounted");
  }, []);

  return (
    <html lang="en">
      <body>
        <ClientComponent />
        {children}
      </body>
    </html>
  );
}
