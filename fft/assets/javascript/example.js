function fft2(X) {
  var N = X.length;
  if (N <= 1) {
    return X;
  }
  var M = N/2;
  var even = [];
  var odd = [];
  even.length = M;
  odd.length = M;
  for (var i = 0; i < M; ++i) {
    even[i] = X[i*2];
    odd[i] = X[i*2+1];
  }
  even = fft2(even);
  odd = fft2(odd);
  var a = -2*math.pi;
  for (var k = 0; k < M; ++k) {
    // t = exp(-2PI*i*k/N) * X_{k+N/2} (in two steps)
    var t = math.exp(math.complex(0, a*k/N));
    t = math.multiply(t, odd[k]);
    X[k] = odd[k] = math.add(even[k], t);
    X[k+M] = even[k] = math.subtract(even[k], t);
  }
  return X;
}
// generate linear space from A to B with S intervals
function linspace(A,B,S) {
  var Y = new Array(0);
  var D = (B-A)/(S-1);
  for (var i = A; i <= B; i+=D) {
    Y.push(i);
  }
  return Y;
}
// perhaps not necessary, but just preventing errors with mixing reals and
// complex numbers
function make_complex(X) {
  for (var i = 0; i < X.length; i++) {
    X[i] = math.complex(X[i],0);
  }
}
function calc_function(T) {
  var X = [];
  X.length = T.length;
  for (var t = 0; t < T.length; t++) {
    X[t] = math.sin(2*math.pi*T[t]);
  }
  return X;
}
var T=linspace(0,1,8);
var X=calc_function(T);
make_complex(X);
var Y=fft2(X);
// get only real part, should have a Dirac spike at sine freq
var Yr=[];
Yr.length = Y.length;
for (var i = 0; i < Y.length; i++) {
  Yr[i] = Y[i].re;
}
console.log(Yr);