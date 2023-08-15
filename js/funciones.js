
const esBisiesto = (year) => {
  return (year % 400 === 0) ? true : 
  			(year % 100 === 0) ? false : 
  				year % 4 === 0
}


function date(d,m,a){
  //https://es.wikibooks.org/wiki/Algoritmia/Algoritmo_para_calcular_el_día_de_la_semana  Documentación
  let mt = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]
  let mf = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]
  switch (esBisiesto(a)) {
    case true:
      module = mt[m-1]
    case false:
      module = mf[m-1]
  }
  let day = Math.round(((a-1)%7 + ((a-1)/4-(3*((a-1)/100+1)/4))%7 + module + d%7)%7)
  let advise = ['El día es Lunes y es laborable',
             'El día es Martes y es laborable',
             'El día es Miércoles y es laborable',
             'El día es Jueves y es laborable',
             'El día es Viernes y es laborable',
             'El día es Sábado y es fin de semana',
             'El día es Domingo y es fin de semana']

 document.getElementById('respuesta_Fechas').innerHTML = advise[day]
  return 
}  


function start_switch() {
  Element_one = document.getElementById('start');
  Element_one.style.display = 'none';

  Element_two = document.getElementById('options');
  Element_two.style.display = '';
  document.getElementById('answer').innerHTML = 'El número es 50?'
}


let flag= {
  number: 50
};

 
function mayor(){
  flag.number = Math.floor(flag.number+(101-flag.number)/2)
  document.getElementById('answer').innerHTML = 'tu número es ' + flag.number + '?'
  return console.log(flag.number)
}

function menor(){
  flag.number = Math.floor(flag.number-(flag.number/2))
  document.getElementById('answer').innerHTML = 'tu número es ' + flag.number + '?'
}

function igual(){
  document.getElementById('answer').innerHTML = 'excelente, entoces tu número es ' + flag.number + '!'
}
