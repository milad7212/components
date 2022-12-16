import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header/>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
