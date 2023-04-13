// Find the latest version by visiting https://unpkg.com/three
// Pro tips: Install with NPM and a build tool
// Here, We import the Three.js library from a CDN 
import * as THREE from 'https://unpkg.com/three@0.151.3/build/three.module.js';

// Group: Declare - Init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xAABBFF } );
const cube = new THREE.Mesh( geometry, material );

const planeGeometry = new THREE.PlaneGeometry( 5, 5, 10, 10 );
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide
})
const plane = new THREE.Mesh( planeGeometry, planeMaterial );

// Renderer config
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

scene.add( cube );
scene.add( plane );

camera.position.z = 5;

/* All logged to the console for debugging purposes */
// console.log(geometry);
// console.log(material);
// console.log(scene);
// console.log(camera);
// console.log(renderer);
console.log(plane.geometry.attributes.position.array);

/* Utility Function */

// Rendering the scene
function animate() {
  // 60fps
  requestAnimationFrame(animate);
  renderer.render( scene, camera );

  // Animation the cube
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  plane.rotation.x += 0.01
}

// Run the code flow 
animate()