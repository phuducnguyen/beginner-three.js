// Find the latest version by visiting https://unpkg.com/three
// Pro tips: Install with NPM and a build tool
// Here, We import the Three.js library from a CDN 
import * as THREE from 'https://unpkg.com/three@0.151.3/build/three.module.js';
import * as dat from 'dat.gui'

// OrbitControls is an add-on, allow the camera to orbit around a target
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const gui = new dat.GUI()

const world = {
  plane: {
    width: 10,
    height: 10,
    widthSegments: 10,
    heightSegments: 10
  }
}


gui.add(world.plane, 'width', 1, 20).
  onChange(generatePlane)
gui.add(world.plane, 'height', 1, 20).
  onChange(generatePlane)
gui.add(world.plane, 'widthSegments', 1, 50).
  onChange(generatePlane)
gui.add(world.plane, 'heightSegments', 1, 50).
  onChange(generatePlane)

// Generate the plane for this sources
function generatePlane() {
  planeMesh.geometry.dispose()
  planeMesh.geometry = new THREE.PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    )

  const array = planeMesh.geometry.attributes.position.array;

  for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1]
    const z = array[i + 2]

    array[i + 2] = z + Math.random()
    
    // Do something
    console.log( {x, y, z} );

  }
}

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
const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );

const light = new THREE.DirectionalLight(0xAABBCC, 1);
const backlight = new THREE.DirectionalLight(0xAABBCC, 1);

light.position.set( 0, 0, 1 )
backlight.position.set( 0, 0, -1 )

scene.add( light );
scene.add( backlight );
scene.add( planeMesh );

// Renderer config
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
console.log(OrbitControls)

camera.position.z = 5;

/* Utility Function */

// Rendering the scene
function animate() {
  // 60fps
  requestAnimationFrame(animate);
  renderer.render( scene, camera );
  // renderer.render( planeMesh, camera );

  // Animation the mesh
  planeMesh.rotation.x += 0.01
}

// Run the code flow 
animate()
generatePlane()

/* DEBUG Room / as many console command for me */
const mouse = {
  x: undefined,
  y: undefined
}

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX / innerWidth
  mouse.y = event.clientY

  console.log(mouse)
})