
type ButtonProps = {
    icon: string;
    onClick: () => void;
};

export default function Button({ icon, onClick}: ButtonProps) { 
    return (
       <button
        onClick={onClick}
        className="relative br bg-win-bg p-0"
        style={{
          borderRadius: 0,
          borderTop: '1px solid var(--color-win-border-light)',
          borderLeft: '1px solid var(--color-win-border-light)',
          borderBottom: '2px solid var(--color-win-border-dark)',
          borderRight: '2px solid var(--color-win-border-dark)',
          padding: 0,
          backgroundColor: "var(--color-win-bg)"
        }}
    >
      <div
        className="flex items-center gap-2"

      >
        {/* Вторая тень (семи-тёмный бордер) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderBottom: '1px solid var(--color-win-border-semidark)',
            borderRight: '1px solid var(--color-win-border-semidark)',
            boxSizing: 'border-box',
          }}
        />
        <img src={icon} alt="" width={18} height={18} />
      </div>
    </button>
    );
}
