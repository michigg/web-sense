<script setup lang="ts">
import {
  ArrowHelper,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera, Quaternion,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three'
import {onMounted, onUnmounted, ref, watch} from "vue"
import type {
  Quaternion as QuaternionType
} from "@/modules/inputs/models/sensors/relativeOrientationSensor/useRelativeOrientationSensor"

const props = defineProps<{
  quaternion: QuaternionType
}>()
const threeJsWrapper = ref<HTMLDivElement>()

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, -10, 0);
camera.lookAt(new Vector3(0, 0, 0));

const scene = new Scene();

const geometry = new BoxGeometry(5, 10, .5);
const material = new MeshBasicMaterial({color: 0xababab, opacity: .6, transparent: true});
const cube = new Mesh(geometry, material);
scene.add(cube);
const vectorX = new Vector3(1, 0, 0);
const vectorY = new Vector3(0, 1, 0);
const vectorZ = new Vector3(0, 0, 1);
const arrowHelperX = new ArrowHelper(vectorX.normalize(), new Vector3(0, 0, 0), 8, 0xff0000);
const arrowHelperY = new ArrowHelper(vectorY.normalize(), new Vector3(0, 0, 0), 8, 0x00ff00);
const arrowHelperZ = new ArrowHelper(vectorZ.normalize(), new Vector3(0, 0, 0), 8, 0x0000ff);
cube.add(arrowHelperX)
cube.add(arrowHelperY)
cube.add(arrowHelperZ)
const renderer = new WebGLRenderer({alpha: true});

const referenceQuaternion = new Quaternion().fromArray(cube.quaternion.toArray())

onMounted(() => {
  if (!threeJsWrapper.value) {
    return
  }
  camera.aspect = threeJsWrapper.value.clientWidth / threeJsWrapper.value.clientHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(threeJsWrapper.value.clientWidth, threeJsWrapper.value.clientHeight);

  applyQuaternion(props.quaternion)
  threeJsWrapper.value?.appendChild(renderer.domElement)

  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const onResize = () => {
  if (!threeJsWrapper.value) {
    return
  }
  console.log('resize')
  camera.aspect = threeJsWrapper.value.clientWidth / threeJsWrapper.value.clientHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(threeJsWrapper.value.clientWidth, threeJsWrapper.value.clientHeight)
}

watch(() => props.quaternion, (newValue) => {
  applyQuaternion(newValue)
})

const applyQuaternion = (newQuarternion: QuaternionType) => {
  const currentQu = new Quaternion().fromArray(referenceQuaternion.toArray())
  const newQu = new Quaternion().fromArray(newQuarternion).normalize()
  cube.quaternion.fromArray(currentQu.multiply(newQu).toArray())
  renderer.render(scene, camera)
}

</script>

<template>
  <div
    ref="threeJsWrapper"
    class="three-js-wrapper"
    @resize="onResize"
  />
</template>

<style scoped>
.three-js-wrapper {
  width: 100%;
  aspect-ratio: 1/1;
}
</style>
