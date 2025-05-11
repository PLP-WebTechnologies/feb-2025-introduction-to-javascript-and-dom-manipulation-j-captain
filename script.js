// Dynamic Elements Functionality
let counter = 1;
const texts = [
    "We are one in Christ",
    "Love your neighbor as yourself",
    "Faith without works is dead",
    "The Lord is my shepherd"
];
let textIndex = 0;

document.getElementById('addBtn').addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-card';
    newElement.innerHTML = `
        <h3>New Member ${counter++}</h3>
        <p>Joined: ${new Date().toLocaleDateString()}</p>
        <small>Welcome to our church family!</small>
    `;
    document.getElementById('dynamicElements').appendChild(newElement);
});

document.getElementById('removeBtn').addEventListener('click', () => {
    const elements = document.getElementById('dynamicElements');
    if (elements.children.length > 0) {
        elements.removeChild(elements.lastElementChild);
        counter = Math.max(1, counter - 1);
    }
});

document.getElementById('styleBtn').addEventListener('click', () => {
    const section = document.querySelector('#mainSection');
    section.classList.toggle('style-changed');
});

document.getElementById('textBtn').addEventListener('click', () => {
    const textElement = document.getElementById('changeText');
    textElement.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
    textElement.style.animation = 'textPop 0.5s ease';
    setTimeout(() => textElement.style.animation = '', 500);
});

// Jumuias Functionality
const jumuias = [
    { name: 'St Agatha', info: 'Meeting every Tuesday at 4 PM' },
    { name: 'St Cecilia', info: 'Choir practice on Fridays' },
    { name: 'St Kizito', info: 'Youth group meetings' },
    { name: 'St Mark', info: 'Bible study group' }
];

const jumuiasContainer = document.createElement('div');
jumuiasContainer.className = 'jumuias-section';
jumuiasContainer.innerHTML = `
    <h4>Our Jumuias</h4>
    <div class="jumuias-grid"></div>
`;

document.querySelector('.jumuias').appendChild(jumuiasContainer);

jumuias.forEach(jumuia => {
    const btn = document.createElement('button');
    btn.className = 'jumuia-btn';
    btn.textContent = jumuia.name;
    btn.addEventListener('click', () => {
        alert(jumuia.info);
    });
    document.querySelector('.jumuias-grid').appendChild(btn);
});

// Text animation
const style = document.createElement('style');
style.textContent = `
    @keyframes textPop {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
