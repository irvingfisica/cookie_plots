const div = document.querySelector("#graf");

const datap = d3.json({{cookiecutter.data}});

datap.then(function(data) {

    const plot = Plot.plot({
        color: {legend:true},
        marks: [
            Plot.dot(data, {
                x:"Horsepower",
                y:"Miles_per_Gallon",
                r:"Acceleration",
                fill:"Origin",
                stroke:"black",
                strokeWidth: 0.5,
                tip: true  
            })
        ]
    });
    
    div.append(plot);

})

