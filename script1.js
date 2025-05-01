var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});


function saveDetails() {
  // Get form values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate input fields
  if (!fullName || !email || !phoneNumber || !subject || !message) {
      alert('Please fill out all fields.');
      return;
  }

  // Prepare the content for the file
  const content = `
      Full Name: ${fullName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Subject: ${subject}
      Message: ${message}
  `;

  // Create a Blob and generate a downloadable link
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element for download
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fullName.replace(/ /g, '_')}_query.txt`;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke the URL object
  URL.revokeObjectURL(url);

  // Clear the form
  document.getElementById('query-form').reset();
}