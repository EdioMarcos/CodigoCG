// Desenhando uma face triangular em Three.js

import * as THREE from './resources/three.js/r126/three.module.js';

function main() {


	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	const positions = [];
	const indices	= [];

	positions.push( 0.5,  0.5, 0.0); 
	positions.push(-0.5, -0.5, 0.0); 
	positions.push( 0.5, -0.5, 0.0); 

	indices.push( 1, 2, 0 ); 
	
	const triangleGeometry = new THREE.BufferGeometry();

	triangleGeometry.setIndex( indices );
	triangleGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );

	var triangleMaterial = new THREE.MeshBasicMaterial({
		// color:0xffff00,  
		// vertexColors:THREE.VertexColors,
		wireframe:false
		}); 
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

	scene.add( triangleMesh );	
		
	renderer.clear();
	renderer.render(scene, camera);
};

main();
