// --- DOM Manipulation Functions ---
// --- DOM Manipulation Functions ---
function createHeader() {
    const header = document.getElementById('main-header');
    if (header) {
        // Determine if we are on the home page, projects listing, or a project detail page
        const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('./index.html');
        const isProjectsPage = window.location.pathname.endsWith('./projects.html');
        const isProjectDetailPage = window.location.pathname.includes('projects/');


        const homeLink = isHomePage ? '#' : (isProjectsPage || isProjectDetailPage ? '../index.html' : 'index.html');
        const projectsLink = isProjectsPage ? '#' : (isHomePage ? 'projects.html' : (isProjectDetailPage ? '../projects.html' : 'projects.html'));
        const logoPath = isProjectsPage || isProjectDetailPage ? '../images/logo.svg' : 'images/logo.svg';

        header.innerHTML = `
            <div class="logo">
                <a href="${homeLink}"><img src="${logoPath}" alt="Rakllan Logo"></a>
            </div>
            <nav>
                <ul>
                    <li><a href="${homeLink}"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="${projectsLink}"><i class="fas fa-project-diagram"></i> Projects</a></li>
                </ul>
            </nav>
        `;
    }
}
//Rest of the code.

function createFooter() {
    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.innerHTML = `
            <p>© ${new Date().getFullYear()} Rakllan. All rights reserved.</p>
        `;
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    createFooter();
});
