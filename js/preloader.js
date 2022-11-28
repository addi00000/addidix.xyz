const canvas = document.getElementById('animation');
const renderer = new THREE.WebGLRenderer({canvas});
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
const scene = new THREE.Scene();
camera.position.z = 2;

const geometry = new THREE.SphereGeometry(1, 12, 12);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.material.color.setHex(0xd8b8ff);
renderer.setClearColor(0x000000, 0);

function render(time) {
    time *= 0.001;
    cube.rotation.x = time;
    cube.rotation.y = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preload');
    setTimeout(() => { preloader.classList.add('preload-finish'); }, 0);
});