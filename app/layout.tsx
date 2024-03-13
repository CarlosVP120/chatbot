import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>🔗LangChain App</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="description" content="LangChain StoryMaker in NextJS" />
        <meta property="og:title" content="LangChain + Next.js Template" />
        <meta
          property="og:description"
          content="LangChain StoryMaker in NextJS"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain + Next.js Template" />
        <meta
          name="twitter:description"
          content="LangChain StoryMaker in NextJS"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col h-[100vh]">
          {/* <Navbar></Navbar> */}
          {children}
        </div>
      </body>
    </html>
  );
}
