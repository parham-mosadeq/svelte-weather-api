<script lang="ts">
	const { err } = $props();
</script>

<div class="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700" role="alert">
	<strong class="font-bold">خطا!</strong>
	<span class="block sm:inline"> {err.message || 'بارگذاری ناموفق'}</span>
	<button
		class="absolute top-0 right-0 bottom-0 px-4 py-3"
		onclick={() => window.location.reload()}
	>
		تلاش مجدد
	</button>
</div>
