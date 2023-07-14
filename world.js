//create scene
const scene = new THREE.Scene();

//create camera
const camera = new THREE.PerspectiveCamera(50, 2/1, 0.1, 1000);
camera.position.z = 10;

//render scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//create 3D object 
const geometry = new THREE.CylinderBufferGeometry(2, 2, 5, 20);
const material = new THREE.MeshBasicMaterial({color: '#8bc34a', wireframe: true});
const cylinder = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.CircleBufferGeometry( 5, 32 ); 
const material2 = new THREE.MeshBasicMaterial( { color: '#3881f5' } ); 
const circle = new THREE.Mesh( geometry2, material2); 


//add object to scene
scene.add(cylinder);
scene.add( circle );

//animate object
const animate = () => {
    requestAnimationFrame(animate);

    cylinder.rotation.x += 0.00;
    cylinder.rotation.y += 0.02;

    circle.rotation.x += 0.1;

    renderer.render(scene, camera);
};


//call animate to display
animate();