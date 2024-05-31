import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const SanFrancisco = localFont({
  src: '/static-fonts/San-Francisco-Light.otf',
  display: 'swap',
})

// export default function LocalFontLayout({children}){
//     return (
//         <div className={SanFrancisco.className}>
//             {children}
//         </div>
//     )
// }

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Ufitini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SanFrancisco.className}>{children}</body>
    </html>
  );
}
