const div = document.querySelector("#graf");

const datap = d3.csv({{cookiecutter.data}}, (d) => {
    return {
        x: +d.x,
        y: +d.y,
    }
});

datap.then(function(data) {

    const plot = Plot.plot({
        marks: [
            Plot.lineY(data, {x:"x",y:"y"})
        ]
    });
    
    div.append(plot);

})

