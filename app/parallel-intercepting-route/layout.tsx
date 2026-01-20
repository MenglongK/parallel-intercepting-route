export default function ParallelLayout({
  children,
  cardView,
  naturalDescription,
}: {
  children: React.ReactNode;
  cardView: React.ReactNode;
  naturalDescription: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {naturalDescription}
        {cardView}
        
      </body>
    </html>
  );
}
