function factorialize(num) {
  limit = num;
  for (var i = 1; i < limit; i++) {
  	num = i * num;
  }
  return num;
}

function fac(n){
    return(n<2)?1:fac(n-1)*n;
}


fac1 = factorialize(5);

fac2 = fac(200);

console.log(fac1);
console.log(fac2);

