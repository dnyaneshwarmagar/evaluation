// import logo from './logo.svg';
import './App.css';

function App() {
  const ug = "param";
  const an = "neti-neti"
  const ni = 3;
  const skills = ["mern", "dsa", "animation", "design"]
  return (
    <div className="App">
      {ug} {an}
      <div>You are tending to become {ni === 0 ? "free" : "rigid"}</div>
      <ul>{skills.map((e) => {
        return <Skills value={e} />
      })}
      </ul>
    </div>

  );
}

function Skills(props) {
  console.log("props: ", props);
  return <li className='redtext'>Skill: {props.value}</li>
}

export default App;
