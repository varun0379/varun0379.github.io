import { Typography } from '@mui/material';
import './App.css';
import NavBar from './components/Navbar';
import backgroundImg from "./img/IMG_1061.CR2.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        backgroundImage: `url(${backgroundImg})`,
        width: '100%',
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <NavBar />
      <Typography variant="h1" fontWeight={"bold"} fontFamily={"serif"} fontSize={"10vw"}>
        Varun Iyer
      </Typography>
      <Typography variant="h4" fontWeight={"bold"} fontFamily={"serif"} fontSize={"3vw"}>
        Computer Science student at North Carolina State University
      </Typography>
      </header>
      {/* <div className="flex justify-center">
        <div className='About-section' id="about" style={{backgroundColor: "black"}}>
          <Typography variant="h4" color={"#CC0000"} fontFamily={"serif"}> 
            About
          </Typography>
      </div>
      </div> */}
    </div>
  );
}

export default App;
