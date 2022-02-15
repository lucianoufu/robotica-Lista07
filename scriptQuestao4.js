function translacaoFixa(translacaoX, translacaoY, translacaoZ){
	const coordenadaX = parseInt(document.getElementById('cordX').value);
	const coordenadaY = parseInt(document.getElementById('cordY').value);
	const coordenadaZ = parseInt(document.getElementById('cordZ').value);
	if(verificaCoordenadas(coordenadaX, coordenadaY, coordenadaZ)){
		const xTransladado = realizaTranslacao(parseInt(coordenadaX), parseInt(translacaoX));
		const yTransladado = realizaTranslacao(parseInt(coordenadaY), parseInt(translacaoY));
		const zTransladado = realizaTranslacao(parseInt(coordenadaZ), parseInt(translacaoZ));
		console.log({'t': [[1, 0, 0, 'tx'], [0, 1, 0, 'ty'], [0, 0, 1, 'tz'], [0, 0, 0, 1]]});
		console.log({'p': ['x', 'y', 'z', 1]});
		console.log({'Resultado': [`x + tx = ${xTransladado}`, `y + ty = ${yTransladado}`, `z + tz = ${zTransladado}`]});
		gerarGrafico(coordenadaX, coordenadaY, coordenadaZ, xTransladado, yTransladado, zTransladado);
	}
	else{
		window.alert('As cooordenadas X, Y e Z devem ser preenchidas!');
	}
}

function translacaoPontoFixo(){
	const translacaoX1 = parseInt(document.getElementById('transX1').value);
	const translacaoY1 = parseInt(document.getElementById('transY1').value);
	const translacaoZ1 = parseInt(document.getElementById('transZ1').value);
	const translacaoX2 = parseInt(document.getElementById('transX2').value);
	const translacaoY2 = parseInt(document.getElementById('transY2').value);
	const translacaoZ2 = parseInt(document.getElementById('transZ2').value);

	if(verificaCoordenadas(translacaoX1, translacaoY1, translacaoZ1) && verificaCoordenadas(translacaoX2, translacaoY2, translacaoZ2)){
		const xTransladado = + realizaTranslacao(translacaoX2, realizaTranslacao(translacaoX1, 3));
		const yTransladado = + realizaTranslacao(translacaoY2, realizaTranslacao(translacaoY1, 4));
		const zTransladado = + realizaTranslacao(translacaoZ2, realizaTranslacao(translacaoZ1, 7));

		//Matriz de translação
		console.log({'T0': [[1, 0, 0, 'x'], [0, 1, 0, 'y'], [0, 0, 1, 'z'], [0, 0, 0, 1]]});
		console.log({'T1': [[1, 0, 0, 'x1'], [0, 1, 0, 'y1'], [0, 0, 1, 'z1'], [0, 0, 0, 1]]});
		console.log({'Resultado T0 * T1 = T1 * T0': [[1, 0, 0, 'x1 + X2'], [0, 1, 0, 'y1 + Y2'], [0, 0, 1, 'z1 + Z2'], [0, 0, 0, 1]]});
		console.log('Realização da translação: [T0*T1] * P');
		console.log({'T0 * T1': [[1, 0, 0, translacaoX1.toString() + ' + ' + translacaoX2.toString()], [0, 1, 0, translacaoY1.toString() + ' + ' + translacaoY2.toString()], [0, 0, 1, translacaoZ1.toString() + ' + ' + translacaoZ2.toString()], [0, 0, 0, 1]]});
		console.log({'P': [3, 4, 7]});
		console.log({'Resultado': [xTransladado, yTransladado, zTransladado]});
		gerarGrafico(3, 4 , 7, xTransladado, yTransladado, zTransladado);
	}
}

