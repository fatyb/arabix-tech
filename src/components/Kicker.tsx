export function Kicker({
  children,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p className={`kicker ${onDark ? "kicker-on-dark" : ""} ${className}`}>
      {children}
    </p>
  );
}
