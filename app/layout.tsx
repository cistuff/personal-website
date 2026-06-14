import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max",
  description: "Max's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
