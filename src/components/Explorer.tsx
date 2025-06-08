import Frame from "./Frame";

type ExplorerProps = {
	children: React.ReactNode;
};

export default function Explorer({children }: ExplorerProps) { 
    return (
			<Frame
				title="Explorer"
				logo="/src/assets/png/flop_drive.png"
			>
				{children}
			</Frame>
	);
}