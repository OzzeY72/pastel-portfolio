
type ButtonProps = {
    icon: string;
    label: string;
    onClick: () => void;
};

export default function Line({ icon, label, onClick}: ButtonProps) { 
    return (
       <button
            onClick={onClick}
            className="text-text-dark w-full h-[14px] focus:outline-[0px]"
            style={{
                borderRadius: 0,
                padding: 0,
                backgroundColor: "rgba(255, 0, 0, 0)",
                border: "none",
                outline: "none",
            }}
        >
      <div
        className="flex gap-1 items-center"
      >
        <img src={icon} alt="" width={13} height={13}/>
        <span className="text-[12px] font-wcmd self-center ">{label}</span>
      </div>
    </button>
    );
}
