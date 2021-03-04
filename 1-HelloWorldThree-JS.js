// Hello World em Three.js

import * as THREE from './resources/three.js/r126/three.module.js';

function main() {

	var scene 		= new THREE.Scene();

	var renderer 	= new THREE.WebGLRenderer();
	
	var camera 		= new THREE.Camera();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerWidth*0.5, window.innerHeight*0.5);

	console.log(THREE.REVISION);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	renderer.render(scene, camera);
};

main()
