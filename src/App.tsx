import { useState } from 'react';
import './App.css';
// @ts-ignore
import Taskbar from './components/Taskbar';
import TaskbarButton from './components/TaskbarButton';
import WindowManager from './components/WindowManager';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col bg-pastel-pink text-pastel-blue" >
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
      <Taskbar>
          <TaskbarButton
            icon={'/src/assets/png/camera.png'}
            label={'Instagram'}
            to='https://www.instagram.com/hatzumomo_/'
          />
          <TaskbarButton
            icon={'/src/assets/png/printer.png'}
            label={'Twitter'}
            to='https://x.com/Ansi_nyx'
          />
          <TaskbarButton
            icon={'/src/assets/png/paint_alt.png'}
            label={'Fiverr'}
            to='https://www.fiverr.com/hatzumomo?public_mode=true'
          />
      </Taskbar>
    </div>
  )
}

export default App
