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
    <main>
      {children}
      {naturalDescription}
      {cardView}
      {modal}
    </main>
  );
}
