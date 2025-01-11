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
document.querySelector('nav a').classList.add('active');
