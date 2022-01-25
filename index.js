function random (min, max) {
	if (max > min) {
  	randomNumber = Math.round(Math.random() * (Math.abs(max - min) + 1) + min);
  } else if (max < min) {
  	randomNumber = Math.round(Math.random() * (Math.abs(max - min) + 1) + max);
  } else {
  	randomNumber = Math.random() + max;
  }
  // eslint-disable-next-line
  console.log(randomNumber);
}

random(7, 13);
