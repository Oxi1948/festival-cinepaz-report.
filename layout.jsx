export const metadata = {
  title: "Festival Cine Paz Report",
  description: "Interactive strategic report of Festival Cine Paz"
};

export default function RootLayout({ children }) {
  return (
    <html lang=\"en\">
      <body className=\"bg-white text-gray-900\">{children}</body>
    </html>
  );
}