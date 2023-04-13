// Find the latest version by visiting 
// https://www.npmjs.com/package/three/v/0.151.3
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

console.log(scene);
console.log(camera);
console.log(renderer);