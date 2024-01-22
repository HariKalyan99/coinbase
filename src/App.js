import './App.css';
import Announcement from './Components/Announcement/Announcement';
import Navigationbar from './Components/Navbar/Navigationbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
