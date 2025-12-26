<script>
	import Loading from '../components/loading.component.svelte';
	import RetryBtn from '../components/retry-btn.component.svelte';
	import WeatherTable from '../components/weather-table.component.svelte';

	export let data;
	const weather = data.weather;
</script>

<h1>کی بشینیم؟</h1>

{#await weather}
	<Loading />
{:then weather}
	<WeatherTable {weather} />
{:catch err}
	<RetryBtn {err} />
{/await}
