window.onload = function(){
	var btn = document.getElementById("btn");
	btn.onclick  = function(){
		n1 = parseFloat(document.getElementById("n1").value);
		n2 = parseFloat(document.getElementById("n2").value);
		opr = document.getElementById("opr").value;
		console.log(n1+" "+opr+" "+n2);
		switch(opr){
			case 'add':
			a = n1 + n2;
				break;
			case 'sub':
			a = n1 - n2;
				break;
			case 'mult':
			a = n1 * n2;
				break;
			case 'div':
			a = n1 / n2;
				break;
		}
		document.getElementById("ans").innerHTML = a;
	}
}