var peribahasa = [
  "Harimau mati meninggalkan belang, gajah mati meninggalkan gading, orang mati meninggalkan nama.",
  "Daripada hujan emas di negeri orang, lebih baik hujan batu di negeri sendiri.",
  "Angan menerawang langit: mencita-citakan segala sesuatu setinggi-tingginya",
  "Membagi sama adil, memotong sama panjang: jika membagi maupun memutuskan sesuatu hendaknya harus adil dan tidak berat sebelah",
  "Memikul di bahu, menjunjung di kepala: mengerjakan sesuatu menurut aturan",
  "Siapa menabur angin, ia menuai badai: barang siapa berbuat, dialah yang akan mendapat akibatnya",
  "Jangan sangat pemilih, bisa-bisa mendapatkan buku buluh: jangan terlalu memilih, bisa-bisa mendapatkan sesuatu yang tidak disukai",
  "Karena nila setitik, rusak susu sebelangga",
  "Sedikit Demi sedikit, lama-lama akan menjadi bukit,",
  "Bagaikan bumi dan langit,",
  "Bagai pinang dibelah dua,",
];
var posted = [
  "Posted:Thu Jan 01 2004 01:45:52 GMT+0700 (SE Asia . Standart Time)",
];

// scrollbar
$(document).ready(function () {
  $("#scrollbar").mCustomScrollbar({
    theme: "inset-3-dark",
  });
});

// endScrollbar

// main content
$(document).click(function () {
  var randomQuotes = Math.floor(Math.random() * peribahasa.length);

  $(".content-body").append(`
    <h1>Peribahasa hari ini :</h1>
    <div>${peribahasa[randomQuotes]}</div><br/>
    <div>${posted}</div>
    <hr/>
  `);
});
// end main content
