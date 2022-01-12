<template lang="pug">
article
	header
		h1.title AGREGAR TODO

	form.item-form(@submit.prevent='onSubmit')
		.control
			label.control__name Titulo
			input.control__input(
				type='text',
				v-model='title',
				placeholder='Ingrese Título'
			)

		.control
			label.control__name Contenido
			textarea.control__input(
				v-model='content',
				resizable='false',
				rows='4',
				cols='50',
				placeholder='Ingrese Contenido'
			)

		//- input.btn(type='submit', value='Guardar')
		button.submit(type='submit', :disabled='!(content && title)') Guardar
</template>

<script>
export default {
	name: 'item-form',
	data() {
		return {
			title: '',
			content: ''
		};
	},
	methods: {
		onSubmit() {
			let todo = {
				title: this.title,
				content: this.content
			};

			if (todo.title && todo.content) this.$emit('add-todo', todo);

			this.title = '';
			this.content = '';
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/ItemForm.scss';
</style>
