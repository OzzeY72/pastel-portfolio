import { useState } from "react";
import Explorer from "./Explorer";
import Frame from "./Frame";
import Viewer from "./Viewer";

type WindowManagerProps = {
  children: React.ReactNode;
};

type WindowPosition = {
	id: number,
	type: string,
	x: number,
	y: number,
	width: number,
	height: number,
	args: any,
};

const WINDOW_OFFSET = 30;
const WINDOW_TOP = 0 //-window.innerHeight/2;
const WINDOW_LEFT = 0 // -window.innerWidth/2;

export default function WindowManager() { 
	const [windows, setWindows] = useState<WindowPosition[]>([
		{
			id: 1,
			type: 'explorer',
			x: WINDOW_LEFT,
			y: WINDOW_TOP,
			width: 400,
			height: 300,
			args: {folderPath: "/"}
		}
	]);
  const [activeWindowId, setActiveWindowId] = useState<number>(0);

	const addWindow = (type = "frame", args = {}, width = 400, height = 300) => {
    const count = windows.length;
    const newWindow = {
      id: Date.now(),
      type,
      x: WINDOW_LEFT + count * WINDOW_OFFSET,
      y: WINDOW_TOP + count * WINDOW_OFFSET,
      width: width,
      height: height,
      args,
    };
    setWindows((prev) => [...prev, newWindow]);
  };

  const createViewer = (image: string) => {
    addWindow("viewer", { image }, 441, 485);
  }

	const closeWindow = (id: number) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="absolute top-0 left-0">
			<div className="fixed top-1/2 left-1/2">
				<button onClick={() => addWindow("frame", { title: "My Frame" })}>
					Open Frame
				</button>
				<button
					onClick={() =>
						addWindow("explorer", { folderPath: "/portfolio/NSFW" })
					}
				>
					Open Explorer
				</button>
				<button
					onClick={() =>
						addWindow("viewer", { image: "/src/assets/portfolio/nsfw/tentacles.jpeg" }, 300, 330)
					}
				>
					Open Paint
				</button>
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
								logo={'/src/assets/png/flop_drive.png'}
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
								logo={'/src/assets/png/paint.png'}
								title="Paint"
                onClose={() => closeWindow(win.id)}
                args={win.args}
                isActive={win.id === activeWindowId}
                onClick={() => setActiveWindowId(win.id)}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
