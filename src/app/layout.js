import "../styles/globals.scss";

export const metadata = {
  title: "Social proof section",
  description: "A section showcasing user testimonials and reviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}