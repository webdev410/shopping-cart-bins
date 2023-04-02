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
		const storageKey = 'bucket';

		let selectedItems = JSON.parse(sessionStorage.getItem(storageKey)) || [];

		selectedItems.push(item);
		sessionStorage.setItem(storageKey, JSON.stringify(selectedItems));
		displayBucketItems(); // Update the bucket items display after adding a new item
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
	function displayBucketItems() {
		const bucketItems = JSON.parse(sessionStorage.getItem(storageKey)) || [];
		const bucketDiv = document.getElementById('bucket');
		bucketDiv.innerHTML = '';

		bucketItems.forEach((item) => {
			const itemDiv = document.createElement('div');
			itemDiv.textContent = `${item.id}: ${item.name}`;
			bucketDiv.appendChild(itemDiv);
		});
	}
	function displayCartItems() {
		const bucketItems =
			JSON.parse(sessionStorage.getItem(cartStorageKey)) || [];
		const bucketDiv = document.getElementById('cart');
		bucketDiv.innerHTML = '';

		bucketItems.forEach((item) => {
			const itemDiv = document.createElement('div');
			const content = document.createElement('p');
			itemDiv.textContent = `${item.id}: ${item.name}`;
			bucketDiv.appendChild(itemDiv);
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
		sessionStorage.setItem(
			cartStorageKey,
			JSON.stringify([...cartItems, ...bucketItems])
		);
		displayCartItems();
		clearBucket();
	}
	function clearBucket() {
		sessionStorage.removeItem(storageKey);
		displayBucketItems();
	}
	function clearCart() {
		sessionStorage.removeItem(cartStorageKey);
		refreshCart();
	}
	function refreshCart() {
		displayCartItems();
	}

	const searchKey = document.getElementById('searchKey');
	const searchInput = document.getElementById('searchInput');
	const addToOrderBtn = document.getElementById('addToOrder');
	const clearCartBtn = document.getElementById('clearCart');
	const clearBucketBtn = document.getElementById('clearBucket');
	const refreshCartBtn = document.getElementById('refreshCart');

	displayBucketItems();
	addToOrderBtn.addEventListener('click', addToCart);
	clearBucketBtn.addEventListener('click', clearBucket);
	clearCartBtn.addEventListener('click', clearCart);
	refreshCartBtn.addEventListener('click', refreshCart);

	searchKey.addEventListener('change', updateFilteredItems);
	searchInput.addEventListener('input', updateFilteredItems);
}
init();
