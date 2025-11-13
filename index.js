const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak
  const timestamp = Date.now().toString();
  const random = (Math.floor(Math.random() * 100) + 1).toString();
  return timestamp + random;
}

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
  // 4. Tambahkan objek to-do ini ke array `todos`
  // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan
  console.log("\n");
  console.log("--- Input a new to-do item ---");
  const zc_input = prompt("Enter your to-do item: ");

  if (zc_input === null || zc_input.trim() === "") {
    console.log(`"${zc_input}" is not a valid to-do. Please enter some text.`);
  } else {
    todos.push({ id: generateUniqueId(), text: zc_input, isComplete: false });
    console.log(`To-do "${zc_input}" has been added successfully.`);
  }
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
  // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
  // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
  // 6. Tangani kasus jika to-do sudah selesai
  if (todos.length === 0) {
    console.log("Your to-do list is currently empty.");
  } else {
    listTodos();
    const zc_input = prompt("Enter the number of the task to mark as DONE: ");

    if (
      isNaN(Number(zc_input)) ||
      zc_input === null ||
      zc_input === "" ||
      zc_input < 1 ||
      zc_input > todos.length
    ) {
      console.log(
        `"${zc_input}" is not a valid selection. Please enter a number from the list.`
      );
    } else {
      const index = zc_input - 1;
      todos[index].isComplete = true;
      console.log(`To-do "${todos[index].text}" has been marked as DONE.`);
    }
  }
}

function deleteTodo() {
  // TODO: Implementasi logika untuk menghapus to-do
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  // 2. Minta user memasukkan NOMOR to-do yang ingin dihapus
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid
  // 4. Hapus to-do yang dipilih dari array `todos`
  // 5. Beri feedback ke user bahwa to-do berhasil dihapus
  if (todos.length === 0) {
    console.log("Your to-do list is currently empty.");
  } else {
    listTodos();
    const zc_input = prompt(
      "Enter the number of the task you want to DELETE: "
    );

    if (
      isNaN(Number(zc_input)) ||
      zc_input === null ||
      zc_input === "" ||
      zc_input < 1 ||
      zc_input > todos.length
    ) {
      console.log(
        `"${zc_input}" is not a valid selection. Please enter a number from the list.`
      );
    } else {
      const index = zc_input - 1;
      console.log(`To-do "${todos[index].text}" has been deleted.`);
      todos.splice(index, 1);
    }
  }
}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
  // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
  //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
  // 5. Tampilkan garis penutup daftar
  console.log("\n");
  console.log("--- CURRENT TO-DO LIST ---");
  if (todos.length === 0) {
    console.log("You have no to-dos at the moment.");
  } else {
    for (let i = 0; i < todos.length; i++) {
      let list = i + 1 + ". ";
      list += todos[i].isComplete ? "[DONE]" : "[ACTIVE]";
      list += " | " + todos[i].text;
      console.log(list);
    }
  }
  console.log("----------------------------");
}

function runTodoApp() {
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  let running = true;

  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    // 3. Gunakan `switch` statement atau `if/else if` untuk memanggil fungsi yang sesuai
    //    berdasarkan perintah yang dimasukkan user
    // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
    // 5. Tangani input perintah yang tidak valid
    console.log("\n");
    console.log("--------- MAIN MENU ---------");
    console.log("[add]     → Add a new to-do item");
    console.log("[complete]→ Mark a to-do item as completed");
    console.log("[delete]  → Delete a to-do item");
    console.log("[list]    → Show all to-do items");
    console.log("[exit]    → Exit the program");
    console.log("\n");
    const zc_input = prompt("Please enter a command from the menu: ");

    switch (zc_input) {
      case "add":
        addTodo();
        break;
      case "complete":
        markTodoCompleted();
        break;
      case "delete":
        deleteTodo();
        break;
      case "list":
        listTodos();
        break;
      case "exit":
        console.log("Thank you for using the to-do app. Goodbye!");
        break;
      default:
        console.log("Unrecognized command. Please choose one from the menu.");
        break;
    }

    if (zc_input === "exit") {
      break;
    }
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
