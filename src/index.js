// <!-- <script src="../src/three.js"></script>
//     <script type="module" src="../src/FBXLoader.js"></script>
//     <script>
//       // import { FBXLoader } from "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/loaders/FBXLoader.js";

//       function init() {
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//           80,
//           window.innerWidth / window.innerHeight,
//           0.1,
//           1000
//         );

//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);
//         // const geometry = new THREE.BoxGeometry();
//         // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//         // const cube = new THREE.Mesh(geometry, material);
//         // scene.add(cube);

//         // camera.position.z = 5;

//         const loader = new FBXLoader();
//         // loader.setPath("./assets/fbx/");
//         // loader.load("Dolphin.fbx", (fbx) => {
//         loader.load("./assets/fbx/Dolphin.fbx", function (fbx) {
//           // dolphin = fbx.scene.children[0];
//           scene.add(fbx.scene);
//           renderer.render(scene, camera);
//         });
//         // undefined,
//         // function (e) {
//         //   console.error(e);
//         // }
//       }
//       // scene.add(fbx.scene);
//       // renderer.render(scene, camera);
//       // fbx.scale.setScalar(0.1);
//       // fbx.traverse((c) => {
//       //   c.castShadow = true;
//       // });
//       // });
//       init();

//       // function animate() {
//       //   requestAnimationFrame(animate);
//       //   cube.rotation.x += 0.15;
//       //   cube.rotation.y += 0.15;
//       //   cube.rotation.z -= 0.5;
//       //   renderer.render(scene, camera);
//       // }
//       // animate();
//     </script> -->