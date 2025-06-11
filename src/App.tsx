import './App.css';
import StarTrail from './components/StarTrail';
// @ts-ignore f
import Taskbar from './components/Taskbar';
import TaskbarButton from './components/TaskbarButton';
import WindowManager from './components/WindowManager';

function App() {
  return (
   <div className="flex justify-center  items-center h-screen">
     <div className="window-frame h-full aspect-[4/3] rounded-[30px] max-w-full relative">
     <div
      className="z-999 absolute inset-[0px] border-[10px] border-pink-500 rounded-[30px] shadow-[inset_0_0_50px_rgba(0,0,0,0.7)] pointer-events-none"
    />
      <div className={"window-bounds absolute inset-[10px] rounded-[10px] shadow-inner bg-pastel-pink text-pastel-blue"}>
    {/* <div className="flex flex-col bg-pastel-pink text-pastel-blue" > */}
      <StarTrail />
        {/* <Explorer>
        <Line
          label='NSFW'
          icon='/src/assets/png/folder_closed.png'
        />
        <Line
          label='SFW'
          icon='/src/assets/png/folder_closed.png'
        />
        <Line
          label='Masterpieces'
          icon='/src/assets/png/folder_closed.png'
        />
      </Explorer>
      <Explorer>
        <Line
          label='tentacles.jpeg'
          icon='/src/assets/png/image_editor.png'
        />
        <Line
          label='Jongkook.jpeg'
          icon='/src/assets/png/image_editor.png'
        />
        <Line
          label='Jungkuk.jpeg'
          icon='/src/assets/png/image_editor.png'
        />
        <Line
          label='Jongkuk.jpeg'
          icon='/src/assets/png/image_editor.png'
        />
        <Line
          label='Jongkok.jpeg'
          icon='/src/assets/png/image_editor.png'
        />
        <Line
          label='nude jungkook.jpeg'
          icon='/src/assets/png/image_editor.png'
        />
      </Explorer>
      <Frame
        title='Test'
      >
      </Frame> */}
      <WindowManager>
      </WindowManager>
      <Taskbar >
          <TaskbarButton
            icon={'./assets/png/camera.png'}
            label={'Instagram'}
            to='https://www.instagram.com/hatzumomo_/'
          />
          <TaskbarButton
            icon={'./assets/png/printer.png'}
            label={'Twitter'}
            to='https://x.com/Ansi_nyx'
          />
          <TaskbarButton
            icon={'./assets/png/paint_alt.png'}
            label={'Fiverr'}
            to='https://www.fiverr.com/hatzumomo?public_mode=true'
          />
      </Taskbar>
    </div>
    </div>
    </div>
    //</div>
  )
}

export default App
