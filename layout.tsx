import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Norske Recreational Innovations',
  description:
    'Premium-feeling products across mobility, sporting goods, apparel, automotive accessories, construction materials, and housewares.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
