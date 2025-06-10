type TaskbarButtonProps = {
  icon: string;
  label: string;
  to: string;
  onClick?: () => void;
}

export default function TaskbarButton({ icon, label, to, onClick }: TaskbarButtonProps) { 
  return (
    <div
    onClick={onClick!}
      className="relative h-[22px] pt-[2px] pr-[5px] pl-[5px] text-[16px] leading-none bg-pastel-200 text-text-dark font-wcmd tracking-[-0.04em]"
        style={{
          borderRadius: 0,
          borderTop: '1px solid var(--color-border-lightest)',
          borderLeft: '1px solid var(--color-border-lightest)',
          borderBottom: '2px solid var(--color-border-darkest)',
          borderRight: '2px solid var(--color-border-darkest)',
          backgroundColor: 'var(--color-pastel-200)'
        }}
    >
    { to &&
      <a
        href={to}
        className="flex items-center gap-2 text-inherit visited:text-inherit"
      >
        {/* Вторая тень (семи-тёмный бордер) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderBottom: '1px solid var(--color-border-semidark)',
            borderRight: '1px solid var(--color-border-semidark)',
            boxSizing: 'border-box',
          }}
        />
        <img src={icon} alt="" width={16} height={16} />
        <span className="text-text-dark">{label}</span>
      </a>
    }
    {!to && 
      <div
        className="flex items-center gap-2"
      >
        {/* Вторая тень (семи-тёмный бордер) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderBottom: '1px solid var(--color-border-semidark)',
            borderRight: '1px solid var(--color-border-semidark)',
            boxSizing: 'border-box',
          }}
        />
        <img src={icon} alt="" width={18} height={18} />
        <span>{label}</span>
      </div>

    }
    </div>
  );
}
