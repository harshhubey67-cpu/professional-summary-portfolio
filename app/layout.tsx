import './globals.css';
import React from 'react';

export const metadata = {
  title: 'PROFESSIONAL SUMMARY — Portfolio Website',
  description: 'Computer Science & Engineering Student',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}