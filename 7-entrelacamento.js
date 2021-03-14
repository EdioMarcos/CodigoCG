import * as THREE from './resources/three.js/r126/three.module.js';

/*Prof. meu código não está correto apesar da figura ser parecida,
fiz na força bruta ,e estou printando a ligação entre todos os pontos do indice , ao invés de 2 a 2,
 não os indices adequadamente , mas pela ultima auula vi que
 todos os processos dependem deste formato , não tive tempo de refazer 
 pq continuei me atrapalhando com o git,vou refazer no final de semana. e recolocarei  no git
 obrigado*/

 
//numero de pontos do círculo
var nvertex =20;

//pfator de multiplicação para determinar o par de ligação
var k =2




function cord_point(){

	var meu_grau = 360 / nvertex;
	var grau_rad = (degrees_to_radians(meu_grau));

	function point(graus,raio){
		var pi = Math.PI;
		var radians = graus * (pi/180);
		var x = Math.cos(radians) * raio;
		var y = Math.sin(radians) * raio;
		return [x, y];
	}

	function degrees_to_radians(degrees)
	{
	  var pi = Math.PI;
	  return degrees * (pi/180);
	}

	function getCircleX(radians, radius) {
	  return Math.cos(radians) * radius;
		}
		function getCircley(radians, radius) {
	  return Math.sin(radians) * radius;
	}
	const vertices = [];

	for (var i=0; i <= nvertex ; i++){
		var fatia = 360 / nvertex
		var grau = fatia * i;
		var coord = point(grau, 1);
		vertices.push( new THREE.Vector3(coord[0],coord[1], 0.0));
	};

	return vertices;
};




function main() {

	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	//renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);
	renderer.setSize(500, 500);
	document.getElementById("WebGL-output").appendChild(renderer.domElement);
	
	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	//eixo
    var axis = new THREE.AxesHelper();
    scene.add(axis);


	var vertices = [];
	var indices = [];
	vertices = cord_point();
	console.log(vertices,"verticea");
	var new_vertices = [];


	for (var i = 0 ; i <= nvertex - 1 ; i++){
		new_vertices.push(vertices[i + 1]);
		new_vertices.push(vertices[((i + 1) * k) % nvertex]);

	}

    //rodoza
	var geometry = new THREE.BufferGeometry().setFromPoints( vertices );
	var line = new THREE.Line( geometry);
	scene.add( line );

	var geometry = new THREE.BufferGeometry().setFromPoints( new_vertices );
	var line = new THREE.Line( geometry);
	scene.add( line );

	renderer.clear();
	renderer.render(scene, camera);
};

main();