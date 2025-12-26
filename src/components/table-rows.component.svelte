<script lang="ts">
	import type { WeatherDay } from '../types/weather.types';

	const props: WeatherDay = $props();

	const today = new Date().toLocaleDateString('fa-IR');
	const isToday = today === props.date;

	let rowBg = $state();

	rowBg = props.hasRain
		? 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100'
		: 'bg-white hover:bg-gray-50';

	if (isToday) {
		rowBg = props.hasRain
			? 'bg-gradient-to-r from-green-50 via-green-100 to-blue-50 hover:from-green-100 hover:to-blue-100'
			: 'bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200';
	}

	const precipProbStyles =
		props.precipProb > 70
			? 'font-medium text-red-600'
			: props.precipProb > 30
				? 'font-medium text-orange-500'
				: '';
</script>

<tr class="{rowBg} border-b border-gray-200 transition-all duration-300 hover:shadow-sm">
	<td class="px-4 py-4 {isToday ? 'font-bold text-green-800' : ''}">{props.date}</td>
	<td class="px-4 py-4 font-medium {isToday ? 'text-green-800' : 'text-gray-800'}">
		{props.weekday}

		{#if isToday}
			<span class="ml-2 text-sm font-normal text-green-600">(امروز)</span>
		{/if}
	</td>
	<td class="px-4 py-4 {isToday ? 'font-medium text-green-800' : ''}">
		{props.maxTemp.toLocaleString('fa-IR')}° <span class="text-xl text-gray-900">/</span>
		{props.minTemp.toLocaleString('fa-IR')}°
	</td>
	<td class="px-4 py-4">
		<span class={precipProbStyles}>
			{props.precipProb.toLocaleString('fa-IR')}%
		</span>
	</td>
	<td class="px-4 py-4 text-center font-medium">
		{#if props.hasRain}
			<span class="inline-flex items-center gap-2 text-blue-700">
				بله 🍻
				<span class="text-xl">☕</span>
			</span>
			{#if isToday}
				<span class="ml-2 text-sm font-normal text-blue-600">(روز نوشیدنی عالی!)</span>
			{/if}
		{:else}
			<span class="text-gray-500">خیر</span>
		{/if}
	</td>
</tr>
