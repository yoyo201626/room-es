import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });


export const stand = (timestamp) => {
  cube.rotation.x = timestamp;
  cube.rotation.y = timestamp;
};

export default () => {
  const cube = new THREE.Mesh(geometry, material);

  const route = (timestamp) => {
    cube.rotation.x = timestamp;
    cube.rotation.y = timestamp;
  };
  return {
    obj: cube,
    route
  };
};
