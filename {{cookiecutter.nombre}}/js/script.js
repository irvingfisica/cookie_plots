const div = document.querySelector("#graf");

const datap = d3.json({{cookiecutter.data}});

datap.then(function(data) {

    const plot = Plot.plot({
        color: {legend:true},
        r: {range:[0,7]},
        marks: [
            Plot.dot(data, {
                x:"Horsepower",
                y:"Miles_per_Gallon",
                r:"Displacement",
                fill:"Origin",
                stroke:"black",
                strokeWidth: 0.5,
                tip: true  
            })
        ]
    });
    
    div.append(plot);

})

d3.select('#descargar')
  .on('click', function() {
    downloadImage('#grafica', 'grafica.png');
  });

function downloadImage(selector, filename) {
    const div = document.querySelector(selector);

    html2canvas(div).then(function(canvas) {
        const a = document.createElement('a');
        a.download = filename;
        a.href = canvas.toDataURL('image/png');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}