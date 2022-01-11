<template lang="pug">
.item-list
	h1.item-list__title {{ title }}

	.item-list__container
		p.content {{ content }}

	.tags
		span.tags__item(v-for='(tag, index) in tags', :key='index') {{ tag }}
</template>

<script>
export default {
	name: 'item-list',
	props: {
		title: {
			type: String,
			default: 'No Title'
		},
		content: {
			type: String,
			default: 'No content'
		},
		tags: {
			type: Array,
			default() {
				return [];
			}
		}
	}
};
</script>

<style scooped lang="scss">
@import '../scss/ItemList.scss';
</style>
