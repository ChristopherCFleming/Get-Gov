class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = this.props.data;
    
    const svg = d3.select("sample").append("svg")    //Where we connect the SVG to our HTML? 
    .attr("width", this.props.width)
    .attr("height", this.props.height);

    svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => h - (10 * d) - 3)
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default BarChart;