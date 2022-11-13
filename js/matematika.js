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

// AMBIL ELEMEN
const inputE1 = document.getElementById("input");
const kirimE1 = document.getElementById("kirim");
const hasilE1 = document.getElementById("hasil");
const pilihanHari = document.getElementById("pilihan");
var help = document.getElementById("help");
var kotakClose = document.getElementById("kotak-close");
var closeE1 = document.getElementById("close-container");

// NAMA DOSEN
Alpro = "Muhammad Abrori S.Si, M.Kom";
Pancasila = "Hindun Khairotun Nadlifah M.URP.";
Ale = "Arif Munandar M.Sc.";
Geobid = "Pipit Pratiwi Rahayu S.Si";
Kalkulus = "Muhammad Abrori S.Si, M.Kom";
Psi = "Dr. Muhammad Anis Mashduqi Lc.";
Palpro = "Muhammad Abrori S.Si, M.Kom";

// EVENT SAAT DIKLIK
help.addEventListener("click", function () {
  kotakClose.classList.add("display");
});

closeE1.addEventListener("click", function () {
  kotakClose.classList.remove("display");
});

kirimE1.addEventListener("click", function (e) {
  e.preventDefault();

  // KELAS A
  if ((inputE1.value == "A1") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Praktikum Algoritma dan Pemrograman </strong> (07.00 - 08.40) Ruang <strong> Lab Mat A </strong> <br>" + `<strong>Dosen :</strong> ${Palpro}`;
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Pengantar Studi Islam </strong> (13.00 - 14.39) Ruang <strong> 305 </strong> <br>" + `<strong>Dosen :</strong> ${Psi}`;
  } else if ((inputE1.value == "A3") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Kalkulus Diferensial </strong> (15.00 - 17.30) Ruang <strong> 101 </strong> <br>" + `<strong>Dosen :</strong> ${Kalkulus}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Logika Matematika dan Himpunan </strong> (07.00 - 08.39) Ruang <strong> 305 </strong> <br>";
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Pengantar Studi Islam </strong> (10.20 - 12.00) Ruang <strong> 305 </strong> <br>" + `<strong>Dosen :</strong> ${Psi}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "Hari <strong> Rabu </strong> tidak ada kelas!";
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Aljbar Linear Elementer </strong> (09.40 - 12.10) Ruang <strong> 402 </strong> <br>" + `<strong>Dosen :</strong> ${Ale}`;
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Algoritma Pemrograman </strong> (13.00 - 14.39) Ruang <strong> 305 </strong> <br>" + `<strong>Dosen :</strong> ${Alpro}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Geomtri Bidang </strong> (08.40- 10.20) Ruang <strong> 305 </strong> <br>" + `<strong>Dosen :</strong> ${Geobid}`;
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Pancasila </strong> (13.30- 15.10) Ruang <strong> 402 </strong> <br>" + `<strong>Dosen :</strong> ${Pancasila}`;
  }
  // KELAS B
  else if ((inputE1.value == "B1") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Geometri Bidang </strong> (08.41 - 10.19) Ruang <strong> 103 </strong> <br>" + `<strong>Dosen :</strong> ${Geobid}`;
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Praktikum Algoritma dan Pemrograman  </strong> (10.20 - 12.00) Ruang <strong> Lab Mat A </strong> <br>" + `<strong>Dosen :</strong> ${Palpro}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Aljabar Linear Elementer </strong> (13.00 - 15.29) Ruang <strong> 301 </strong> <br>" + `<strong>Dosen :</strong> ${Ale}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "<strong> Pengantar Studi Islam </strong> (07.00 - 08.40) Ruang <strong> 402 </strong> <br>" + `<strong>Dosen :</strong> ${Psi}`;
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "<strong> Pengantar Studi Islam </strong> (13.00 - 16.20) Ruang <strong> 101 </strong> <br>" + `<strong>Dosen :</strong> ${Tptg}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Kalkulus Diferensial </strong> (10.20 - 12.50) Ruang <strong> 301 </strong> <br>" + `<strong>Dosen :</strong> ${Kalkulus}`;
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Pancasila </strong> (14.40 - 16.19) Ruang <strong> 402 </strong> <br>" + `<strong>Dosen :</strong> ${Pancasila}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Logika Matematika dan Himpunan </strong> (07.00 - 09.30) Ruang <strong> 103 </strong> <br>";
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Algoritma dan Pemrograman </strong> (15.10 - 16.50) Ruang <strong> 407 </strong> <br>" + `<strong>Dosen :</strong> ${Alpro}`;
  } else if ((inputE1.value == "B3") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Matematika Diskrit </strong> (13.30- 15.10) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Diskrit}`;
  } else {
    hasilE1.innerHTML = "masukan panggilan yang tepat!";
  }
});
