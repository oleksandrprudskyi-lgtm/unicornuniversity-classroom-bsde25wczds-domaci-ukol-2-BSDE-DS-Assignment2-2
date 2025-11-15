/** 
* TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
* The main function which calls the application. 
* Prevod jedne èiselne sosutavy z desítkové (DEC) do šestnáctkove (HEX)
* @param {string} inputNumber number that is being converted
* @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
* @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
* @returns {string} containing number converted to output system
*/
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
	if (inputNumberSystem === 10 && outputNumberSystem === 16) {
		let vysledek = desitkovaNaSestnactkova(inputNumber);
		return vysledek;
	} else {
		return "Neplatný èíselný systém";
	}
}
function desitkovaNaSestnactkova(desitkoveCisloString) {
	let N = Number(desitkoveCisloString);
	let hexString = "";
	if (N === 0) {
		return "0";
	}
	const HexZnaky = "0123456789ABCDEF";
	while (N > 0) {
		let remainder = N % 16;
		let currentChar = HexZnaky[remainder];
		hexString = currentChar + hexString;
		N = Math.floor(N / 16);
	}
	return hexString;
}
export function permittedInputSystems() {
	return [10];
}

export function permittedOutputSystems() {
	return [16];
}