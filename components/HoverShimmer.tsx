export default function HoverShimmer({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return <span className={className}>{children}</span>;
}
