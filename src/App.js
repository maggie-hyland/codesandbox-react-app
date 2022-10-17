import './styles.css';
import './App.css';
import BottomContainer from "./BottomContainer";
import OpenSource from "./OpenSource";

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="container" id="weather-app-container">
          <div className="card" id="container-card">
            <div className="card-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-5" id="app-name">
                    <i className="fa-regular fa-hand-peace"></i> Get Ready
                    Forecast
                  </div>
                </div>
                <div className="BottomContainer" id="bottom-container">
                  <BottomContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row OpenSource">
          <OpenSource />
        </div>
      </div>
    </div>
  );
}

export default App;
