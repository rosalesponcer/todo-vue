<template lang="pug">
article.item-list
	header
		h1.item-list__title {{ title }}

		.actions
			button.action(@click='onAction("edit")')
				i.fas.fa-pen

			button.action.secondary(@click='onAction("remove")')
				i.fas.fa-trash

	.item-list__container
		p.content {{ content }}

	footer(v-if='tags.length')
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
	},
	methods: {
		onAction(action) {
			this.$emit('on-action', action);
		}
	}
};
</script>

<style scooped lang="scss">
@import '../scss/ItemList.scss';
</style>
