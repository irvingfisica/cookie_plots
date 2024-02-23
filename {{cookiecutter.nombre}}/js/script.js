const div = document.querySelector("#graf");

//const plot = Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot();

const data = await d3.csv({{cookiecutter.data}});

const plot = Plot.plot({
    marks: [
        Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random}))
    ]
});

div.append(plot);