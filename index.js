export default function arrayEqual(array1, array2) {
	if (array1 === array2) {
		return true;
	}

	const { length } = array1;

	if (length !== array2.length) {
		return false;
	}

	for (let index = 0; index < length; index++) {
		if (array1[index] !== array2[index]) {
			return false;
		}
	}

	return true;
}
