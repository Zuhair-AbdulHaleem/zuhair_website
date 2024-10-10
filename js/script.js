// Skills

const skills = [
    { name: "Python", icon: "<i class='fa-brands fa-python'></i>", level: "Advanced", description: "Skilled In Data Analysis, Visualization", projects: ["Movie Recommender System", "School Donation Analysis"] },
    // { name: "JavaScript", icon: '<i class="fa-brands fa-js"></i>', level: "Advanced", description: "Experienced in building complex UIs with React, Redux, and related ecosystems.", projects: ["E-commerce Platform", "Social Media Dashboard"] },
    { name: "PyTorch", icon: '<i class="fa-solid fa-fire"></i>', level: "Advanced", description: "Skilled in Python for data analysis, scripting, and backend development.", projects: ["Data Visualization Tool", "Automation Scripts"] },
    { name: "Pinecone", icon: '<i class="fa-solid fa-vector-square"></i>', level: "Advanced", description: "Familiar with core AWS services for scalable and reliable cloud solutions.", projects: ["Serverless API", "Cloud-based Data Lake"] },
    { name: "Next.js", icon: '<i class="fa-brands fa-react"></i>', level: "Advanced", description: "Exploring machine learning techniques with a focus on NLP and computer vision.", projects: ["Sentiment Analysis Model", "Image Classification App"] },
    //{ name: "Express.js", icon: '<i class="fa-brands fa-node-js"></i>', level: "Intermediate", description: "Experienced in designing and implementing GraphQL APIs for efficient data fetching.", projects: ["Real-time Chat Application", "Content Management System"] },
    { name: "Langchain", icon: '<i class="fa-solid fa-chain"></i>', level: "Intermediate", description: "Experienced in designing and implementing GraphQL APIs for efficient data fetching.", projects: ["Real-time Chat Application", "Content Management System"] },
    //{ name: "Firebase", icon: '<i class="fa-solid fa-cloud"></i>', level: "Intermediate", description: "Passionate about creating intuitive and aesthetically pleasing user interfaces.", projects: ["Mobile App Redesign", "Design System Creation"] },
    { name: "Hugging Face", icon: '<i class="fa-solid fa-smile"></i>', level: "Intermediate", description: "Experienced in designing and implementing GraphQL APIs for efficient data fetching.", projects: ["Real-time Chat Application", "Content Management System"] },
    { name: "AWS", icon: '<i class="fa-solid fa-cloud"></i>', level: "Intermediate", description: "Experienced in designing and implementing GraphQL APIs for efficient data fetching.", projects: ["Real-time Chat Application", "Content Management System"] },
    { name: "Tensorflow", icon: '<i class="fa-solid fa-cogs"></i>', level: "Intermediate", description: "Experienced in designing and implementing GraphQL APIs for efficient data fetching.", projects: ["Real-time Chat Application", "Content Management System"] },
    { name: "Firebase", icon: '<i class="fa-solid fa-database"></i>', level: "Intermediate", description: "Experienced in designing and implementing GraphQL APIs for efficient data fetching.", projects: ["Real-time Chat Application", "Content Management System"] },
 
];

function createHexagon(skill) {
    const hexagon = document.createElement('div');
    hexagon.className = 'hexagon';
    hexagon.innerHTML = `
        <div class="hexagon-content">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
        </div>
    `;
   // hexagon.addEventListener('click', () => showSkillDetail(skill));
    return hexagon;
}

function showSkillDetail(skill) {
    const detailElement = document.getElementById('skill-detail');
    document.getElementById('detail-name').textContent = skill.name;
    document.getElementById('detail-description').textContent = skill.description;
    const projectsHtml = skill.projects.map(project => `<li>${project}</li>`).join('');
    document.getElementById('detail-projects').innerHTML = `<h3>Projects:</h3><ul>${projectsHtml}</ul>`;
    detailElement.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeSkillDetail() {
    document.getElementById('skill-detail').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function populateSkills() {
    const grid = document.getElementById('hexagon-grid');
    skills.forEach(skill => {
        grid.appendChild(createHexagon(skill));
    });
}

document.addEventListener('DOMContentLoaded', populateSkills);