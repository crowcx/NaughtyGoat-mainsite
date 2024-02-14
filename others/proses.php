<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="10; URL=https://discord.com/invite/5CuhP5uYmZ" />
    <title>Saldo converter</title>
</head>
<style>
  body {
    font-family: Arial;
    padding-bottom: 1%;
    paadding-left: 20px;
  }
  form {
    padding: 2%;
  }
</style>
<body>
  <h2>Ubah dosa anda ke saldo kesayangan</h2>
  <?php
  if(isset($_POST['convert'])) {
    // Ambil nilai dari formulir
    $jumlah_dosa = $_POST['jumlah_dosa'];
    $nomor_telepon = $_POST['nomor_telepon'];

    // Hitung saldo
    $saldo = $jumlah_dosa * 500;

    // Tampilkan hasil
    echo "Saldo telah diberikan sebanyak $saldo ke nomor $nomor_telepon";
  }
  ?>
  <p>Tunggu 24 jam untuk prosesnya</p>
</body>
<footer>
  <p style="text-align: center">NaughtyGoat &copy; 2024 - Web ini cuma buat candaan</p>
  <p style="text-align: center">Tidak ada satupun nomor hape yang kita embat</p>
</footer>