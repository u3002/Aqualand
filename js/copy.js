const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
	const input = document.querySelector('#demoInput');
	input.select();
	if (document.execCommand('copy')) {
		document.execCommand('copy');
		console.log('¸´ÖÆ³É¹¦');
	}
})