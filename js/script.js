function validateForm() {
  // Get the values from the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // 1. Check if Name is empty
  if (name.trim() === "") {
    alert("Name must be filled out.");
    return false; // Prevents the form from submitting
  }

  // 2. Check if Email is valid
  // A simple regex for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Prevents the form from submitting
  }

  // 3. Check if Message is empty
  if (message.trim() === "") {
    alert("Message must be filled out.");
    return false; // Prevents the form from submitting
  }

  // If all validation passes
  alert("Thank you for your message! (Form submission is disabled for this demo)");
  return false; // This will prevent the form from actually submitting to a new page.
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'fa fa-sun-o';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fa fa-moon-o';
        localStorage.setItem('theme', 'light');
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.className = 'fa fa-sun-o';
    } else {
        if (themeIcon) themeIcon.className = 'fa fa-moon-o';
    }
  }