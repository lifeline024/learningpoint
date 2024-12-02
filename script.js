function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


// Function to show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to toggle the display of project lists
function toggleProjects(projectId) {
    // Close all project lists
    const projectContainers = document.querySelectorAll('.project-container');
    projectContainers.forEach(container => {
        if (container.id !== projectId) {
            container.style.display = 'none';
        }
    });

    // Toggle the selected project list
    const selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.style.display = selectedProject.style.display === 'none' ? 'block' : 'none';
    }
}

// Event listeners for the navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const sectionId = this.getAttribute('href').substring(1); // Get section ID
        showSection(sectionId); // Show the selected section
    });
});

// Show the Home section by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});


