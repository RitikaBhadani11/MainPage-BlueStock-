// Function to handle active link and show/hide sections
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        e.target.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.style.display = 'none');

        // Show the clicked section
        const sectionId = e.target.getAttribute('href').substring(1); // Remove the "#" to get the section ID
        document.getElementById(sectionId).style.display = 'block';
    });
});

// Initialize by showing the first section (Overview) and setting the active link
document.getElementById('overview').style.display = 'block';

// Handling button click events
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        alert(`You clicked: ${e.target.textContent}`);
    });
});

// Toggle Hidden Content function
document.querySelector('.toggle-announcements').addEventListener('click', function() {
  const hiddenAnnouncements = document.querySelectorAll('.announcement.hidden');
  hiddenAnnouncements.forEach(function(item) {
      item.classList.toggle('hidden');
  });

  const toggleButton = document.querySelector('.toggle-announcements');
  if (toggleButton.innerText === '▼') {
      toggleButton.innerText = '▲';
  } else {
      toggleButton.innerText = '▼';
  }
});

// Toggle Annual Reports
document.querySelector('.toggle-annual-reports').addEventListener('click', function() {
  const hiddenReports = document.querySelectorAll('.hidden-year');
  hiddenReports.forEach(function(item) {
      item.classList.toggle('hidden');
  });

  const toggleReports = document.querySelector('.toggle-annual-reports');
  if (toggleReports.innerText === '▼') {
      toggleReports.innerText = '▲';
  } else {
      toggleReports.innerText = '▼';
  }
});