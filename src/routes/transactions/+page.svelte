<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Input
	} from 'flowbite-svelte';

	interface Transaction {
		id: number;
		name: string;
		price: number;
		type: TransactionType;
		category: string;
	}

	type TransactionType = 'debit' | 'credit';

	// TODO: Retrieve transactions from database
	let transactions: Transaction[] = [
		{
			id: 1,
			name: 'Cash Deposit',
			price: 4000,
			type: 'debit',
			category: 'Category'
		},
		{
			id: 2,
			name: 'Apple MacBook Pro 17"',
			price: 2999,
			type: 'credit',
			category: 'Category'
		},
		{
			id: 3,
			name: 'Microsoft Surface Pro',
			price: 1999,
			type: 'credit',
			category: 'Category'
		},
		{
			id: 4,
			name: 'Magic Mouse 2',
			price: 99,
			type: 'credit',
			category: 'Category'
		}
	];

	function numberToPrice(price: number) {
		return price.toLocaleString('en', {
			minimumFractionDigits: 2
		});
	}

	function displayPrice(price: number, type: TransactionType) {
		return `${type === 'debit' ? '+' : '-'}$${numberToPrice(price)}`;
	}

	$: total = transactions.reduce((acc, curr) => {
		if (curr.type === 'debit') {
			return acc + curr.price;
		}
		return acc - curr.price;
	}, 0);

	function displayTotal(total: number) {
		return total < 0 ? `-$${numberToPrice(total * -1)}` : `$${numberToPrice(total)}`;
	}

	function submit(e: Event) {
		if (e.target instanceof HTMLFormElement) {
			const formData = new FormData(e.target);
			const data: any = {};

			for (let field of formData) {
				const [key, value] = field;
				data[key] = value;
			}

			transactions = [
				...transactions,
				{
					id: transactions.length + 1,
					name: data.name,
					price: Number(data.price),
					type: data.type,
					category: data.category
				}
			];
		}
	}

	const inputClasses =
		'py-1.5 px-3 block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

	const alignInputWithText = '-ml-3';
</script>

<div>
	<form on:submit|preventDefault={submit}>
		<Table divClass="relative overflow-x-auto">
			<TableHead>
				<TableHeadCell>Name</TableHeadCell>
				<TableHeadCell>Price</TableHeadCell>
				<TableHeadCell>Category</TableHeadCell>
				<TableBodyCell><span class="sr-only">Edit</span></TableBodyCell>
			</TableHead>

			<TableBody>
				{#each transactions as { id, name, price, type, category }, index (id)}
					<TableBodyRow>
						<TableBodyCell>{name}</TableBodyCell>
						<TableBodyCell>
							<div class={type === 'credit' ? 'text-red-600' : ''}>{displayPrice(price, type)}</div>
						</TableBodyCell>
						<TableBodyCell>{category}</TableBodyCell>
						<TableBodyCell class="text-center">
							<!-- TODO: Update to turn text into input fields -->
							<button type="button" class="text-indigo-600 hover:text-indigo-800 hover:underline"
								>Edit</button
							>
						</TableBodyCell>
					</TableBodyRow>
				{/each}

				<TableBodyRow>
					<TableBodyCell>
						<Input
							type="text"
							placeholder="Name"
							name="name"
							class={`${inputClasses} ${alignInputWithText}`}
							required
							autocomplete="off"
						/>
					</TableBodyCell>

					<TableBodyCell>
						<div class="flex gap-1">
							<select name="type" class={`${inputClasses} w-auto`} required>
								<option value="debit">+</option>
								<option value="credit">-</option>
							</select>

							<div class="relative rounded-md shadow-sm w-24">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<span class="text-gray-500 sm:text-sm">$</span>
								</div>

								<!-- TODO: Only allow numbers -->
								<Input
									type="text"
									name="price"
									id="price"
									class={`${inputClasses} pl-6`}
									placeholder="0.00"
									required
									autocomplete="off"
								/>
							</div>
						</div>
					</TableBodyCell>

					<TableBodyCell>
						<Input
							type="text"
							placeholder="Category"
							name="category"
							class={`${inputClasses} ${alignInputWithText}`}
							required
							autocomplete="off"
						/>
					</TableBodyCell>

					<TableBodyCell class="text-center">
						<button
							on:click={() => null}
							class="bg-indigo-600 hover:bg-indigo-800 text-white rounded px-4 py-1.5"
							type="submit"
						>
							Add
						</button>
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>

			<tfoot class="border-t border-gray-200">
				<tr class="font-semibold text-gray-900 dark:text-white">
					<th scope="row" class="py-3 px-6 text-base">Total</th>
					<td class="py-3 px-6">
						<div class={total < 0 ? 'text-red-600' : ''}>{displayTotal(total)}</div>
					</td>
				</tr>
			</tfoot>
		</Table>
	</form>
</div>
