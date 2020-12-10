import * as d3 from "d3";

class BarChart {

  constructor(barData) {

    this.barData = barData;
    this.drawChart();
    
  };

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    
    const svg = d3.select("#sample")
    .append("svg")
    .attr("width", this.barData.width)
    .attr("height", this.barData.height)
    .style("margin-left", 100);

  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => this.barData.height - 10 * d)
    .attr("width", 65)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "green")
  }
      
}
    
           
export default BarChart;