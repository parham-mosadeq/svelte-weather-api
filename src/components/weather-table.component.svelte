<script>
	const { weather } = $props();
</script>

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
