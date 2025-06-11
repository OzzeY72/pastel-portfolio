import { useState } from "react";
import Frame from "./Frame";
import Line from "./Line";

type ExplorerProps = {
	title: string;
	logo: string;
	onClose:any;
	id: number;
	x: number;
	y: number;
	width: number;
	height: number;
	args: {folderPath: string}
	createViewer: (path: string) => void;
	onClick: (id: number) => void;
	isActive: boolean;
};

const mockFileSystem = {
	name: "root",
	type: "folder",
	children: [
		{
			name: "portfolio",
			type: "folder",
			children: 
			[
				{
					name: "NSFW",
					type: "folder",
					children: [
						{ name: "tentacles.jpeg", type: "file" },
						{ name: "Jungkook.jpeg", type: "file" },
					]
				},
				{
					name: "Masterpiece",
					type: "folder",
					children: [
						{ name: "alice_in_wonderland.jpeg", type: "file" },
					]
				}
			]
		}
	]
};

function getFolderContentsByPath(fs: any, folderPath: string) {
  // Разбиваем путь на части, фильтруя пустые элементы (из-за начального '/')
  const parts = folderPath.split('/').filter(Boolean);
  console.log(parts);

  // Рекурсивно ищем объект папки по пути
  function findFolder(current: any, partsArr: any) {
    if (partsArr.length === 0) return current;

    if (!current.children) return null;

    const nextPart = partsArr[0];
    const nextFolder = current.children.find((item: any) => item.name === nextPart && item.type === "folder");
    if (!nextFolder) return null;

    return findFolder(nextFolder, partsArr.slice(1));
  }

  const targetFolder = findFolder(fs, parts);

  if (!targetFolder || !targetFolder.children) return [];

  // Формируем результат с полным путем и названием
  const basePath = folderPath === "/" ? "" : folderPath;
  return targetFolder.children.map((child: any) => ({
    path: `${basePath}/${child.name}`,
    name: child.name,
    type: child.type
  }));
}

export default function Explorer({ id, title, logo, onClose, x, y, width, height, args, createViewer, onClick }: ExplorerProps) { 
	const [folder, setFolder] = useState(args?.folderPath);

	const getParentFolder = (path: string) => {
		var folders = path.split('/').filter(Boolean);
		var res = '/';

		for(let i = 0; i < folders.length-1; i++)
		{
			res += `${folders[i]}/`;
		}
		return res;
	}

	console.log(folder);
	console.log(getFolderContentsByPath(mockFileSystem, folder)); 

	const instantiateImage = (image: string) => {
		createViewer(`./src/assets${image}`);
	}


  return (
		<Frame
			id={id}
			title={title}
			logo={logo}
			onClose={onClose}
			x={x}
			y={y}
			width={width}
			height={height}
			onClick={onClick}
		>
			{folder !== '/' && 
				<Line 
					key={'..'}
					label="(..)"
					icon="./src/assets/png/folder_closed.png"
					onClick={() => setFolder(getParentFolder(folder))}
				/>
			}
			{
				getFolderContentsByPath(mockFileSystem, folder)?.map((line:any)=>(
					<Line
						key={line.path}
						label={line.name}
						icon={line.type === "folder" ? "./src/assets/png/folder_closed.png" : "./src/assets/png/image_editor.png"}
						onClick={line.type === "folder" ? () => setFolder(line.path) : () => instantiateImage(line.path)}
					/>
				))
			}
		</Frame>
	);
}