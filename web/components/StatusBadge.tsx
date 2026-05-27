'use client';

interface StatusBadgeProps {
  type: 'verified' | 'design' | 'pending';
  label?: string;
}

const labels = {
  verified: '已驗證',
  design: '設計階段',
  pending: '待後續執行',
};

const styles = {
  verified: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 border border-green-200',
  design: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200',
  pending: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200',
};

export default function StatusBadge({ type, label }: StatusBadgeProps) {
  return (
    <span className={styles[type]}>
      {label || labels[type]}
    </span>
  );
}
