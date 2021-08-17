//Credit to whoever created the py interpreter
function deadfish(code){
	let VAR=0;
	for(let char of code){
		switch(char){
			case'i':VAR++;break;
			case'd':VAR--;break;
			case's':VAR**=2;break;
			case'o':console.log(VAR);
		}
	}
}

deadfish('iiiiiiso')
