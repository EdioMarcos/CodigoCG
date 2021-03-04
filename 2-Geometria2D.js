// Desenhando uma Geometria 2D simples em Three.js

import * as THREE from './resources/three.js/r126/three.module.js';

function main() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

    var axis = new THREE.AxesHelper();
    scene.add(axis);
	
	renderer.clear();
	renderer.render(scene, camera);
};

main();
