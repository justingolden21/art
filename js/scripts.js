
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
		html += `<div class="art" style="background-color:${colors.background}">${changeArt(art[key],2,colors.background,colors.light)}</div>`;
	}
	u('#art').html(html);
};

const changeNum = (svg, num) => svg.replaceAll('litwick','litwick'+num).replaceAll('lampent','lampent'+num).replaceAll('chandelure','chandelure'+num);
const changeFill = (svg, fill) => svg.replaceAll(/fill:#([0-9a-f]{6})/ig, 'fill:'+fill).replaceAll(/fill:#([0-9a-f]{3})/ig, 'fill:'+fill);
const changeStroke = (svg, stroke) => svg.replaceAll(/stroke:#000/ig, 'stroke:'+stroke);
const changeArt = (svg, num, fill, stroke) => changeStroke(changeFill(changeNum(svg,num),fill),stroke);