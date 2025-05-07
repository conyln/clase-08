            const filas = document.querySelector("tbody");
            const texto = document.querySelector("#promedio")
            var total = 0;
            async function notas() {
                let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
                let data = await consulta.json();
                console.log(data);
                data.forEach((d)=>{
                    filas.innerHTML += `<tr><td>${d.nombre}</td><td>${(d.nota).toFixed(1)}</td><td>${carita(d.nota)}</td><td>${barrita(d.nota)}</tr>`;
                    total = total + d.nota;
                });
                texto.innerHTML = (total/12).toFixed(1);
            }
              notas().catch((error) => console.error(error));         

               function carita (n){
                var emoji;
            if (n > 5.9){
                emoji= "😄";
            } else if (n == 5.9) {
                emoji= "🙂";
            } else { 
                emoji= "😕";
            }
            if (n == 7){
                emoji= "😱";
            }
            return emoji
        }

function barrita(n) {
    let ancho = (n / 7) * 140;
    let color = "#E36414"; // color por defecto (naranja)

    if (n === 7) {
        color = "#00FF7F"; // verdeagua
    } else if (n >= 6) {
        color = "#70e000"; // verde
    } else if (n >= 5) {
        color = "#ffba08"; // amarillo
    } else if (n >= 4) {
        color = "#E36414"; // naranja
    } else {
        color = "#d00000"; // rojo
    }

    return `
        <svg class="barra-svg" width="250" height="20">
            <rect width="250" height="20" fill="#eee"/>
            <rect width="${ancho}" height="20" fill="${color}"/>
            <text x="125" y="14" text-anchor="middle" fill="#000" font-size="12">${n.toFixed(1)}</text>
        </svg>`;
}
