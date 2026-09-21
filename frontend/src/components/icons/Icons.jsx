// Bo icon SVG toi gian, dung chung mot phong cach net (stroke, currentColor)
// de khong phai cai them thu vien icon ngoai o giai doan nay.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconSearch({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.2" y2="16.2" />
    </svg>
  );
}

export function IconMapPin({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconShieldCheck({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 3l7 3v5c0 4.6-2.9 8.4-7 10-4.1-1.6-7-5.4-7-10V6l7-3Z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </svg>
  );
}

export function IconWallet({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCalendar({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconClock({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconUsers({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <path d="M15.5 9a2.7 2.7 0 1 0 0-5.4" />
      <path d="M17 14.3c2.3.5 3.5 2.4 3.5 5.7" />
    </svg>
  );
}

export function IconArrowRight({ size = 18, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}
