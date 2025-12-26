<script lang="ts">
	import type { WeatherDay } from '../types/weather.types';
	import TableRows from './table-rows.component.svelte';

	const { weather }: { weather: WeatherDay[] } = $props();
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<div class="mb-8 text-center">
		<h1 class="mb-2 text-3xl font-bold text-gray-800">هوای هفتگی شیراز</h1>
		<p class="text-gray-600">
			روزهای بارانی = <span class="font-semibold text-blue-600">روزهای نوشیدنی ☕🍷</span>
		</p>
	</div>

	<div class="overflow-x-auto">
		<table class="min-w-full border-collapse text-right">
			<thead class="bg-gray-50">
				<tr class="border-b border-gray-200">
					<th class="tableHeads">تاریخ</th>
					<th class="tableHeads">روز</th>
					<th class="tableHeads">دما</th>
					<th class="tableHeads">احتمال بارش</th>
					<th class="tableHeads">نوشیدنی؟</th>
				</tr>
			</thead>
			<tbody>
				{#each weather as day}
					<TableRows {...day} />
				{/each}

				{#if !weather?.length}
					<tr>
						<td colspan="5" class="py-12 text-center text-gray-500">
							هنوز داده‌ای برای نمایش نداریم...
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>

	<p class="mt-6 text-center text-sm text-gray-500">
		روزهای بارانی بهترین زمان برای یک فنجان چای یا قهوه داغ ☕
	</p>
</div>

<!-- * Making the thead styles a common style -->
<style>
	@reference 'tailwindcss';

	.tableHeads {
		@apply px-4 py-4 font-semibold text-gray-700;
	}
</style>
