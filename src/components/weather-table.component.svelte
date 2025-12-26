<script lang="ts">
	import type { WeatherDay } from '../types/weather.types';

	const { weather }: { weather: WeatherDay[] } = $props();
</script>

<div class="overflow-x-auto">
	<table class="min-w-full border-collapse text-right">
		<thead class="bg-gray-100">
			<tr>
				<th class="px-4 py-3 font-semibold">تاریخ</th>
				<th class="px-4 py-3 font-semibold">روز</th>
				<th class="px-4 py-3 font-semibold">بیشینه / کمینه</th>
				<th class="px-4 py-3 font-semibold">احتمال بارش</th>
				<th class="px-4 py-3 font-semibold">بشینیم؟</th>
			</tr>
		</thead>
		<tbody>
			{#each weather as day}
				<tr
					class="{day.hasRain
						? 'bg-blue-50'
						: 'bg-white'} border-b transition-colors hover:bg-gray-50"
				>
					<td class="px-4 py-3">{day.date}</td>
					<td class="px-4 py-3">{day.weekday}</td>
					<td class="px-4 py-3">
						{day.maxTemp}°C <span class="text-gray-500">/</span>
						{day.minTemp}°C
					</td>
					<td class="px-4 py-3">{day.precipProb}%</td>
					<td class="px-4 py-3 font-medium {day.hasRain ? 'text-red-600' : 'text-green-600'}">
						{day.hasRain ? 'بله' : 'خیر'}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/* Optional: add some RTL support if not using Tailwind's rtl plugin */
	table {
		direction: rtl;
	}
</style>
