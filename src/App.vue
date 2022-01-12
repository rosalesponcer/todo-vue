<template lang="pug">
.container
	.box
		item-form(@add-todo='onAddTodo')

	.box(v-for='(item, index) in items')
		item-list(
			:key='item._id',
			:content='item.content',
			:title='item.title',
			:tags='item.tags',
			@on-action='selectAction($event, item._id)'
		)
</template>

<script>
import ItemList from './components/ItemList.vue';
import ItemForm from './components/ItemForm.vue';

import { reactive } from '@vue/reactivity';

import { Storage } from './core/LocalSorage';
import { ITEMS } from './constants/Data';

export default {
	name: 'App',
	components: {
		ItemList,
		ItemForm
	},

	methods: {
		onAddTodo(todo) {
			console.log(todo);

			todo = {
				...todo,
				_id: Math.floor(Math.random() * 100000)
			};

			this.items.unshift(todo);
			Storage.set(this.items);
		},
		selectAction(action, item) {
			console.log({ action, item });

			if (action === 'remove') remove(item, this.items);
		}
	},

	setup() {
		let ItemList = Storage.get();

		if (!ItemList) {
			Storage.set(ITEMS);
			ItemList = ITEMS;
		}

		const items = reactive(ItemList);

		return {
			items
		};
	}
};

const remove = (item, items) => {
	const index = items.findIndex((i) => i._id === item);
	items.splice(index, 1);

	Storage.set(items);
};
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>

<style>
@import './styles.scss';
</style>