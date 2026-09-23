import Image from "next/image";

export function PlaceholderImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-thumb bg-graphite/10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
