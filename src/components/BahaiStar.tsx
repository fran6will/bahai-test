interface BahaiStarProps {
  size?: number;
  className?: string;
}

export default function BahaiStar({ size = 32, className = "" }: BahaiStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Étoile à 8 pointes - symbole bahá'í */}
      <path
        d="M50 5 L55 25 L75 15 L65 35 L85 30 L75 50 L95 45 L85 65 L95 55 L75 65 L85 70 L65 75 L75 85 L55 75 L50 95 L45 75 L25 85 L35 75 L15 70 L25 65 L5 55 L15 65 L5 45 L25 50 L15 30 L35 35 L25 15 L45 25 Z"
        fillRule="evenodd"
      />
    </svg>
  );
}