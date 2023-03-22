<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<div class="w-full h-full relative bg-orange-500/20">
  <Canvas useLegacyLights={true}>
    <Scene />
  </Canvas>
</div>
