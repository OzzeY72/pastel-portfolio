import { useState } from "react";
import { Rnd } from "react-rnd";
import Button from "./Button";

type TaskbarProps = {
	title: string;
	logo: string;
	children: React.ReactNode;
	onClose:any;
};

export default function Frame({ title, logo, onClose, children }: TaskbarProps) { 
	const [isMaximized, setIsMaximized] = useState(false);
	const [isOpened, setIsOpened] = useState(true);

	const handleMaximize = () => setIsMaximized(!isMaximized);
	const handleClose = () => {setIsOpened(false); onClose?.()};

	return (
		<>
		{isOpened &&
		<Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 300,
      }}
      minWidth={200}
      minHeight={150}
      bounds="window" // чтобы не выходило за пределы окна браузера
      dragHandleClassName="handle"
      className="absolute bg-win-bg shadow-md border border-win-border-dark"
    >
		<div
			className={`absolute flex flex-col p-[5px] border-[1px] border-win-bg bg-win-bg shadow-md`}
			style={{
				width: isMaximized ? "100%" : "400px",
				height: "300px",
				borderRight: "2px solid var(--color-win-bg-rigt)",
				borderBottom: "1px solid var(--color-win-border-dark)"
			}}
		>
			{/* Header */}
			<div className="handle flex justify-between items-center bg-window-header text-text-light px-2 py-1">
				{logo &&
					<div className="flex gap-[10px]">
						<img src={logo} alt="" width={15} height={15} />
						<span className="text-sm font-wcmd">{title}</span>
				</div>
				}

				{!logo &&
					<div>
						<span className="text-sm font-wcmd">{title}</span>
				</div>
				}
				
				
				<div className="flex gap-1">
					<Button icon={"/src/assets/png/minimize.png"} onClick={handleClose} />
					<Button icon={"/src/assets/png/maximize.png"} onClick={handleMaximize} />
					<Button icon={"/src/assets/png/close.png"} onClick={handleClose} />
				</div>
			</div>

			{/* Меню */}
			<div className="flex gap-5 items-center text-win-border-dark px-2 py-1">
				<span className="text-sm font-wcmd"><u>F</u>ile</span>
				<span className="text-sm font-wcmd"><u>E</u>dit</span>
				<span className="text-sm font-wcmd"><u>S</u>earch</span>
				<span className="text-sm font-wcmd"><u>H</u>elp</span>
			</div>

			{/* Контентная зона (растягивается) */}
			<div className="flex-1 overflow-hidden border-[1px] border-win-border-semidark">
				{/* Внутренняя рамка */}
				<div className="w-full h-full border-[1px] border-black flex gap-0 flex-col">
					{children}
				</div>
			</div>

			{/* Псевдо-рамка (если нужно) */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					borderTop: "1px solid var(--color-win-border-light)",
					borderLeft: "1px solid var(--color-win-border-light)",
					borderBottom: "1px solid var(--color-win-bg-bottom)",
					boxSizing: "border-box"
				}}
			/>
		</div>
		</Rnd>
		}
		</>
	);
}
