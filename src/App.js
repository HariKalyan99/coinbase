import './App.css';
import Announcement from './Components/Announcement/Announcement';
import Navigationbar from './Components/Navbar/Navigationbar';


function App() {
  return (
    <>
    <div className='App'>
      <Announcement />
    </div>
    <div className='navigation-Bar'>
      <Navigationbar />
    </div>
    </>
  );
}

export default App;
