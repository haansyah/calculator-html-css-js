// Insert angka ke textview
const insert = (param) => {
  document.form.textarea.value = document.form.textarea.value + param;
};

// Fungsi Hitung
const equal = () => {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = eval(hasil);
};

const insertSin = (sin) => {
  document.form.textarea.value = sin + "( " + sin + " )";
};

// Clean
const clean = () => {
  document.form.textarea.value = "";
};

// Delete
const back = () => {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = hasil.substring(0, hasil.length - 1);
};
