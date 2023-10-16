// Typed Intro
var typed = new Typed('.text', {
    strings: ['Web Developer.', '&amp; IoT Enginner.'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Menangani klik pada tautan navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Mengambil ID target
      const targetElement = document.getElementById(targetId); // Mendapatkan elemen target
      if (targetElement) {
        // Menggulir halaman ke elemen target
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth' // Untuk animasi scroll
        });
      }
    });
});
// no 5
function handleGetFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var zipCode = document.getElementById("zip-code").value;
  var status = document.getElementById("status").checked;
  var formData = {
  name: name,
  email: email,
  city: city,
  zipCode: zipCode,
  status: status
  };
  return formData;
}

// Function untuk melakukan validasi zip-code no 7
function isNumber(value) {
  return !isNaN(value);
}

// Function untuk memeriksa apakah checkbox dicentang no 8

function checkboxIsChecked() {
  var checkbox = document.getElementById("status");
  return checkbox.checked;
}

// Function untuk melakukan validasi data form no 9

function validateFormData(formData) {
  if (formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()) {
    return true;
  }else {
    return false;
  }
}
// no 10
function submit() {
  if (validateFormData(handleGetFormData()) == false) {
    document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").textContent = "";
  }
}

// Event listener untuk menangani submit form
document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
