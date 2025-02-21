// --- Project Data ---
const projectsData = [
    {
        id: 1,
        title: 'Aesthetic Pomodoro Timer',
        description: 'A customizable Pomodoro timer built with JavaScript, HTML, and CSS.',
        imageUrl: 'images/pomodoro-timer.png', // Use your image
        projectUrl: 'projects/pomodoro-timer.html',
        tags: ['personal', 'public', 'javascript', 'html', 'css'],
    },
    // Add more projects here in the same format
];

// --- DOM Manipulation for Projects Page ---

function createProjectsSection() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    let projectsHTML = '';
    for (const project of projectsData) {
        projectsHTML += `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="${project.title}" />
                <div class="project-info">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="buttons">
                        ${project.projectUrl ? `<a href="${project.projectUrl}">Explore</a>` : ''}
                    </div>
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="tag ${tag.toLowerCase()}">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    projectsGrid.innerHTML = projectsHTML;
}
// --- Initialization (for projects.html) ---
document.addEventListener('DOMContentLoaded', () => {
    createProjectsSection();
});