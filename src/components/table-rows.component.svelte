<script lang="ts">
	import type { WeatherDay } from '../types/weather.types';

	const props: WeatherDay = $props();
</script>

<tr
	class="{props.hasRain
		? 'bg-linear-to-r from-blue-50 to-indigo-50'
		: 'bg-white'} border-b border-gray-200 transition-all duration-200 hover:bg-gray-50"
>
	<td class="px-4 py-4">{props.date}</td>
	<td class="px-4 py-4 font-medium">{props.weekday}</td>
	<td class="px-4 py-4">
		{props.maxTemp}° <span class="text-gray-400">/</span>
		{props.minTemp}°
	</td>
	<td class="px-4 py-4">
		{#if props.precipProb > 70}
			<span class="font-medium text-red-600">{props.precipProb}%</span>
		{:else if props.precipProb > 30}
			<span class="font-medium text-orange-500">{props.precipProb}%</span>
		{:else}
			{props.precipProb}%
		{/if}
	</td>
	<td class="px-4 py-4 text-center font-medium">
		{#if props.hasRain}
			<span class="inline-flex items-center gap-2 text-blue-700">
				بله 🍻
				<span class="text-xl">☕</span>
			</span>
		{:else}
			<span class="text-gray-500">خیر</span>
		{/if}
	</td>
</tr>
