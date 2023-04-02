const items = [
	{
		id: 1,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Apple',
		description:
			'A crisp and juicy fruit with a sweet and tart flavor, perfect for snacking or adding to salads.',
	},
	{
		id: 2,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Banana',
		description:
			'A deliciously sweet fruit with a creamy texture that is rich in potassium and other essential nutrients.',
	},
	{
		id: 3,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Cherry',
		description:
			'Small and sweet with a tartness that adds a burst of flavor, these cherries are perfect for desserts or snacking.',
	},
	{
		id: 4,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Peach',
		description:
			'A fuzzy and fragrant fruit with a soft and juicy flesh that is perfect for making pies, cobblers, and jams.',
	},
	{
		id: 5,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Plum',
		description:
			'A juicy and sweet fruit with a tangy flavor that is perfect for eating fresh, baking, or making into preserves.',
	},
	{
		id: 6,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Pineapple',
		description:
			'A tropical fruit with a sweet and tangy flavor, perfect for grilling or adding to smoothies and desserts.',
	},
	{
		id: 7,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Meatloaf',
		description:
			'A classic comfort food made with ground beef and seasonings, perfect for a hearty and satisfying meal.',
	},
	{
		id: 8,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Watermelon',
		description:
			'A refreshing and hydrating fruit with a sweet and juicy flesh that is perfect for hot summer days.',
	},
	{
		id: 9,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Avocado',
		description:
			'A creamy and nutritious fruit that is rich in healthy fats, vitamins, and minerals.',
	},
	{
		id: 10,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Grapes',
		description:
			'Small and sweet with a satisfying crunch, grapes are perfect for snacking, making into jams, or adding to salads.',
	},
	{
		id: 11,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Orange',
		description:
			'A citrus fruit with a bright and zesty flavor that is perfect for juicing, snacking, or adding to desserts.',
	},
	{
		id: 12,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Mango',
		description:
			'A tropical fruit with a sweet and tangy flavor that is perfect for making smoothies, salsa, or adding to salads.',
	},
	{
		id: 13,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Blueberries',
		description:
			'Small and bursting with flavor, blueberries are rich in antioxidants and perfect for adding to yogurt, muffins, or pancakes.',
	},
	{
		id: 14,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Strawberries',
		description:
			'Sweet and juicy with a delicate texture, strawberries are perfect for desserts, salads, or simply snacking.',
	},
	{
		id: 15,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Raspberries',
		description:
			'A tart and sweet fruit with a delicate texture, raspberries are perfect for making jams, adding to smoothies, or topping desserts.',
	},
	{
		id: 16,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Blackberries',
		description:
			'A tangy and juicy fruit with a slightly sweet flavor, blackberries are perfect for baking, making jams, or simply snacking.',
	},
	{
		id: 17,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Kiwi',
		description:
			'A small and fuzzy fruit with a sweet and tangy flavor that is perfect for eating on its own, adding to fruit salads, or using as a garnish.',
	},
	{
		id: 18,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Cantaloupe',
		description:
			'A sweet and juicy fruit with a refreshing flavor that is perfect for eating on its own, adding to salads, or making into smoothies.',
	},
	{
		id: 19,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Honeydew',
		description:
			'A sweet and juicy fruit with a light and refreshing flavor that is perfect for adding to salads, making into smoothies, or eating on its own.',
	},
	{
		id: 20,
		sku: Math.floor(Math.random() * 5000) + 1,
		name: 'Pear',
		description:
			'A sweet and juicy fruit with a delicate flavor that is perfect for eating fresh, baking, or making into preserves.',
	},
];
function init() {
	const storageKey = 'bucket';
	const cartStorageKey = 'cart';
	const basketStorageKey = 'basket';

	function createOptions() {
		const searchKey = document.getElementById('searchKey');
		// const searchInput = document.getElementById("searchInput");
		const keys = Object.keys(items[0]);
		keys.forEach((key) => {
			const option = document.createElement('option');
			option.value = key;
			option.textContent = key;
			searchKey.appendChild(option);
		});
	}

	createOptions();

	function addToSessionStorage(item) {
		let selectedItems = JSON.parse(sessionStorage.getItem(storageKey)) || [];

		selectedItems.push(item);
		sessionStorage.setItem(storageKey, JSON.stringify(selectedItems));
		updateDisplayItems(storageKey); // Update the bucket items display after adding a new item
	}
	function filterItems(searchKey, searchText) {
		return items.filter((item) => {
			const value = item[searchKey];
			if (typeof value === 'string') {
				return value.toLowerCase().includes(searchText.toLowerCase());
			} else {
				return value.toString().includes(searchText);
			}
		});
	}

	function updateDisplayItems(key) {
		const items = JSON.parse(sessionStorage.getItem(key)) || [];
		const div = document.getElementById(key);
		div.innerHTML = '';
		items.forEach((item) => {
			if (key === basketStorageKey) {
				console.log(item);
				// create bin container
				const binDiv = document.createElement('div');
				const title = document.createElement('h3');
				const subtitle = document.createElement('h5');
				title.textContent = `Bin: ${item.bin}`;
				subtitle.textContent = `Items: ${item.items.length}`;
				binDiv.classList.add('bin');
				binDiv.appendChild(title);
				binDiv.appendChild(subtitle);
				div.appendChild(binDiv);

				// create items container
				const itemsContainer = document.createElement('div');
				itemsContainer.classList.add('items-container');

				item.items.forEach((item) => {
					const itemDiv = document.createElement('div');
					itemDiv.textContent = `${item.id}: ${item.name}`;
					itemsContainer.appendChild(itemDiv);
					binDiv.appendChild(itemsContainer);
				});
			} else {
				const itemDiv = document.createElement('div');
				itemDiv.textContent = `${item.id}: ${item.name}`;
				div.appendChild(itemDiv);
			}
		});
	}
	function displayItems(filteredItems) {
		const resultsDiv = document.getElementById('results');
		resultsDiv.innerHTML = '';

		filteredItems.forEach((item) => {
			const itemDiv = document.createElement('div');
			itemDiv.style.cursor = 'pointer';
			itemDiv.classList.add('results');
			itemDiv.addEventListener('click', () => addToSessionStorage(item));
			itemDiv.textContent = `${item.id}: ${item.name}`;
			resultsDiv.appendChild(itemDiv);
		});
	}
	function updateFilteredItems() {
		const selectedKey = searchKey.value;
		const searchText = searchInput.value;
		const filteredItems = filterItems(selectedKey, searchText);
		displayItems(filteredItems);
	}
	function addToCart() {
		const bucketItems = JSON.parse(sessionStorage.getItem(storageKey)) || [];
		const cartItems = JSON.parse(sessionStorage.getItem(cartStorageKey)) || [];
		if (bucketItems.length === 0) {
			alert('You must have items in the bucket');
			return;
		}
		sessionStorage.setItem(
			cartStorageKey,
			JSON.stringify([...bucketItems, ...cartItems])
		);
		updateDisplayItems(cartStorageKey);
		clearBucket();
	}
	function clearBucket() {
		sessionStorage.removeItem(storageKey);
		updateDisplayItems(storageKey);
	}
	function clearCart() {
		sessionStorage.removeItem(cartStorageKey);
		refreshCart();
	}
	function clearBasket() {
		sessionStorage.removeItem(basketStorageKey);
		updateDisplayItems(basketStorageKey);
	}
	function refreshCart() {
		updateDisplayItems(cartStorageKey);
	}
	function addToBasket() {
		const cartItems = JSON.parse(sessionStorage.getItem(cartStorageKey)) || [];
		if (cartItems.length === 0) {
			alert('You must have items in the cart');
			return;
		}
		const basketItems =
			JSON.parse(sessionStorage.getItem(basketStorageKey)) || [];
		const countBasketItems = basketItems.length;
		sessionStorage.setItem(
			basketStorageKey,
			JSON.stringify([
				...basketItems,
				{ bin: basketItems.length + 1, items: cartItems },
			])
		);
		clearCart();
		updateDisplayItems(basketStorageKey);
		updateDisplayItems(cartItems);
	}
	function reset() {
		sessionStorage.clear();
		window.location.reload();
	}
	function toggleSearch() {
		const searchDiv = document.getElementById('search');
		searchDiv.classList.toggle('hidden');
		if (searchDiv.classList.contains('hidden')) {
			overlayOff();
		} else overlayOn();
	}
	function overlayOn() {
		document.getElementById('overlay').style.display = 'block';
	}
	function overlayOff() {
		document.getElementById('overlay').style.display = 'none';
	}
	const searchKey = document.getElementById('searchKey');
	const searchInput = document.getElementById('searchInput');
	const addToOrderBtn = document.getElementById('addToOrder');
	const clearCartBtn = document.getElementById('clearCart');
	const clearBucketBtn = document.getElementById('clearBucket');
	const refreshCartBtn = document.getElementById('refreshCart');
	const addToBasketBtn = document.getElementById('addToBasket');
	const resetBtn = document.getElementById('reset');
	const searchBtn = document.getElementById('searchBtn');
	const clearBasketBtn = document.getElementById('clearBasket');
	const overlay = document.getElementById('overlay');

	updateDisplayItems(storageKey);
	updateDisplayItems(cartStorageKey);
	updateDisplayItems(basketStorageKey);
	addToOrderBtn.addEventListener('click', addToCart);
	clearBucketBtn.addEventListener('click', clearBucket);
	clearCartBtn.addEventListener('click', clearCart);
	refreshCartBtn.addEventListener('click', refreshCart);
	addToBasketBtn.addEventListener('click', addToBasket);
	resetBtn.addEventListener('click', reset);
	clearBasketBtn.addEventListener('click', clearBasket);
	searchBtn.addEventListener('click', toggleSearch);
	searchKey.addEventListener('change', updateFilteredItems);
	searchInput.addEventListener('input', updateFilteredItems);
	overlay.addEventListener('click', toggleSearch);

	// toggle search on command + k
	document.addEventListener('keydown', function (event) {
		if (event.metaKey && event.keyCode === 75) {
			// The Command + K shortcut was pressed
			// Do something here
			toggleSearch();
		}
	});
}
init();
