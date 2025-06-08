import { useState } from 'react';
import './App.css';
// @ts-ignore
import Explorer from './components/Explorer';
import Frame from './components/Frame';
import Line from './components/Line';
import Taskbar from './components/Taskbar';
import TaskbarButton from './components/TaskbarButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-pastel-pink text-pastel-blue" >
      <Taskbar>
          <TaskbarButton
          icon={'/src/assets/png/phone.png'}
          label={'Telegram'}
          to='https://t.me/hatzumomoo'
          />
      </Taskbar>
      <Explorer>
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
      </Frame>
    </div>
  )
}

export default App
