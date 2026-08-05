import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface CortexMarkProps {
  className?: string;
  size?: number;
}

export default function CortexMark({ className = "", size = 44 }: CortexMarkProps) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src={getAssetPath("/logo.png")}
        alt=""
        width={1254}
        height={1254}
        sizes={`${Math.ceil(size * 2)}px`}
        draggable={false}
        className="pointer-events-none absolute left-1/2 top-[77%] h-auto w-[195%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
      />
    </span>
  );
}
