<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { Project, Studio, Theatre } from '@threlte/theatre'
</script>

<Canvas useLegacyLights={true}>
  <Theatre>
    <Scene />
  </Theatre>
</Canvas>
