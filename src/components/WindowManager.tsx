import { useState } from "react";
import Explorer from "./Explorer";
import Frame from "./Frame";
import Viewer from "./Viewer";

type WindowPosition = {
	id: number,
	type: string,
	x: number,
	y: number,
	width: number,
	height: number,
	args: any,
};

const pgifs = [
  // "./assets/png/p1.gif",
  "./assets/png/p2.gif",
  // "./assets/png/p3.gif",
  "./assets/png/p4.gif",
  "./assets/png/p5.gif",
  "./assets/png/p6.gif",
  "./assets/png/p7.gif",
]

const WINDOW_OFFSET = 50;
const WINDOW_TOP = 0 //-window.innerHeight/2;
const WINDOW_LEFT = 100 // -window.innerWidth/2;

const getRandom = (max: number) => {
  return Math.floor(Math.random() * max);
}

export default function WindowManager() { 
	const [windows, setWindows] = useState<WindowPosition[]>([
		{
			id: 1,
			type: 'explorer',
			x: 234,
			y: 104,
			width: 400,
			height: 300,
			args: {folderPath: "/"}
		}
	]);
  const [activeWindowId, setActiveWindowId] = useState<number>(0);

	const addWindow = (type = "frame", args = {}, width = 400, height = 300, x=0,y=0) => {
    const count = windows.length;
    const newWindow = {
      id: Date.now(),
      type,
      x: x === 0 ? WINDOW_LEFT + count * WINDOW_OFFSET : x,
      y: y === 0 ? WINDOW_TOP + count * WINDOW_OFFSET : y,
      width: width,
      height: height,
      args,
    };
    setActiveWindowId(newWindow.id);
    setWindows((prev) => [...prev, newWindow]);
  };

  const createViewer = (image: string) => {
    addWindow("viewer", { image }, 441, 485);
  }

	const closeWindow = (id: number) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const createAboutMe = () => {
    addWindow(
      "aboutme",
      { gif: null },
      500,
      400,
    );
  }

  return (
    <div className="absolute top-0 left-0">
			<div className="absolute top-[10px] left-[10px]">
				<button
          style={{
            backgroundColor: "rgba(0,0,0,0)"
          }} 
          className="bg-transparent w-[20px] h-[20px]"
          onClick={async () => {
            const { width, height } = document.querySelector('.window-bounds').getBoundingClientRect();
            for (let i = 0; i < 50; i++) {
              addWindow(
                "p1",
                { gif: pgifs[getRandom(pgifs.length)] },
                500,
                400,
                getRandom(width - 500),
                getRandom(height - 400),
              );

              await new Promise(resolve => setTimeout(resolve, 200));
            }
          }}>
				</button>
				<button 
          className="w-[64px] h-[48px] flex flex-col items-center focus:outline-0"
          style={{
            borderRadius: 0,
            border: 0,
            padding: 0,
            backgroundColor: 'rgba(0,0,0,0)'
          }}
					onClick={() =>
						addWindow("explorer", { folderPath: "/" })
					}
				>
          <img src="./assets/png/folder_closed.png" alt="" width={32} height={32} />
          <p>Portfolio</p>
				</button>
				{/* <button
					onClick={() =>
						addWindow("viewer", { image: "./assets/portfolio/nsfw/tentacles.jpeg" }, 300, 330)
					}
				>
					Open Paint
				</button> */}
			</div>

      {windows.map((win) => {
        switch (win.type) {
          case "frame":
            return (
              <Frame
                key={win.id}
                id={win.id}
                x={win.x}
                y={win.y}
                width={win.width}
                height={win.height}
                onClose={() => closeWindow(win.id)}
                isActive={win.id === activeWindowId}
                onClick={() => setActiveWindowId(win.id)}
                {...win.args}
              >
                {win.args.content}
              </Frame>
            );
          case "explorer":
            return (
              <Explorer
                key={win.id}
                id={win.id}
                x={win.x}
                y={win.y}
                width={win.width}
                height={win.height}
								logo={'./assets/png/flop_drive.png'}
								title="Explorer"
                onClose={() => closeWindow(win.id)}
                args={win.args}
                createViewer={createViewer}
                isActive={win.id === activeWindowId}
                onClick={() => setActiveWindowId(win.id)}
              />
            );
						case "viewer":
            return (
              <Viewer
                key={win.id}
                id={win.id}
                x={win.x}
                y={win.y}
                width={win.width}
                height={win.height}
								logo={'./assets/png/paint.png'}
								title="Paint"
                onClose={() => closeWindow(win.id)}
                args={win.args}
                isActive={win.id === activeWindowId}
                onClick={() => setActiveWindowId(win.id)}
              />
            );
            case "p1":
            return (
              <Frame
                key={win.id}
                id={win.id}
                x={win.x}
                y={win.y}
                width={win.width}
                height={win.height}
								logo={'./assets/png/paint.png'}
								title="Ƈїѕтяємα ρσνґєжďєнå. 𝕻єяєžαγυкå ηєνσżмσжηå."
                onClose={() => closeWindow(win.id)}
                isActive={win.id === activeWindowId}
                onClick={() => setActiveWindowId(win.id)}
              >
                <img className="h-full w-full"  src={win.args.gif}/>
              </Frame>
            );
            case "aboutme":
            return (
              <Frame
                key={win.id}
                id={win.id}
                x={win.x}
                y={win.y}
                width={win.width}
                height={win.height}
								logo={'./assets/png/paint.png'}
								title="About me"
                onClose={() => closeWindow(win.id)}
                isActive={win.id === activeWindowId}
                onClick={() => setActiveWindowId(win.id)}
              >
                <img className="h-full w-full" src={"./assets/png/aboutme.png"}/>
              </Frame>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
