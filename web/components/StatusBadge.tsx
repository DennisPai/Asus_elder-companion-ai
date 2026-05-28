'use client';

interface StatusBadgeProps {
  type: 'verified' | 'design' | 'pending';
  label?: string;
}

const styles = {
  verified: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200',
  design: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200',
  pending: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200',
};

export default function StatusBadge({ type, label }: StatusBadgeProps) {
  if (!label) return null;
  return (
    <span className={styles[type]}>
      {label}
    </span>
  );
}
