<script lang="ts">
	import type { WeatherDay } from '../types/weather.types';

	const { weather }: { weather: WeatherDay[] } = $props();
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<!-- Fun header -->
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
					<th class="px-4 py-4 font-semibold text-gray-700">تاریخ</th>
					<th class="px-4 py-4 font-semibold text-gray-700">روز</th>
					<th class="px-4 py-4 font-semibold text-gray-700">دما</th>
					<th class="px-4 py-4 font-semibold text-gray-700">احتمال بارش</th>
					<th class="px-4 py-4 font-semibold text-gray-700">نوشیدنی؟</th>
				</tr>
			</thead>
			<tbody>
				{#each weather as day}
					<tr
						class="{day.hasRain
							? 'bg-linear-to-r from-blue-50 to-indigo-50'
							: 'bg-white'} border-b border-gray-200 transition-all duration-200 hover:bg-gray-50"
					>
						<td class="px-4 py-4">{day.date}</td>
						<td class="px-4 py-4 font-medium">{day.weekday}</td>
						<td class="px-4 py-4">
							{day.maxTemp}° <span class="text-gray-400">/</span>
							{day.minTemp}°
						</td>
						<td class="px-4 py-4">
							{#if day.precipProb > 70}
								<span class="font-medium text-red-600">{day.precipProb}%</span>
							{:else if day.precipProb > 30}
								<span class="font-medium text-orange-500">{day.precipProb}%</span>
							{:else}
								{day.precipProb}%
							{/if}
						</td>
						<td class="px-4 py-4 text-center font-medium">
							{#if day.hasRain}
								<span class="inline-flex items-center gap-2 text-blue-700">
									بله 🍻
									<span class="text-xl">☕</span>
								</span>
							{:else}
								<span class="text-gray-500">خیر</span>
							{/if}
						</td>
					</tr>
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
