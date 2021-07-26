import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
function req() {
  fetch("https://api.adviceslip.com/advice")
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
  
    document.getElementById('h1').innerHTML = data.slip.advice;
  })
  
}
function App() {
  return (
    
    <div className="App">
      <header className="App-header" >
        <div class="p-5 " id="jumbo">
          <center>
            <h1 class="display-3">Precisa de uma conselho?</h1>
            <p class="lead">Aperte o botão!</p>
            
              <Button onClick={req}>Clique aqui!</Button>
            
            </center>
        </div>
        <div class="container-fluid">
          <center>
            <h1 id="h1"></h1>
          </center>
        </div>
      
      
      </header>
    </div>
  );
}

export default App;
