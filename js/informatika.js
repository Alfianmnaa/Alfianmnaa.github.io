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
Diskrit = "Muhammad Galih Wonoseto M.T.";
Pkn = "Eulis Yulianti Faridah M.Ds";
Pkn1 = "Hindun Khairotun Nadlifah M.URP.";
Pancasila = "Eulis Yulianti Faridah M.Ds";
Psn = "Sri Istiyani Uswatun Chasanah M.Si.";
Statistik = "Dr. Epha Diana Supandi S.Si, M.Sc";
Tptg = "Nia Maharani Raharja M.Eng.";
Hadis = "Siti Khodijah Nurul Aula M.Ag.";
Quran = "Drs. Mujahid M.Ag.";

// EVENT SAAT DIKLIK
help.addEventListener("click", function () {
  kotakClose.classList.add("display");
});

closeE1.addEventListener("click", function () {
  kotakClose.classList.remove("display");
});

kirimE1.addEventListener("click", function (e) {
  e.preventDefault();

  // KELAS B
  if ((inputE1.value == "B1") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Matematika Diskrit </strong> (08.40 - 10.20) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Diskrit}`;
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Teori Graf </strong> (13.00 - 14.40) Ruang <strong> 402 </strong> <br>" + `<strong>Dosen :</strong> ${Tptg}`;
  } else if ((inputE1.value == "B3") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Statistika dan Probabilitas </strong> (14.40 - 16.20) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Statistik}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "<strong> Pemodelan dan Simulasi Numerik </strong> (08.40 - 10.20) Ruang <strong> 103 </strong> <br>" + `<strong>Dosen :</strong> ${Psn}`;
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "<strong> Teori Graf </strong> (13.00 - 14.40) Ruang <strong> 403 </strong> <br>" + `<strong>Dosen :</strong> ${Tptg}`;
  } else if ((inputE1.value == "B3") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "<strong> Ulum Hadis </strong> (14.40 - 16.20) Ruang <strong> 104 </strong> <br>" + `<strong>Dosen :</strong> ${Hadis}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Matematika Diskrit </strong> (07.00 - 08.40) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Diskrit}`;
  } else if ((inputE1.value == "B2") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Kewarganegaraan </strong> (09.40 - 11.20) Ruang <strong> 305 </strong> <br>" + `<strong>Dosen :</strong> ${Pkn}`;
  } else if ((inputE1.value == "B3") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Ulum Al-Qur'an </strong> (13.00 - 14.40) Ruang <strong> 304 </strong> <br>" + `<strong>Dosen :</strong> ${Quran}`;
  } else if ((inputE1.value == "B1") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Pancasila </strong> (07.00 - 09.40) Ruang <strong> 401 </strong> <br>" + `<strong>Dosen :</strong> ${Pancasila}`;
  }
  // KELAS A
  else if ((inputE1.value == "A1") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Kewarganegaraan </strong> (07.00 - 08.39) Ruang <strong> 403 </strong> <br>" + `<strong>Dosen :</strong> ${Pkn1}`;
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Pancasila </strong> (10.20 - 11.59) Ruang <strong> 407 </strong> <br>" + `<strong>Dosen :</strong> ${Pancasila}`;
  } else if ((inputE1.value == "A3") & (pilihanHari.value == "Senin")) {
    hasilE1.innerHTML = "<strong> Ulum Al-Qur'an </strong> (13.00 - 14.39) Ruang <strong> 403 </strong> <br>" + `<strong>Dosen :</strong> ${Quran}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Pemodelan dan Simulasi Numerik </strong> (07.00 - 08.39) Ruang <strong> 103 </strong> <br>" + `<strong>Dosen :</strong> ${Psn}`;
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Selasa")) {
    hasilE1.innerHTML = "<strong> Teori graf </strong> (10.20 - 12.00) Ruang <strong> 403 </strong> <br>" + `<strong>Dosen :</strong> ${Tptg}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Rabu")) {
    hasilE1.innerHTML = "<strong> Ulum Hadis </strong> (07.00 - 08.39) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Hadis}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Kamis")) {
    hasilE1.innerHTML = "<strong> Matematika Diskrit </strong> (10.20 - 12.00) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Diskrit}`;
  } else if ((inputE1.value == "A1") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Statistika dan Probabilitas </strong> (07.00 - 08.39) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Statistik}`;
  } else if ((inputE1.value == "A2") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Teori Graf </strong> (10.20 - 12.00) Ruang <strong> 403 </strong> <br>" + `<strong>Dosen :</strong> ${Tptg}`;
  } else if ((inputE1.value == "A3") & (pilihanHari.value == "Jumat")) {
    hasilE1.innerHTML = "<strong> Matematika Diskrit </strong> (13.30- 15.10) Ruang <strong> 404 </strong> <br>" + `<strong>Dosen :</strong> ${Diskrit}`;
  } else {
    hasilE1.innerHTML = "masukan panggilan yang tepat!";
  }
});
