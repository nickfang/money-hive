<!-- <script>
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<!-- src/routes/+page.svelte -->

<!-- 1. -->
<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div>
  <h1>My Blog</h1>
  <main>
    <div>
      <!-- 2. -->
      {data}
    </div>
  </main>
</div>