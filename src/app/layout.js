import "../styles/globals.css";
import { Metadata } from 'next'

export const metadata = {
  title: "Social proof section",
  description: "A section showcasing user testimonials and reviews.",
  icons: {
    icon: '/images/favicon-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}