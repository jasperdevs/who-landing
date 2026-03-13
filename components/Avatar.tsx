import Image from "next/image";

export default function Avatar({
  src,
  alt,
  size = 48,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div
      className="shrink-0 bg-[#e8e1d0] border-[3px] border-ink rounded-full flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}
