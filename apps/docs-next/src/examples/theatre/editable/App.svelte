<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { Theatre } from '@threlte/theatre'
  import Scene from './Scene.svelte'
</script>

<Canvas useLegacyLights={true}>
  <Theatre>
    <Scene />
  </Theatre>
</Canvas>
