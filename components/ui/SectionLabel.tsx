export default function SectionLabel({
  children,
  center = false,
  light = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`mono ${center ? "justify-center" : ""}`}
      style={light ? { color: "var(--o)" } : undefined}
    >
      {children}
    </div>
  );
}
