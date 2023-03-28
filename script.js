console.log('CALCULADOR DE PREÇO DE ROTULO');

const areaDeImpressao = 0.09;
const custoDeImpressao = 30;
const rotulosPorArea = 4;



function calculate(){
  var width = document.getElementById("width").value
  var heigth = document.getElementById("height").value

  

  multi = width * heigth
  console.log(multi)

 
  document.getElementById('unity-value').innerHTML = multi
  
}


