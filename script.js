const insert = (param) => {
  document.form.textarea.value = document.form.textarea.value + param;
};

const equal = () => {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = eval(hasil);
};

const clean = () => {
  document.form.textarea.value = "";
};

const back = () => {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = hasil.substring(0, hasil.length - 1);
};
