import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import '../../public/styles/fonts.css'

export const metadata: Metadata = {
  title: "Boost Your Dream",
  description: "Come on and boost your dream with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          {children}
        </Provider  >
      </body>
    </html>
  );
}
