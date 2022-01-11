<template lang="pug">
.container
	.box(v-for="(item, index) in items")
		item-list(:key="item._id", :content="item.content", :title="item.title")
</template>

<script>
import ItemList from "./components/ItemList.vue";

import { ITEMS } from "./constants/Data";

export default {
	name: "App",
	components: {
		ItemList,
	},
	data() {
		return {
			items: ITEMS,
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;

	display: flex;
	flex-flow: nowrap column;
	gap: 20px;

	margin: auto;
	padding-inline: 15px;
}

.box {
	width: fit-content;
	height: fit-content;

	margin: auto;

	border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

body {
	box-sizing: border-box;
}

* {
	box-sizing: inherit;
}
</style>
