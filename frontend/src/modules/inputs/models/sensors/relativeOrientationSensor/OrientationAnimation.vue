<script setup lang="ts">
import {
  ArrowHelper,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three'
import {onMounted, ref, watch} from "vue"
import type {Quaternion as QuaternionType} from "@/modules/inputs/models/sensors/relativeOrientationSensor/useRelativeOrientationSensor"

const props = defineProps<{
  quaternion: QuaternionType
}>()
const threeJsWrapper = ref<HTMLDivElement>()

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;
camera.lookAt(new Vector3(0, 0));
const geometry = new BoxGeometry(1, 2.5, .05);
const material = new MeshBasicMaterial({color: 0xababab, opacity: .4, transparent: true});
const cube = new Mesh(geometry, material);
scene.add(cube);
const vectorX = new Vector3( 1, 0, 0 );
const vectorY = new Vector3( 0, 1, 0 );
const vectorZ = new Vector3( 0, 0, 1 );
const arrowHelperX = new ArrowHelper( vectorX.normalize(), new Vector3( 0, 0, 0 ), 1, 0xff0000 );
const arrowHelperY = new ArrowHelper( vectorY.normalize(), new Vector3( 0, 0, 0 ), 1, 0x00ff00 );
const arrowHelperZ = new ArrowHelper( vectorZ.normalize(), new Vector3( 0, 0, 0 ), 1, 0x0000ff );
cube.add(arrowHelperX)
cube.add(arrowHelperY)
cube.add(arrowHelperZ)
const renderer = new WebGLRenderer();

onMounted(() => {
  if (!threeJsWrapper.value) {
    return
  }
  renderer.setSize(threeJsWrapper.value.clientWidth, threeJsWrapper.value.clientHeight);
  threeJsWrapper.value?.appendChild(renderer.domElement)
  cube.quaternion.fromArray(props.quaternion).invert()
  renderer.render( scene, camera );
})

watch(() => props.quaternion,(newValue) => {
  cube.quaternion.fromArray(newValue).invert()
  renderer.render(scene, camera)
})

</script>

<template>
  <div
    ref="threeJsWrapper"
    class="three-js-wrapper"
  >
  </div>
</template>

<style scoped>
.three-js-wrapper {
  width: 100%;
  aspect-ratio: 1/2;
}
</style>
