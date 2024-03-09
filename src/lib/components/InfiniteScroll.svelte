<script>
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let threshold = 0;
	export let horizontal = false;
	/**
	 * @type {any}
	 */
	export let elementScroll;
	export let hasMore = true;

	const dispatch = createEventDispatcher();
	let isLoadMore = false;
	/**
	 * @type {HTMLDivElement}
	 */
	let component;

	$: {
		if (component || elementScroll) {
			// const element = elementScroll ? elementScroll : component.parentNode;
			const element = component.closest('ul');

			element?.addEventListener('scroll', onScroll);
			element?.addEventListener('resize', onScroll);

			// element.addEventListener('scroll', onScroll);
			// element.addEventListener('resize', onScroll);
		}
	}

	const onScroll = (/** @type {{ target: any; }} */ e) => {
		const element = e.target;

		const offset = horizontal
			? element.Width - element.clientWidth - element.scrollLeft
			: element.Height - element.clientHeight - element.scrollTop;

		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch('loadMore');
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	};

	onDestroy(() => {
		if (component || elementScroll) {
			const element = elementScroll ? elementScroll : component.parentNode;

			element.removeEventListener('scroll', null);
			element.removeEventListener('resize', null);
		}
	});
</script>

<div bind:this={component} style="width:0px" />
