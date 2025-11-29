import Taskbar from '../components/taskbar/taskbar.jsx';
import Binary from './binary/binary.jsx';
import Startmenu from '../components/startmenu/startmenu.jsx';
import Window from '../components/window.jsx';
import { useStore } from '../store.js';

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

function Desktop() {
  return (
    <>
      <div className='background'>
        <Binary></Binary>
        <div className='desktop'>
          <Taskbar></Taskbar>
          <Start></Start>
          <WindowToggle></WindowToggle>
        </div>
      </div>
    </>
  )
}

export default Desktop
