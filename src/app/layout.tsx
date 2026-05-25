import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import NavigatorPages from "./components/NavigatorPages";

export const metadata: Metadata = {
  title: "Rick y Morty",
  description: "Creo que vamos a hacerlo bastante bien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="MainContainer">
          <div className="TitleContainer">
            <h1>Rick y Morty </h1>
            <p>Examen Final Ordinario - Alberto Narváez</p>
          </div>
          <NavigatorPages />
          {children}
        </div>
      </body>
    </html>
  );
}
