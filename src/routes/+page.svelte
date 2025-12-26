<script>
	export let data;
	const weather = data.weather;
</script>

<h1>کی بشینیم؟</h1>

{#await weather}
	<div class="flex h-64 items-center justify-center">
		<div class="h-12 w-12 animate-spin rounded-full border-t-4 border-blue-500"></div>
		<p class="ml-4 text-lg">در حال بارگذاری آب و هوا...</p>
	</div>
{:then weather}
	<table>
		<thead>
			<tr>
				<th>تاریخ</th>
				<th>روز</th>
				<th>-/+ دما</th>
				<th>احتمال باران</th>
				<th>بشینیم؟</th>
			</tr>
		</thead>
		<tbody>
			{#each weather as day}
				<tr style:background-color={day.hasRain ? '#e3f2fd' : 'white'}>
					<td>{day.date}</td>
					<td>{day.weekday}</td>
					<td>{day.maxTemp}°C / {day.minTemp}°C</td>
					<td>{day.precipProb}%</td>
					<td>{day.hasRain ? 'Yes' : 'No'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:catch err}
	<div
		class="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
		role="alert"
	>
		<strong class="font-bold">خطا!</strong>
		<span class="block sm:inline"> {err.message || 'بارگذاری ناموفق'}</span>
		<button
			class="absolute top-0 right-0 bottom-0 px-4 py-3"
			on:click={() => window.location.reload()}
		>
			تلاش مجدد
		</button>
	</div>
{/await}
