<template lang="pug">
form.item-form(@submit.prevent="onSubmit")
	.control
		label.control__name Title
		input.control__input(type="text" v-model="title")

	.control
		label.control__name Content
		input.control__input(type="textarea" v-model="content")

	input.btn(type="submit" value="send")

</template>

<script>
export default {
	name: 'item-form',
	data() {
		return {
			title: '',
			content: '',
		};
	},
	methods: {
		onSubmit() {
			let todo = {
				title: this.title,
				content: this.content,
			};

			if (todo.title && todo.content) this.$emit('add-todo', todo);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../scss/ItemForm.scss';
</style>
