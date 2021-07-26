
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
        
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
      <header className="App-header" >
        <div class="p-5 " id="jumbo">
          <center>
            <h1 class="display-3">Precisa de um conselho?</h1>
            <p class="lead">Aperte o botão!</p>
            
             
            <Button onClick={req} variant="primary">Click aqui!</Button>{' '}
            </center>
        </div>
        <div class="container-fluid">
          <center>
            <p id="h1"></p>
          </center>
        </div>
      
      
      </header>
    </div>
  );
}

export default App;
