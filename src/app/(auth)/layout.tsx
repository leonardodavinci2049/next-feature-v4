export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow">
            <nav className="container mx-auto px-4 py-4">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Auth Layout
              </h1>
            </nav>
          </header>
        <div className="container mx-auto px-4 py-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