function rotacaoEixoZ(){
	const anguloGraus = parseInt(document.getElementById('angZ').value);
	const anguloRad = (anguloGraus * Math.PI)/180;
	const x = (4 * Math.cos(anguloRad)) - (5 * Math.sin(anguloRad));
	const y = (4 * Math.sin(anguloRad)) + (5 * Math.cos(anguloRad));
	const z = 6;

	//Matriz de translação
	console.log({'Rotação' : [['cos()', '-sen()', 0, 0], ['sen()', 'cos()', 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]});
	console.log({'Ponto': ['x', 'y', 'z', 1]});
	console.log({'Resultado': ['xcos() - ysen()', 'xcos() + ycos()', 'z', 1]});
	console.log({'Resultado' : x, y, z})
	gerarGrafico(4, 5, 6, x, y, z);
}

function RotacaoSucR1R2(){
	var angulo1Graus = parseInt(document.getElementById('angZ1').value);
	var angulo2Graus = parseInt(document.getElementById('angZ2').value);
	var angulo1Rad = (angulo1Graus * Math.PI)/180;
	var angulo2Rad = (angulo2Graus * Math.PI)/180;

	var xRotacionado = 6*(Math.cos(angulo1Rad) * Math.cos(angulo2Rad) - Math.sin(angulo1Rad) * Math.sin(angulo2Rad)) + 6*(-Math.cos(angulo1Rad) * Math.sin(angulo2Rad) - Math.sin(angulo1Rad) * Math.cos(angulo2Rad));
	var yRotacionado = 6*(Math.sin(angulo1Rad) * Math.cos(angulo2Rad) + Math.cos(angulo1Rad) * Math.sin(angulo2Rad)) + 6*(-Math.sin(angulo1Rad) * Math.sin(angulo2Rad) + Math.cos(angulo1Rad) * Math.cos(angulo2Rad));

	//Matriz de translação
	console.log({'R1R2': [['cos(R1)*cos(R2) - sen(R1)*sen(R2)', '-cos(R1)*sen(R2) - sen(R1)*cos(R2)', 0, 0], ['sen(R1)*cos(R2) + cos(R1)*sen(R2)', '-sen(R1)*sen(R2) + cos(R1)*cos(R2)', 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]});
	console.log({'P': [6, 6, 8, 1]});
	console.log({'Resultado: ': [xRotacionado, yRotacionado, 8]});
	gerarGrafico(6, 6, 8, xRotacionado, parseInt(yRotacionado), 8);
}

function RotacaoSucR2R1(){
	var angulo1Graus = parseInt(document.getElementById('angZ1').value);
	var angulo2Graus = parseInt(document.getElementById('angZ2').value);
	var angulo1Rad = (angulo1Graus * Math.PI)/180;
	var angulo2Rad = (angulo2Graus * Math.PI)/180;

	var xRotacionado = 6*(Math.cos(angulo2Rad) * Math.cos(angulo1Rad) - Math.sin(angulo2Rad) * Math.sin(angulo1Rad)) + 6*(-Math.cos(angulo2Rad) * Math.sin(angulo1Rad) - Math.sin(angulo2Rad) * Math.cos(angulo1Rad));
	var yRotacionado = 6*(Math.sin(angulo2Rad) * Math.cos(angulo1Rad) + Math.cos(angulo2Rad) * Math.sin(angulo1Rad)) + 6*(-Math.sin(angulo2Rad) * Math.sin(angulo1Rad) + Math.cos(angulo2Rad) * Math.cos(angulo1Rad));

	//Matriz de translação
	console.log({'R2R1': [['cos(R2)*cos(R1) - sen(R2)*sen(R1)', '-cos(R2)*sen(R1) - sen(R2)*cos(R1)', 0, 0], ['sen(R2)*cos(R1) + cos(R2)*sen(R1)', '-sen(R2)*sen(R1) + cos(R2)*cos(R1)', 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]});
	console.log({'P': [6, 6, 8, 1]});
	console.log({'Resultado: ': [xRotacionado, yRotacionado, 8, 1]});
	gerarGrafico(6, 6, 8, xRotacionado, parseInt(yRotacionado), 8);
}

function translacaoRotacaoSucRT(){
	//rotação * translação
	const translacaoX1 = parseInt(document.getElementById('transX1').value);
	const translacaoY1 = parseInt(document.getElementById('transY1').value);
	const translacaoZ1 = parseInt(document.getElementById('transZ1').value);
	const anguloGraus = parseInt(document.getElementById('angZ').value);

	if(verificaCoordenadas(translacaoX1, translacaoY1, translacaoZ1) && verificaAngulo(anguloGraus)){
		const anguloRad = (anguloGraus * Math.PI)/180;

		//Matriz de translação
		console.log({'t': [[1, 0, 0, 'x'], [0, 1, 0, 'y'], [0, 0, 1, 'z'], [0, 0, 0, 1]]});
		console.log({'r': [['cos()', '-sen()', 0, 0], ['sen()', 'cos()', 0, 1], [0, 0, 1, 0], [0, 0, 0, 1]]});
		console.log({'rt': [['cos()', 0, 0, 0], [0, 'cos()', 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]});
		console.log({'p': ['x', 'y', 'z', 1]});
		console.log({'Resultado': ['xcos()', 'ycos()', 'z', 1]});
		console.log({'Resultado': [4 * Math.cos(anguloRad), 5 * Math.cos(anguloRad), 7]});

		gerarGrafico(4, 5, 7, 4 * Math.cos(anguloRad), 5 * Math.cos(anguloRad), 7);
	}
	else{
		document.alert('O ângulo e a translação devem ser informados!');
	}
}

function translacaoRotacaoSucTR(){
	//rotação * translação
	const translacaoX1 = parseInt(document.getElementById('transX1').value);
	const translacaoY1 = parseInt(document.getElementById('transY1').value);
	const translacaoZ1 = parseInt(document.getElementById('transZ1').value);
	const anguloGraus = parseInt(document.getElementById('angZ').value);

	if(verificaCoordenadas(translacaoX1, translacaoY1, translacaoZ1) && verificaAngulo(anguloGraus)){
		const anguloRad = (anguloGraus * Math.PI)/180;
		console.log(anguloRad);
		console.log(Math.cos(anguloRad));

		//Matriz de translação
		console.log({'t': [[1, 0, 0, 'x'], [0, 1, 0, 'y'], [0, 0, 1, 'z'], [0, 0, 0, 1]]});
		console.log({'r': [['cos()', '-sen()', 0, 0], ['sen()', 'cos()', 0, 1], [0, 0, 1, 0], [0, 0, 0, 1]]});
		console.log({'tr': [['cos()', '-sen()', 0, 0], ['sen()', 'cos()', 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]});
		console.log({'p': ['x', 'y', 'z', 1]});
		console.log({'Resultado': ['xcos() - ysen()', 'ysen() + ycos()', 'z', 1]});
		console.log({'Resultado': [4 * Math.cos(anguloRad) - 5 * Math.sin(anguloRad), 5 * Math.sin(anguloRad) + 5 * Math.cos(anguloRad), 7]});

		gerarGrafico(4, 5, 7, 4 * Math.cos(anguloRad) - 5 * Math.sin(anguloRad), 5 * Math.sin(anguloRad) + 5 * Math.cos(anguloRad), 7);
	}
	else{
		document.alert('O ângulo e a translação devem ser informados!');
	}
}

function realizaTranslacao(coordenada, translacao){
	const coordenadaFinal = coordenada + translacao;
	return coordenadaFinal;
}

function verificaAngulo(angulo){
	if(angulo !== ''){
		return true;
	}
	else{
		return false;
	}
}

function verificaCoordenadas(x, y, z){
	if(x !== '' && y !== '' && z !== ''){
		return true;
	}
	else{
		return false;
	}

}

function gerarGrafico(coordenadaX, coordenadaY, coordenadaZ, coordenadaX1, coordenadaY1, coordenadaZ1){

	var trace1 = {
		//x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
		x: [coordenadaX1], y: [coordenadaY1], z: [coordenadaZ1],
		mode: 'markers',
		marker: {
			color: 'rgb(255, 128, 0)',
			size: 12,
			symbol: 'circle',
			line: {
			color: 'rgb(255, 128, 0)',
			width: 1},
			opacity: 0.8},
		type: 'scatter3d'};

	var data = [trace2];
	var layout = {margin: {
		l: 0,
		r: 0,
		b: 0,
		t: 0
	}};
	
    var trace2 = {
    	//x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
        x: [coordenadaX], y: [coordenadaY], z: [coordenadaZ],
    	mode: 'markers',
    	marker: {
    		color: 'rgb(0, 46, 41)',
    		size: 12,
    		symbol: 'circle',
    		line: {
    		color: 'rgb(0, 46, 41)',
    		width: 1},
    		opacity: 0.8},
    	type: 'scatter3d'};

    var data = [trace1, trace2];
    var layout = {margin: {
    	l: 0,
    	r: 0,
    	b: 0,
    	t: 0
    }};
    Plotly.newPlot('myChart', data, layout);
}