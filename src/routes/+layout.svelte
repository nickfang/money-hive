<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<Header />
<main class="container py-4">
	<div class="main">
		<slot />
	</div>
</main>
