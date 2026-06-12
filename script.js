function handleSubmit(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}

const menu = document.getElementById("menu");
const body = document.body;
const themeIcon = document.getElementById("themeIcon");

function toggleMenu() {
  menu.classList.toggle("mobile");
  menu.classList.toggle("show");
}

function toggleTheme() {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

document.getElementById("hireMeBtn").addEventListener("click", () => {
  const email = "yourname@gmail.com";
  const subject = "Hiring Inquiry";
  const body = "Hello, I would like to discuss a project with you.";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, "_blank");
});

// Download CV
document.getElementById("downloadCvBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/resume.pdf";
  link.download = "Prashant_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
