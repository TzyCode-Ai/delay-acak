const readline = require("readline");

// Fungsi delay acak
function getRandomDelay(min = 15000, max = 25000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi sleep
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Inisialisasi readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk menampilkan header
function showHeader() {
  console.clear();
  console.log("=======================================");
  console.log("🚀 BOT AKSI SUPER ⚡");
  console.log("=======================================");
  console.log("🔥 Bot sudah siap! Tekan ENTER untuk memulai...");
  console.log("Tekan Ctrl+C kapan saja untuk keluar.\n");
}

// Fungsi untuk menampilkan status
function showStatus(delay) {
  console.log(`⏳ Menunggu ${(delay / 1000).toFixed(1)} detik...`);
}

// Fungsi untuk menampilkan aksi
function showAction() {
  console.log("\n🔥 AKSI DIEKSEKUSI!");
  console.log("✅ Selesai! Tekan ENTER untuk aksi berikutnya...\n");
}

// Main flow
showHeader();

rl.on("line", async () => {
  const delay = getRandomDelay();
  showStatus(delay);

  // Animasi loading sederhana
  const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let i = 0;
  const loading = setInterval(() => {
    process.stdout.write(`\r${spinner[i++ % spinner.length]} Menunggu...`);
  }, 100);

  await sleep(delay);
  clearInterval(loading);
  process.stdout.write("\r"); // Bersihkan baris loading

  showAction();
});

// Handle penutupan
rl.on("close", () => {
  console.log("\n🛑 Bot dimatikan. Sampai jumpa!");
  process.exit(0);
});