const tarjeta = document.getElementById("tarjeta");

const pedirDatos = async () => {
  //cuando pase lo q esta aca se va a activar
  const resp = await fetch("cursos.json"); //cuando quiera los productos, va a pedir el archivo de productos
  const data = await resp.json();
  console.log(data);

  data.forEach((element) => {
    //del array "Data" voy a recorer, y por cada lemento voy a hacer esto

    const div = document.createElement("div");
    /*este nombre puede ser cuañlquiera*/
    //voy a crear un elemento div
    div.innerHTML = `
        <div class="col">
                <div class="card h-100  ">
                    <img src="${element.img}" class="card-img-top">
                    <div class="card-body ">
                        <h5 class="card-text text-secondary text-center">${element.nombre}</h5>
                    <p class="card-text text-dark">${element.fecha}</p>
                    <p class="card-text text-dark">${element.lugar}</p>
                    <p class="card-text text-dark">$${element.precio}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>    
        
        
        `;
    tarjeta.append(div);
  })
};

pedirDatos(); //con esto prepare la secuencia para que pida los datos
