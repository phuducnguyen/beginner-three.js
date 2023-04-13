// Find the latest version by visiting https://unpkg.com/three
// Pro tips: Install with NPM and a build tool
// Here, We import the Three.js library from a CDN 
import * as THREE from 'https://unpkg.com/three@0.151.3/build/three.module.js';

// Group: Declare - Init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xAABBFF } );
const cube = new THREE.Mesh( geometry, material );

const planeGeometry = new THREE.PlaneGeometry( 5, 5, 10, 10 );
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xAABBCC,
  side: THREE.DoubleSide,
  flatShading: true
})
const plane = new THREE.Mesh( planeGeometry, planeMaterial );

const light = new THREE.DirectionalLight(0xAABBCC, 1);

const array = plane.geometry.attributes.position.array;

for (let i = 0; i < array.length; i += 3) {
  const x = array[i];
  const y = array[i + 1];
  const z = array[i + 2];
  array[i + 2] = z + Math.random();
  console.log({x, y, z});
} 

// Renderer config
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );
light.position.set( 0, 0, 1 )

scene.add( plane );
scene.add( light );

camera.position.z = 5;

/* All logged to the console for debugging purposes */
// console.log(geometry);
// console.log(material);
// console.log(scene);
// console.log(camera);
// console.log(renderer);
// console.log(plane.geometry.attributes.position.array);

/* Utility Function */

// Rendering the scene
function animate() {
  // 60fps
  requestAnimationFrame(animate);
  renderer.render( scene, camera );

  // Animation the mesh
  plane.rotation.x += 0.01
}

// Run the code flow 
animate()