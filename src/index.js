//import all style sheets here!
import "./styles/second_reset.scss"
import "./styles/homepage.scss"
import BarChart from './scripts/barchart_general';



document.addEventListener('DOMContentLoaded', () => {
    const barData = {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: sample
    };

    new BarChart(barData);
})