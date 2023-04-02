import "./globals.css";

export const metadata = {
  title: "Toxicity Detector",
  description: "Detect toxicity factors in text.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
