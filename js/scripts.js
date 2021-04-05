
const names = ['litwick','lampent','chandelure'];

const colors = {
	background: '#181a28',
	light: '#b2badf',
}

window.onload = ()=> {
	let html = '';
	for(let key of names) {
		html += `<div class="art">${art[key]}</div>`;
	}
	for(let key of names) {
		html += `<div class="art" style="background-color:${colors.background}">${changeArtNum(art[key],2).replaceAll(/fill:#([0-9a-f]{6})/ig, 'fill:'+colors.background).replaceAll(/stroke:#000/ig, 'stroke:'+colors.light)}</div>`;
	}
	u('#art').html(html);
};

const changeArtNum = (str, num) => str.replaceAll('litwick','litwick'+num).replaceAll('lampent','lampent'+num).replaceAll('chandelure','chandelure'+num);