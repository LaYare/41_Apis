var contador = 1;
var div = document.getElementById('div');
var inputUno = document.createElement('input');
var boton = document.createElement('button');
    boton.className = 'btn btn-info';
var contenido = document.getElementById('contenido');

function hacerLista(){
  div.appendChild(inputUno);
  inputUno.setAttribute('placeholder','Añadir una lista');
  div.appendChild(boton);
  boton.innerHTML = 'Agregar';
  boton.setAttribute('id','agregar');
  var agregar = document.getElementById('agregar');
  agregar.addEventListener('click', poner);
  
};

function poner(){
  var tarea = document.createElement('div');
  //var inputDos = document.createElement('input');
  //inputDos.setAttribute('placeholder','añadir una tarjeta');
  //inputDos.setAttribute('draggable','true');
  var botonDos = document.createElement('button');
  var h4 = document.createElement('h4');
  botonDos.className = 'btn btn-success unem'
  contenido.appendChild(tarea);
  tarea.className='amarilla text-center caja unem';
  tarea.appendChild(h4);
  //tarea.appendChild(inputDos);
  tarea.appendChild(botonDos);
  botonDos.innerHTML = 'Crear tarea';
  botonDos.addEventListener('click',tarjeta);
  h4.innerHTML= inputUno.value;
  inputUno.value = '';
  tarea.addEventListener('drop',suelta);
  tarea.addEventListener('dragover',permitir);
  tarea.addEventListener('dragleave',terminaDeArrastrar);

  function tarjeta(){
    var nueva = document.createElement('input');
    nueva.setAttribute('placeholder','añadir una tarjeta');
    nueva.setAttribute('draggable','true');
    nueva.setAttribute('id','tarea.1'+contador);
    nueva.addEventListener('dragstart',arrastra);
    nueva.addEventListener('dragend',dejar);
    contador++;
    nueva.className = 'unem';
    tarea.insertBefore(nueva,botonDos);
  };
};

function arrastra(e){
  e.dataTransfer.setData('text',this.id); //esto mueve el input
};

function permitir(e){
  e.preventDefault();//permite mover los elementos
};

function suelta(e){
  var idArrastra = e.dataTransfer.getData('text');
  var cambio = document.getElementById(idArrastra);
  this.insertBefore(cambio,this.childNodes[1]);
};

function dejar(e){
  e.this.style.opacity = null;
};

function terminaDeArrastrar(e){
  e.this.style.backgroundColor = 'red';
};






