// Typed Intro
var typed = new Typed('.text', {
    strings: ['Web Developer.', '&amp; IoT Developer.'],
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


// Validasi Form
function getData() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    return {
        name,
        phone,
        message
    };
}

function checkPhoneNumber(phone) {
    if (phone && !isNaN(phone)) {
        return true;
    } else {
        return false;
    }
}

function formValidation(props) {
    if (props.name !== "" && props.message !== "" && checkPhoneNumber(props.phone)) {
        return true;
    } else {
        return false;
    }
}

function submitData() {
    const ambilData = getData();
    if (formValidation(ambilData) === true) {
        document.getElementById("warn").innerHTML = `
            <h5 style='background-color: #04AA6D; color: #fff; padding: 10px; border-radius: 10px;'>Message Sent</h5>
        `; 
    } else {
        document.getElementById("warn").innerHTML = `
            <h5 style='background-color: #f87171; color: #fff; padding: 10px; border-radius: 10px;'>Please check your input and submit the form again.</h5>
        `;
    }
}

document.getElementById("send").addEventListener("click", function(event){
    submitData();
    event.preventDefault();
});