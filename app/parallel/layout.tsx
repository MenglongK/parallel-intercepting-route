export default function ParallelLayout({
  children,
  team,
  analyze,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analyze: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {team}
        {analyze}
      </body>
    </html>
  );
}
