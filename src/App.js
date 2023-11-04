import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const axiosFunc = () => {
    axios({
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2OTkxMTkyNDR9.SHjL4-ejXKVN2Fi-eA2d_LMvCm6vOntaV3kfLLi12lXLj0mzedZGhjcnIBGOO9ArlwgrjzpSVJ0d_wsBSj0S8g",
      },
      url: "hzttp://13.125.135.127:8080/user/saa",
      method: "POST",
      data: {
        name: "createdSaa",
        aaAssets: [
          { assetName: "SPY", rate: 30 },
          { assetName: "XLK", rate: 70 },
        ],
        startDay: "2000-10-10",
        endDay: "2010-01-01",
        initialCash: 3000,
        rebalancingPeriod: "Y",
      },
    }).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={axiosFunc}>axios 요청</button>
      </header>
    </div>
  );
}

export default App;
