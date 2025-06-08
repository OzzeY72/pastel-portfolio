import { useState } from "react";
import { Rnd } from "react-rnd";
import Button from "./Button";

type FrameProps = {
	title: string;
	logo: string;
	children: React.ReactNode;
	onClose:any;
	id: number;
	x: number;
	y: number;
	width: number;
	height: number;
	lockAspectRatio?: boolean | number;  
	onClick: (id: number) => void;
	isActive?: boolean;
};

export default function Frame({ id, title, logo, onClose, children, x, y, width, height, onClick, isActive, lockAspectRatio=false }: FrameProps) { 
	const [isMaximized, setIsMaximized] = useState(false);
	const [isOpened, setIsOpened] = useState(true);

	const [size, setSize] = useState<{width: number, height: number}>({width, height});
	const [position, setPosition] = useState<{x: number, y: number}>({x, y});

	const handleMaximize = () => setIsMaximized(!isMaximized);
	const handleClose = () => {setIsOpened(false); onClose?.()};
	const screenHeight = window.innerHeight-26;
	return (
		<>
		{isOpened &&
		<Rnd
			style={{
				zIndex: isActive ? 999 : 1
			}}
			onClick={() => onClick(id)}
			default={{
				x: position.x,
				y: position.y,
				width: size.width,
				height: size.height,
			}}
			lockAspectRatio={lockAspectRatio}
			minWidth={300}
			minHeight={200}
			maxHeight={screenHeight}
			bounds="window"
			dragHandleClassName="handle"
			className="absolute bg-win-bg shadow-md border border-win-border-dark"
			onDragStop={(e, d) => { setPosition({x: d.x, y: d.y})}}
			onResize={(e, direction, ref, delta, position) => {
				setSize({width: ref.offsetWidth, height: ref.offsetHeight});
			}}
			size={isMaximized ? 
				{
					width:  window.innerWidth,
					height: screenHeight
				} : {width: size.width, height: size.height}
			}
			position={isMaximized ? 
				{	
					x: 0,
					y: 0,
				} : {x: position.x, y: position.y}
			}
		>
		<div
			className={`absolute flex flex-col p-[5px] border-[1px] border-win-bg bg-win-bg shadow-md`}
			style={{
				width: "100%",
				height: "100%",
				borderRight: "2px solid var(--color-win-bg-rigt)",
				borderBottom: "1px solid var(--color-win-border-dark)",
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
