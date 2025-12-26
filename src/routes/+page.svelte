<script>
	import Loading from '../components/loading.component.svelte';
	import RetryBtn from '../components/retry-btn.component.svelte';

	export let data;
	const weather = data.weather;
</script>

<h1>کی بشینیم؟</h1>

{#await weather}
	<Loading />
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
	<RetryBtn {err} />
{/await}
