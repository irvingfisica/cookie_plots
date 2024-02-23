const div = document.querySelector("#graf");

const plot = Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot();
div.append(plot);