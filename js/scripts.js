
const names = ['litwick','lampent','chandelure'];

const colors = {
	black: '#000000',
	dark: '#181a28',
	light: '#b2badf',
	white: '#ffffff',
}

window.onload = ()=> {
	let artID = 0;
	let html = '';
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.white}">${art[key]}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.dark}">${changeArt(art[key],artID++)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.dark}">${changeArt(art[key],artID++,colors.dark,colors.white)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.white}">${changeArt(art[key],artID++,colors.white,colors.dark)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.black}">${changeArt(art[key],artID++,-1,-1,0)}</div>`;
	for(let key of names)
		html += `<div class="art" style="background-color:${colors.dark}">${removeEyes(changeArt(art[key],artID++,-1,colors.white),key,5)}</div>`;

	html += `<div class="art square" style="background-color:${colors.white}">${getAll(artID++)}</div>`;
	html += `<div class="art square" style="background-color:${colors.dark}">${getAll(artID++)}</div>`;
	html += `<div class="art square" style="background-color:${colors.dark}">${getAll(artID++,colors.dark,colors.white)}</div>`;
	html += `<div class="art square" style="background-color:${colors.white}">${getAll(artID++,colors.white,colors.dark)}</div>`;
	html += `<div class="art square" style="background-color:${colors.black}">${getAll(artID++,-1,-1,0)}</div>`;
	html += `<div class="art square" style="background-color:${colors.black}">${getAll(artID++,-1,colors.white)}</div>`;

	html += `<div class="art long" style="background-color:${colors.white}">${getAllLong(artID++)}</div>`;
	html += `<div class="art long" style="background-color:${colors.dark}">${getAllLong(artID++)}</div>`;
	html += `<div class="art long" style="background-color:${colors.dark}">${getAllLong(artID++,colors.dark,colors.white)}</div>`;
	html += `<div class="art long" style="background-color:${colors.white}">${getAllLong(artID++,colors.white,colors.dark)}</div>`;
	html += `<div class="art long" style="background-color:${colors.black}">${getAllLong(artID++,-1,-1,0)}</div>`;
	html += `<div class="art long" style="background-color:${colors.black}">${getAllLong(artID++,-1,colors.white)}</div>`;


	u('#art').html(html);
};

const changeNum = (svg, num) => svg.replaceAll('litwick','litwick'+num).replaceAll('lampent','lampent'+num).replaceAll('chandelure','chandelure'+num);
const changeFill = (svg, fill) => fill == -1 ? svg : svg.replaceAll(/fill:#([0-9a-f]{6})/ig, 'fill:'+fill);
const changeStroke = (svg, stroke) => stroke == -1 ? svg : svg.replaceAll(/stroke:#000/g, 'stroke:'+stroke);
const changeStrokeWidth = (svg, width) => width == -1 ? svg : svg.replaceAll(/stroke-width:10px/g, 'stroke-width:'+width+'px');
const changeArt = (svg, num, fill=-1, stroke=-1, width=-1) => changeStrokeWidth(changeStroke(changeFill(changeNum(svg,num),fill),stroke),width);

const removeEyes = (svg,name,num) => svg.replaceAll('</style>','#'+name+num+' .eye{opacity:0;display:none;fill:none;stroke:none;stroke-width:0}</style>');
// const removeEyes = (svg,name,num) => svg.replace(getTextBetweenStrings(svg, '<path class="eye', '/>'),'');

// const getTextBetweenStrings = (str, startStr, endStr) => str.substring( str.lastIndexOf(startStr) + startStr.length, str.lastIndexOf(endStr) );

const removeSVGElement = svg => svg.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.66 686.65">','').replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561.77 824.2">','').replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 796.62 851.94">','').replace('</svg>','');
const getAll = (num, fill=-1, stroke=-1, width=-1)=> '<svg viewbox="0 0 1600 1600"><g transform="translate(400 835)">' + changeArt(removeSVGElement(art.litwick),num,fill,stroke,width) + '</g><g transform="translate(120 80)">' + changeArt(removeSVGElement(art.lampent),num,fill,stroke,width) + '</g><g transform="translate(700 120)">' + changeArt(removeSVGElement(art.chandelure),num,fill,stroke,width) + '</g></svg>';
const getAllLong = (num, fill=-1, stroke=-1, width=-1)=> '<svg viewbox="0 0 2100 1400"><g transform="translate(60 460)">' + changeArt(removeSVGElement(art.litwick),num,fill,stroke,width) + '</g><g transform="translate(620 440)">' + changeArt(removeSVGElement(art.lampent),num,fill,stroke,width) + '</g><g transform="translate(1220 340)">' + changeArt(removeSVGElement(art.chandelure),num,fill,stroke,width) + '</g></svg>';