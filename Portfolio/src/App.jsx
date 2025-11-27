import './App.css'
import Taskbar from './components/taskbar/taskbar.jsx';
import Startmenu from './components/startmenu/startmenu.jsx';
import Window from './components/window.jsx';
import { useStore } from './store.js';

function Start() {
    const on = useStore((state) => state.on);
    if (on) {
        return(
            <Startmenu></Startmenu>
        )
    } else {
        return null;
    }
}

function WindowToggle() {
  const window = useStore((state) => state.window);
  if (window) {
    return (
      <Window></Window>
    );
  } else {
    return null;
  }
}

function App() {
  return (
    <>
      <div className='background'>
        <div className='desktop'>
          <Taskbar></Taskbar>
          <Start></Start>
          <WindowToggle></WindowToggle>
        </div>
      </div>
    </>
  )
}

export default App
