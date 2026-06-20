import { ICONS } from '@/lib/icons';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      /* paths are hardcoded constants from icons.ts — not user input */
      dangerouslySetInnerHTML={{ __html: ICONS[name] ?? '' }}
    />
  );
}
