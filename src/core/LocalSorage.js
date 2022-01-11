export class Storage {
	static set(items) {
		items && localStorage.setItem('todos', JSON.stringify(items));
	}

	static get() {
		const todos = JSON.parse(localStorage.getItem('todos'));

		return todos || [];
	}
}
