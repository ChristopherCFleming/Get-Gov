import BarChart from "./barchart_general";

class FinalBarChart extends Component {
    state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: sample
  }

  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default FinalBarChart;