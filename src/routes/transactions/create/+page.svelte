<script>
	function validate() {
		console.log("I'm the validate() function");
	}

	const inputClasses =
		'block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

	const inputPadding = 'py-1.5 px-3';

	const labelClasses = 'text-sm font-medium text-gray-700 leading-6 mb-3 block';
</script>

<form on:submit|preventDefault={validate} method="POST" class="max-w-lg mx-auto">
	<h1 class="text-3xl font-bold text-gray-900 mb-8">Create Transaction</h1>

	<label class={labelClasses}>
		<span class="block mb-1">Name</span>
		<input type="text" name="name" class={inputClasses + inputPadding} />
	</label>

	<label class={labelClasses}>
		<span class="block mb-1">Amount</span>
		<div class="relative mt-2 rounded-md shadow-sm">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<span class="text-gray-500 sm:text-sm">$</span>
			</div>

			<input type="text" name="amount" id="amount" class={inputClasses} placeholder="0.00" />
		</div>
	</label>

	<label class={labelClasses}>
		<span class="block mb-1">Type</span>
		<input type="text" name="type" class={inputClasses} />
	</label>

	<label class={labelClasses}>
		<span class="block mb-1">Category</span>
		<input type="text" name="category" class={inputClasses} />
	</label>

	<div class="flex gap-4 pt-4">
		<button
			class="bg-indigo-600 hover:bg-indigo-700 transition-colors rounded text-white px-4 py-1.5"
			type="submit">Submit</button
		>

		<button
			class="bg-zinc-100 border border-zinc-300 rounded text-zinc-800 px-4 py-1.5 hover:bg-zinc-200 transition-colors"
			type="submit">Cancel</button
		>
	</div>
</form>
