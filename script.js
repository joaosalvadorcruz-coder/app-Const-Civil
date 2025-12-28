// Navigation
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Tab Switching
function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    const selectedContent = document.getElementById(`${tabName}-content`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

function switchDesignTab(tabName) {
    // Hide all design tab contents
    document.querySelectorAll('.design-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.design-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    const selectedContent = document.getElementById(`${tabName}-content`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Terrain Analysis
function startTerrainAnalysis() {
    const resultsDiv = document.getElementById('terrainResults');
    resultsDiv.innerHTML = `
        <h3>Analisando Terreno...</h3>
        <div class="result-placeholder">
            <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; border: 3px solid var(--dark-border); border-top-color: var(--primary-500); border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <p>Processando análise...</p>
        </div>
    `;

    // Simulate analysis
    setTimeout(() => {
        displayTerrainResults();
    }, 2000);
}

function displayTerrainResults() {
    const resultsDiv = document.getElementById('terrainResults');
    resultsDiv.innerHTML = `
        <h3>Resultado da Análise</h3>
        
        <div class="result-item">
            <h4>Qualidade do Solo</h4>
            <div class="result-value good">Excelente (9.2/10)</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">Solo argiloso, boa drenagem, capacidade de carga adequada</p>
        </div>
        
        <div class="result-item">
            <h4>Riscos Ambientais</h4>
            <div class="result-value good">Baixo Risco</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">Sem riscos de enchentes ou deslizamentos detectados</p>
        </div>
        
        <div class="result-item">
            <h4>Localização</h4>
            <div class="result-value good">Muito Boa</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">
                ✓ Acesso a ruas pavimentadas<br>
                ✓ Proximidade de serviços (500m)<br>
                ✓ Zona residencial
            </p>
        </div>
        
        <div class="result-item">
            <h4>Ameaças Climáticas</h4>
            <div class="result-value warning">Moderado</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">Ventos fortes ocasionais no verão</p>
        </div>
        
        <div class="result-item">
            <h4>Recomendação</h4>
            <p style="color: var(--success-500); font-weight: 600; margin-bottom: 0.5rem;">✓ APROVADO PARA CONSTRUÇÃO</p>
            <p style="color: var(--gray-400); font-size: 0.875rem;">
                Terreno ideal para construção residencial de até 3 pavimentos. 
                Fundação recomendada: Sapata corrida.
            </p>
        </div>
        
        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="showProfessionalSuggestions()">
            Ver Profissionais Recomendados
        </button>
    `;
}

// Building Analysis
function startBuildingAnalysis() {
    const resultsDiv = document.getElementById('buildingResults');
    resultsDiv.innerHTML = `
        <h3>Analisando Construção...</h3>
        <div class="result-placeholder">
            <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; border: 3px solid var(--dark-border); border-top-color: var(--primary-500); border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <p>Processando análise...</p>
        </div>
    `;

    // Simulate analysis
    setTimeout(() => {
        displayBuildingResults();
    }, 2500);
}

function displayBuildingResults() {
    const resultsDiv = document.getElementById('buildingResults');
    resultsDiv.innerHTML = `
        <h3>Resultado da Análise</h3>
        
        <div class="result-item">
            <h4>Estado Estrutural</h4>
            <div class="result-value warning">Atenção Necessária</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">Rachaduras detectadas em 3 paredes</p>
        </div>
        
        <div class="result-item">
            <h4>Tempo de Vida da Obra</h4>
            <div class="result-value good">~8 anos</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">Construção relativamente nova</p>
        </div>
        
        <div class="result-item">
            <h4>Qualidade dos Materiais</h4>
            <div class="result-value warning">Média</div>
            <p style="color: var(--gray-400); font-size: 0.875rem;">
                ⚠ Algumas áreas com materiais de qualidade inferior<br>
                ✓ Estrutura principal adequada
            </p>
        </div>
        
        <div class="result-item">
            <h4>Principais Problemas Detectados</h4>
            <ul style="color: var(--gray-400); font-size: 0.875rem; margin-top: 0.5rem; padding-left: 1.5rem;">
                <li>Rachadura estrutural na parede oeste (prioridade alta)</li>
                <li>Infiltração no teto do banheiro</li>
                <li>Reboco solto em área externa</li>
                <li>Piso desnivelado na sala</li>
            </ul>
        </div>
        
        <div class="result-item">
            <h4>Soluções Recomendadas</h4>
            <div style="background: var(--dark-bg); border-radius: var(--radius-md); padding: 1rem; margin-top: 0.5rem;">
                <p style="color: var(--primary-500); font-weight: 600; margin-bottom: 0.5rem;">1. Reparo Estrutural (Urgente)</p>
                <p style="color: var(--gray-400); font-size: 0.875rem; margin-bottom: 1rem;">
                    Reforço das rachaduras estruturais com graute epóxi e instalação de tirantes
                </p>
                
                <p style="color: var(--secondary-500); font-weight: 600; margin-bottom: 0.5rem;">2. Impermeabilização</p>
                <p style="color: var(--gray-400); font-size: 0.875rem; margin-bottom: 1rem;">
                    Aplicação de manta asfáltica no teto do banheiro
                </p>
                
                <p style="color: var(--success-500); font-weight: 600; margin-bottom: 0.5rem;">3. Acabamentos</p>
                <p style="color: var(--gray-400); font-size: 0.875rem;">
                    Refazer reboco e nivelar piso
                </p>
            </div>
        </div>
        
        <div class="result-item">
            <h4>Custo Estimado dos Reparos</h4>
            <div class="result-value good">R$ 15.000 - R$ 22.000</div>
        </div>
        
        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="showRepairProfessionals()">
            Encontrar Profissionais para Reparo
        </button>
    `;
}

function showProfessionalSuggestions() {
    scrollToSection('professionals');
}

function showRepairProfessionals() {
    scrollToSection('professionals');
}

// Load Professionals
const professionals = [
    {
        name: 'João Silva',
        title: 'Engenheiro Civil',
        rating: 4.9,
        projects: 127,
        experience: '15 anos',
        tags: ['Fundações', 'Estruturas', 'Projetos'],
        country: 'BR'
    },
    {
        name: 'Maria Santos',
        title: 'Arquiteta',
        rating: 4.8,
        projects: 89,
        experience: '10 anos',
        tags: ['Design', 'Plantas', 'Reformas'],
        country: 'PT'
    },
    {
        name: 'Carlos Mendes',
        title: 'Pedreiro Profissional',
        rating: 4.7,
        projects: 234,
        experience: '20 anos',
        tags: ['Alvenaria', 'Acabamento', 'Reformas'],
        country: 'BR'
    },
    {
        name: 'Ana Costa',
        title: 'Engenheira Estrutural',
        rating: 5.0,
        projects: 56,
        experience: '8 anos',
        tags: ['Cálculo', 'Reforço', 'Análise'],
        country: 'AO'
    },
    {
        name: 'ConstructPro Ltda',
        title: 'Construtora',
        rating: 4.6,
        projects: 342,
        experience: '25 anos',
        tags: ['Obras Completas', 'Comercial', 'Residencial'],
        country: 'BR'
    },
    {
        name: 'Pedro Oliveira',
        title: 'Pedreiro Profissional',
        rating: 4.9,
        projects: 178,
        experience: '18 anos',
        tags: ['Revestimento', 'Piso', 'Laje'],
        country: 'MZ'
    }
];

function loadProfessionals() {
    const grid = document.getElementById('professionalsGrid');
    if (!grid) return;

    grid.innerHTML = professionals.map(prof => `
        <div class="professional-card">
            <div class="professional-avatar">
                ${prof.name.charAt(0)}
            </div>
            <div class="professional-name">${prof.name}</div>
            <div class="professional-title">${prof.title}</div>
            <div class="professional-rating">
                ⭐ ${prof.rating} (${Math.floor(Math.random() * 50 + 20)} avaliações)
            </div>
            <div class="professional-stats">
                <div class="stat">
                    <div class="stat-value">${prof.projects}</div>
                    <div class="stat-label">Projetos</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${prof.experience}</div>
                    <div class="stat-label">Experiência</div>
                </div>
            </div>
            <div class="professional-tags">
                ${prof.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="btn btn-primary" style="width: 100%;">
                Solicitar Orçamento
            </button>
        </div>
    `).join('');
}

// Load Plans
const plans = [
    {
        title: 'Casa Térrea Moderna',
        category: 'residential',
        description: 'Planta completa de casa térrea com 3 quartos e varanda',
        area: '120m²',
        rooms: '3',
        bathrooms: '2',
        price: 'R$ 890',
        icon: '🏠'
    },
    {
        title: 'Sobrado Luxo',
        category: 'residential',
        description: 'Projeto de sobrado com 4 suítes e piscina',
        area: '280m²',
        rooms: '4',
        bathrooms: '4',
        price: 'R$ 1.590',
        icon: '🏡'
    },
    {
        title: 'Loja Comercial',
        category: 'commercial',
        description: 'Planta de loja comercial com mezanino',
        area: '180m²',
        rooms: '-',
        bathrooms: '2',
        price: 'R$ 1.290',
        icon: '🏪'
    },
    {
        title: 'Edifício Residencial',
        category: 'residential',
        description: 'Projeto completo de prédio com 8 apartamentos',
        area: '600m²',
        rooms: '16',
        bathrooms: '16',
        price: 'R$ 3.990',
        icon: '🏢'
    },
    {
        title: 'Galpão Industrial',
        category: 'industrial',
        description: 'Projeto de galpão com pé direito alto',
        area: '500m²',
        rooms: '-',
        bathrooms: '3',
        price: 'R$ 2.190',
        icon: '🏭'
    },
    {
        title: 'Casa de Campo',
        category: 'residential',
        description: 'Projeto rústico com varanda ampla',
        area: '150m²',
        rooms: '3',
        bathrooms: '2',
        price: 'R$ 990',
        icon: '🏘️'
    }
];

function loadPlans(filter = 'all') {
    const grid = document.getElementById('plansGrid');
    if (!grid) return;

    const filteredPlans = filter === 'all' ? plans : plans.filter(p => p.category === filter);

    grid.innerHTML = filteredPlans.map(plan => `
        <div class="plan-card">
            <div class="plan-image">
                ${plan.icon}
            </div>
            <div class="plan-content">
                <div class="plan-title">${plan.title}</div>
                <div class="plan-description">${plan.description}</div>
                <div class="plan-details">
                    <div class="plan-detail">
                        <div class="plan-detail-value">${plan.area}</div>
                        <div class="plan-detail-label">Área</div>
                    </div>
                    <div class="plan-detail">
                        <div class="plan-detail-value">${plan.rooms}</div>
                        <div class="plan-detail-label">Quartos</div>
                    </div>
                    <div class="plan-detail">
                        <div class="plan-detail-value">${plan.bathrooms}</div>
                        <div class="plan-detail-label">Banheiros</div>
                    </div>
                </div>
                <div class="plan-price">
                    <div class="price">${plan.price}</div>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterPlans(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Load filtered plans
    loadPlans(category);
}

// Load Design Suggestions
const paintDesigns = [
    { title: 'Cinza Moderno', description: 'Paleta de cinzas com detalhes em branco', icon: '🎨' },
    { title: 'Tons Terrosos', description: 'Marrom, bege e terracota', icon: '🏜️' },
    { title: 'Azul Serenidade', description: 'Azuis suaves para ambientes calmos', icon: '🌊' },
    { title: 'Verde Natureza', description: 'Verdes que trazem a natureza para dentro', icon: '🌿' },
    { title: 'Preto & Branco', description: 'Clássico atemporal', icon: '⚫' },
    { title: 'Pastéis Delicados', description: 'Rosa, lavanda e azul claro', icon: '🌸' }
];

const furnitureDesigns = [
    { title: 'Sala Minimalista', description: 'Móveis clean e funcionais', icon: '🛋️' },
    { title: 'Quarto Aconchegante', description: 'Cama, criado-mudo e guarda-roupa', icon: '🛏️' },
    { title: 'Cozinha Moderna', description: 'Armários planejados e ilha central', icon: '🍳' },
    { title: 'Home Office', description: 'Escrivaninha e estante', icon: '💼' },
    { title: 'Sala de Jantar', description: 'Mesa para 6 pessoas com buffet', icon: '🍽️' },
    { title: 'Área Externa', description: 'Conjunto de jardim e churrasqueira', icon: '🌳' }
];

const finishingDesigns = [
    { title: 'Piso Porcelanato', description: 'Acabamento premium resistente', icon: '⬜' },
    { title: 'Revestimento 3D', description: 'Painéis decorativos para paredes', icon: '🔲' },
    { title: 'Gesso Iluminado', description: 'Sancas com LED embutido', icon: '💡' },
    { title: 'Pedras Naturais', description: 'Mármore e granito', icon: '🪨' },
    { title: 'Madeira Nobre', description: 'Assoalho e lambris', icon: '🪵' },
    { title: 'Vidro Temperado', description: 'Divisórias e guarda-corpo', icon: '🪟' }
];

function loadDesigns() {
    loadDesignCategory('paint', paintDesigns);
    loadDesignCategory('furniture', furnitureDesigns);
    loadDesignCategory('finishing', finishingDesigns);
}

function loadDesignCategory(category, designs) {
    const grid = document.getElementById(`${category}Grid`);
    if (!grid) return;

    grid.innerHTML = designs.map(design => `
        <div class="design-card">
            <div class="design-image">
                ${design.icon}
            </div>
            <div class="design-content">
                <div class="design-title">${design.title}</div>
                <div class="design-description">${design.description}</div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                    Ver Detalhes
                </button>
            </div>
        </div>
    `).join('');
}

// Form Handlers
function handleLogin(e) {
    e.preventDefault();
    alert('Login realizado com sucesso! (Demo)');
    closeModal('loginModal');
}

function handleRegister(e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso! (Demo)');
    closeModal('registerModal');
}

// Add spin animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProfessionals();
    loadPlans();
    loadDesigns();
});
