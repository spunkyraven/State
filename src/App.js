import "./App.css";
import { Component } from "react";
import image1 from "./BOX.jpg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervall: null,
      timer: 0,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.state.intervall);
  }

  state = { isVisible: false };
  person = ["Kanzari", "Iheb", "Graphic Designer"];
  showV = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      timer: null,
    });
  };
  render() {
    return (
      <div className="divv">
        {this.state.isVisible ? (
          <>
            <button onClick={this.showV}>Hide info</button>

            {this.person.map((p, i) => (
              <h1 key={i}>{p}</h1>
            ))}

            <div className="timee">
              <center>
                <img
                  src={image1}
                  style={{ height: 200, width: 200, marginLeft: 30 }}
                  alt="Profileimage"
                />
                <input
                  style={{ width: 20, height: 20 }}
                  type="text"
                  value={this.state.timer}
                />
              </center>
            </div>
          </>
        ) : (
          <button onClick={this.showV}> Show info </button>
        )}
      </div>
    );
  }
}
export default App;
