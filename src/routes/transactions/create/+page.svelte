<script>
	function validate() {
		console.log("I'm the validate() function");
	}
</script>

<form on:submit|preventDefault={validate} method="POST">
	<input />
	<button class="bg-primary-900 rounded text-white px-3 py-2" type="submit"> Create </button>
</form>
