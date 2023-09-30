<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox,
		TableSearch
	} from 'flowbite-svelte';
</script>

<div>
	<section class="mb-4">
		<a href="/transactions/create" class="bg-indigo-600 text-white rounded px-4 py-2 inline-block"
			>Create a Transaction</a
		>
	</section>

	<Table color="yellow" divClass="relative overflow-x-auto">
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
		<tfoot>
			<tr class="font-semibold text-gray-900 dark:text-white">
				<th scope="row" class="py-3 px-6 text-base">Total</th>
				<td class="py-3 px-6">3</td>
				<td class="py-3 px-6">21,000</td>
			</tr>
		</tfoot>
	</Table>
</div>
