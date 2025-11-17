import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import ReduxProvider from "./Provider";

export const metadata: Metadata = {
  title: "My Animation App",
  description: "Built with Next.js and Bootstrap",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* <Provider store={store}> */}
        <ReduxProvider>
          <ThemeProvider>
            <Header />
            <main className="container py-4">{children}</main>
            <Footer />
          </ThemeProvider>
          {/* </Provider> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
