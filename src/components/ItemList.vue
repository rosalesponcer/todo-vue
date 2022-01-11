<template lang="pug">
.item-list
	h1.item-list__title {{ title }}

	.item-list__container
		p.content {{ content }}

</template>

<script>
export default {
	name: "item-list",
	props: {
		title: {
			type: String,
			default: "No Title",
		},
		content: {
			type: String,
			default: "No content",
		},
	},
};
</script>

<style scooped lang="scss">
.item-list {
	width: 400px;
	min-height: 200px;
	max-height: 600px;

	display: flex;
	flex-direction: column;

	&__title {
		margin: 0;
		padding-block: 20px;

		text-align: center;
		text-transform: uppercase;

		border-bottom: 1px solid rgba(0, 0, 0, 0.125);

		cursor: pointer;

		&:hover {
			color: red;
		}
	}

	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;

		padding: 20px;
	}
}

.content {
	margin: 0;
}
</style>
