// NAVBAR

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// OPERASI
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById("button");
var demo = document.getElementById("demo");
var rumus = document.getElementById("rumus");

button.addEventListener("click", function (e) {
  e.preventDefault();

  var valInp1 = input1.value;
  var valInp2 = input2.value;
  var hasil = 1;
  var hasil2 = 1;
  var hasil3 = 1;
  var ndikurangr = valInp1 - valInp2;
  for (var i = valInp1; i > 0; i--) {
    hasil *= i;
  }
  for (var i = input1.value - input2.value; i > 0; i--) {
    hasil2 *= i;
  }
  for (var i = input2.value; i > 0; i--) {
    hasil3 *= i;
  }
  if (input1.valueAsNumber < input2.valueAsNumber) {
    demo.innerHTML = `Nilai dari <strong> n </strong> harus lebih dari nilai <strong> r </strong>`;
    rumus.innerHTML = `Formula yang dimasukkan tidak tepat!`;
  } else if (input1.valueAsNumber < 0) {
    demo.innerHTML = `Nilai dari <strong> n </strong> tidak boleh <strong> negatif </strong>`;
    rumus.innerHTML = `Formula yang dimasukkan tidak tepat!`;
  } else if (input2.valueAsNumber < 0) {
    demo.innerHTML = `Nilai dari <strong> r </strong> tidak boleh <strong> negatif </strong>`;
    rumus.innerHTML = `Formula yang dimasukkan tidak tepat!`;
  } else {
    demo.innerHTML = `Hasil Kombinasi Dari <strong> C(${valInp1},${valInp2}) </strong> adalah <strong> ${hasil / (hasil2 * hasil3)} </strong>`;
    rumus.innerHTML = `Formula: C(n,r) = n! / (n-r)! r! <br><br>
    In this example we have n = ${input1.value} and r = ${input2.value}. By Putting these values in above formula, we have: <br><br>
    C(n,r) = ? <br><br>
    C(n,r) = C(${input1.value},${input2.value}) <br><br>
    = ${input1.value}! / (${input1.value} - ${input2.value})! ${input2.value}! <br><br>
    = ${input1.value}! / ${ndikurangr}! ${input2.value}! <br><br>
    = ${hasil / (hasil2 * hasil3)}`;
  }
});
