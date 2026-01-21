export default function ParallelLayout({
  children,
  cardView,
  naturalDescription,
  modal,
}: {
  children: React.ReactNode;
  cardView: React.ReactNode;
  naturalDescription: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {naturalDescription}
        {cardView}
        {modal}
      </body>
    </html>
  );
}
