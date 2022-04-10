// import logo from './logo.svg';
import './App.css';

function App() {

  const mobileOs = ["Android", "Blackberry", "Iphone", "Windows Phone"]
  let manufacture = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {mobileOs.map(el => {
          return <li>{el}</li>
        })}
      </ul>
      <h1>Mobile Manufacture</h1>
      <ul>
        {manufacture.map(el => {
          return <li>{el}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
