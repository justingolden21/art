
const names = ['litwick','lampent','chandelure'];

const colors = {
	black: '#000000',
	dark: '#181a28',
	light: '#b2badf',
	white: '#ffffff',
}

window.onload = ()=> {
	let html = '';
	for(let key of names)
		html += `<div class="art">${art[key]}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.dark}">${changeArt(art[key],2,colors.dark,colors.white)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.white}">${changeArt(art[key],3,colors.white,colors.dark)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.black}">${changeArt(art[key],4,-1,-1,0)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.dark}">${removeEyes(changeArt(art[key],5,-1,colors.white),key,5)}</div>`;
	u('#art').html(html);
};

const changeNum = (svg, num) => svg.replaceAll('litwick','litwick'+num).replaceAll('lampent','lampent'+num).replaceAll('chandelure','chandelure'+num);
const changeFill = (svg, fill) => fill == -1 ? svg : svg.replaceAll(/fill:#([0-9a-f]{6})/ig, 'fill:'+fill);
const changeStroke = (svg, stroke) => stroke == -1 ? svg : svg.replaceAll(/stroke:#000/g, 'stroke:'+stroke);
const changeStrokeWidth = (svg, width) => width == -1 ? svg : svg.replaceAll(/stroke-width:10px/g, 'stroke-width:'+width+'px');
const changeArt = (svg, num, fill=-1, stroke=-1, width=-1) => changeStrokeWidth(changeStroke(changeFill(changeNum(svg,num),fill),stroke),width);

const removeEyes = (svg,name,num) => svg.replace('</style>','#'+name+num+' .eye{opacity:0;display:none;fill:none;stroke:none;stroke-width:0}</style>');
// const removeEyes = (svg,name,num) => svg.replace(getTextBetweenStrings(svg, '<path class="eye', '/>'),'');

// const getTextBetweenStrings = (str, startStr, endStr) => str.substring( str.lastIndexOf(startStr) + startStr.length, str.lastIndexOf(endStr) );
