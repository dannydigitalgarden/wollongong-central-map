const mapData = {
	mapwidth: '2000',
	mapheight: '1500',
	defaultstyle: 'light',
	styles: [
		{
			class: 'light',
			hover: { fill: '#f4f4f4' },
			active: { fill: '#fff' },
		},
		{
			class: 'dark',
			hover: { fill: '#666' },
			active: { fill: '#555' },
		},
	],
	categories: [
		{
			id: '1',
			title: 'Banking & Financial Services',
			color: '#71D1D9',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg',
			legend: 'false',
		},
		{
			id: '2',
			title: 'Discount Variety, Homewares & Entertainment',
			color: '#71D1D9',
			legend: 'false',
		},
		{
			id: '3',
			title: 'Fashion & Accessories',
			color: '#F68266',
			legend: 'false',
		},
		{
			id: '4',
			title: 'Fast Food & Casual Dining',
			color: '#FDC85E',
			legend: 'false',
		},
		{
			id: '5',
			title: 'Fresh Food',
			color: '#9B8DC2',
			legend: 'false',
		},
		{
			id: '6',
			title: 'General Retail & Services',
			color: '#79CB9E',
			legend: 'false',
		},
		{
			id: '7',
			title: 'Health & Beauty Services & Retail',
			color: '#79CB9E',
			legend: 'false',
		},
		{
			id: '8',
			title: 'Supermarkets & Liquor',
			color: '#EB7EB4',
			legend: 'false',
		},
		{
			id: '9',
			title: 'Telecommunications',
			color: '#71D1D9',
			legend: 'false',
		},
	],
	levels: [
		{
			id: 'levelg',
			title: 'LVLG',
			map: 'map/lvlg.svg',
		},
		{
			id: 'level1',
			title: 'LVL1',
			map: 'map/lvl1.svg',
		},
		{
			id: 'level2',
			title: 'LVL2',
			map: 'map/lvl.svg',
		},
	],
};

var map = $('#mapplic').mapplic({
	source: mapData,
	csv: 'map/location-data.csv',
	height: 600,
	lightbox: true,
	marker: 'hidden',
	maxscale: 1,
	sidebartoggle: true,
	fullscreen: true,
	thumbholder: true,
	developer: true,
});

setTimeout(() => {
	console.log('ready...');
	const posX = document.querySelector('.mapplic-coordinates-x');
	const posY = document.querySelector('.mapplic-coordinates-y');
	const mapElements = document.querySelectorAll('.mapplic-clickable');
	mapElements.forEach((el) => {
		el.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			const copyText = `${posX.innerText},${posY.innerText}`;
			var dummy = document.createElement('input');
			document.body.appendChild(dummy);
			dummy.value = copyText;
			dummy.select();
			document.execCommand('copy');
			document.body.removeChild(dummy);
			console.log(`copied: ${copyText}`);
		});
	});
}, 3000);
