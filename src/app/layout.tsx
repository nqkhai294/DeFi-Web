'use client'

import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "../../public/styles/fonts.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Providers from '@/providers/Providers'
import { ThirdwebProvider } from "thirdweb/react";

const queryClient = new QueryClient();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThirdwebProvider
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
          <QueryClientProvider client={queryClient}>
            <Providers>
              <Provider>{children}</Provider>
            </Providers>
          </QueryClientProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
