
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        Om mig
      </h1>
        <p className="App-text"> 
          Jag är 25 år gammal och växte upp i Stockholms skärgård på en ö utanför Vaxholm med min familj. 
          Jag bor sedan 2018 i Täby där jag tycker om att spela datorspel, umgås med vänner och att programmera! 

          Jag är en nyfiken och flexibel fullstack utvecklare med störst intresse gentemot backend och trivs särskilt bra att arbeta i team. 
          Jag har mest erfarenhet inom Java, men även grundläggande kunskaper i TypeScript och JavaScript mm. som jag mer än gärna utvecklar vidare!
          De projekt jag har utvecklat har jag gjort både självständigt och i team. Jag har bland annat gjort textbaserade äventyrsspel och beräkningsprogram. 
          I team har jag gjort många olika spel i Unity och Unreal Engine 5, och det senaste projektet jag var med och utvecklade var en fitness app 
          (Starka år, finns länkad i github) som utvecklades i TypeScript, Angular där vi arbetade agilt med scrum och jira. 
          För närvarande arbetar jag med att modernisera spelet Imposter, då jag och min familj och vänner tyckte det var kul att spela och ville testa att utveckla en egen version. 
          Dessa projekt har gett mig både praktisk erfarenhet och fördjupad förståelse för programmering, problemlösning och projektutveckling, både i grupp och självständigt.
        </p>

      <h2 className="App-header">
        Tekniska kunskaper
      </h2>
        <p className="App-text">
          Java, JavaFX, C#, HTML, CSS, 
          JavaScript/TypeScript 
          React, Angular, Spring
          Unity, Unreal Engine 5
          UML, databashantering, SQL, MongoDB
          UX & grafiska gränssnitt
          Agil arbetsmetodik
        </p>

        <h3 className="App-header"> 
        Github projekt
        </h3>
          <div className="App-text">
            <a href="https://github.com/EmmaAlmer/roomThief" target="_blanc" rel="noopener noreferrer"> Ett simpelt textbaserat äventyrsspel </a> <br></br>
            <a href="https://github.com/EmmaAlmer/DiceGame" target="_blanc" rel="noopener noreferrer"> Ett tärningsspel</a> <br></br>
            <a href="https://github.com/EmmaAlmer/webbProjektUppgift" target="_blanc" rel="noopener noreferrer"> En introduktion webbsida om mig</a> <br></br>
          </div>
    </div>
  );
}

export default App;
