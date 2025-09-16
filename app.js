// Dashboard Data and State Management
const dashboardData = {
    posts_historicos: [
        {"tema": "Fermentação de precisão", "data": "2025-08-11", "tipo_post": "Educacional", "categoria": "Fermentação", "curtidas": 23, "comentarios": 1, "compartilhamentos": 7, "repost": 1, "colaborativo": false, "formato": "Foto", "engajamento_total": 32},
        {"tema": "Dia da Internacional da Cerveja", "data": "2025-08-01", "tipo_post": "Efeméride", "categoria": "Bebidas", "curtidas": 30, "comentarios": 0, "compartilhamentos": 22, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 52},
        {"tema": "Queijo de Bufalo", "data": "2025-07-22", "tipo_post": "Educacional", "categoria": "Institucional", "curtidas": 27, "comentarios": 0, "compartilhamentos": 3, "repost": 0, "colaborativo": false, "formato": "Reels", "engajamento_total": 30},
        {"tema": "Feira de Tecnologia de Alimentos", "data": "2025-07-17", "tipo_post": "Evento/Atividade", "categoria": "Institucional", "curtidas": 56, "comentarios": 2, "compartilhamentos": 10, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 68},
        {"tema": "Divulgação da FTA", "data": "2025-07-10", "tipo_post": "Evento/Atividade", "categoria": "Institucional", "curtidas": 90, "comentarios": 9, "compartilhamentos": 33, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 132},
        {"tema": "Alerta ANVISA", "data": "2025-07-08", "tipo_post": "Regulamentação", "categoria": "Regulamentação", "curtidas": 80, "comentarios": 0, "compartilhamentos": 32, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 112},
        {"tema": "Receptivo Calouros", "data": "2025-03-13", "tipo_post": "Evento/Atividade", "categoria": "Receptivo", "curtidas": 106, "comentarios": 4, "compartilhamentos": 18, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 128},
        {"tema": "Analise Sensorial", "data": "2025-04-04", "tipo_post": "Institucional", "categoria": "Bebidas", "curtidas": 68, "comentarios": 9, "compartilhamentos": 13, "repost": 0, "colaborativo": false, "formato": "Reels", "engajamento_total": 90},
        {"tema": "Bacalhau", "data": "2025-04-17", "tipo_post": "Educacional", "categoria": "Pescados", "curtidas": 73, "comentarios": 1, "compartilhamentos": 18, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 92},
        {"tema": "Banana Desidratada", "data": "2025-04-11", "tipo_post": "Tutorial", "categoria": "Geleias/Compotas", "curtidas": 54, "comentarios": 2, "compartilhamentos": 5, "repost": 0, "colaborativo": false, "formato": "Foto", "engajamento_total": 61}
    ],
    metricas_periodo: {
        data_inicio: "2025-01-10",
        data_fim: "2025-08-11", 
        total_posts: 34,
        total_engajamentos: 1581,
        engajamento_medio: 46.5,
        curtidas_total: 1349,
        comentarios_total: 46,
        compartilhamentos_total: 289
    },
    performance_tipos: [
        {"tipo": "Evento/Atividade", "count": 5, "percentual": 14.7, "engajamento_medio": 98.6, "desvio_padrao": 34.0, "cv": 34.5, "curtidas_media": 77.0, "comentarios_media": 4.6, "compartilhamentos_media": 17.0},
        {"tipo": "Tutorial", "count": 1, "percentual": 2.9, "engajamento_medio": 61.0, "desvio_padrao": 0, "cv": 0, "curtidas_media": 54.0, "comentarios_media": 2.0, "compartilhamentos_media": 5.0},
        {"tipo": "Regulamentação", "count": 3, "percentual": 8.8, "engajamento_medio": 53.33, "desvio_padrao": 50.9, "cv": 95.3, "curtidas_media": 41.3, "comentarios_media": 0.3, "compartilhamentos_media": 11.7},
        {"tipo": "Institucional", "count": 4, "percentual": 11.8, "engajamento_medio": 49.0, "desvio_padrao": 33.0, "cv": 67.4, "curtidas_media": 38.2, "comentarios_media": 2.5, "compartilhamentos_media": 8.2},
        {"tipo": "Educacional", "count": 14, "percentual": 41.2, "engajamento_medio": 33.21, "desvio_padrao": 20.8, "cv": 62.6, "curtidas_media": 28.4, "comentarios_media": 0.5, "compartilhamentos_media": 4.3},
        {"tipo": "Efeméride", "count": 7, "percentual": 20.6, "engajamento_medio": 29.43, "desvio_padrao": 16.4, "cv": 55.7, "curtidas_media": 22.3, "comentarios_media": 0.7, "compartilhamentos_media": 6.4}
    ],
    performance_categorias: [
        {"categoria": "Regulamentação", "count": 1, "engajamento_medio": 112.0, "formato_comum": "Foto"},
        {"categoria": "Receptivo", "count": 3, "engajamento_medio": 97.67, "formato_comum": "Foto"},
        {"categoria": "Pescados", "count": 1, "engajamento_medio": 92.0, "formato_comum": "Foto"},
        {"categoria": "Geleias/Compotas", "count": 1, "engajamento_medio": 61.0, "formato_comum": "Foto"},
        {"categoria": "Institucional", "count": 6, "engajamento_medio": 56.0, "formato_comum": "Foto"},
        {"categoria": "Bebidas", "count": 4, "engajamento_medio": 50.75, "formato_comum": "Foto"},
        {"categoria": "Leite e Derivados", "count": 2, "engajamento_medio": 50.5, "formato_comum": "Foto"}
    ],
    tendencia_mensal: [
        {"mes": "Janeiro", "count": 1, "engajamento_medio": 39.0, "total": 39},
        {"mes": "Fevereiro", "count": 3, "engajamento_medio": 40.67, "total": 122},
        {"mes": "Março", "count": 3, "engajamento_medio": 57.0, "total": 171},
        {"mes": "Abril", "count": 8, "engajamento_medio": 51.38, "total": 411},
        {"mes": "Maio", "count": 6, "engajamento_medio": 23.0, "total": 138},
        {"mes": "Junho", "count": 6, "engajamento_medio": 41.83, "total": 251},
        {"mes": "Julho", "count": 5, "engajamento_medio": 73.0, "total": 365},
        {"mes": "Agosto", "count": 2, "engajamento_medio": 42.0, "total": 84}
    ],
    performance_semanal: [
        {"dia": "Segunda", "count": 3, "engajamento_medio": 37.0},
        {"dia": "Terça", "count": 7, "engajamento_medio": 47.71},
        {"dia": "Quarta", "count": 4, "engajamento_medio": 27.5},
        {"dia": "Quinta", "count": 9, "engajamento_medio": 57.78},
        {"dia": "Sexta", "count": 9, "engajamento_medio": 52.78},
        {"dia": "Sábado", "count": 2, "engajamento_medio": 15.5}
    ],
    correlacoes: {
        curtidas_engajamento: 0.987,
        compartilhamentos_engajamento: 0.888,
        comentarios_engajamento: 0.699,
        curtidas_compartilhamentos: 0.811,
        curtidas_comentarios: 0.666
    },
    outliers: [
        {"tema": "Divulgação da FTA", "engajamento": 132, "tipo": "Evento/Atividade", "formato": "Foto"},
        {"tema": "Receptivo Calouros", "engajamento": 128, "tipo": "Evento/Atividade", "formato": "Foto"}
    ],
    analise_formatos: {
        foto: {"count": 31, "percentual": 91.2, "engajamento_medio": 46.45},
        reels: {"count": 3, "percentual": 8.8, "engajamento_medio": 47.0}
    },
    insights_principais: [
        "Evento/Atividade têm 2.12x mais engajamento que a média geral",
        "Tutorial tem excelente performance (61.0) mas apenas 2.9% do volume",
        "Quinta-feira é 24% melhor que a média semanal (57.78 vs 46.5)",
        "Julho foi 57% acima da média anual (73.0 vs 46.5)",
        "Reels têm potencial inexplorado - apenas 8.8% vs ideal 50%",
        "Correlação muito forte entre curtidas e engajamento total (0.987)",
        "Evento/Atividade têm menor variabilidade (CV: 34.5%) = mais previsível"
    ]
};

// Chart colors consistent with design system
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// State management
let currentTab = 'overview';
let charts = {};
let isInitialized = false;

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard initializing...');
    initializeTabSwitching();
    populateDataTables();
    initializeInteractiveFeatures();
    
    // Initialize charts after a small delay to ensure DOM is ready
    setTimeout(() => {
        initializeCharts();
        hideLoading();
        isInitialized = true;
        console.log('Dashboard initialized successfully');
    }, 500);
});

// Tab Switching - Fixed implementation
function initializeTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found tab contents:', tabContents.length);

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = button.dataset.tab;
            console.log('Switching to tab:', targetTab);
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Remove active class from all content
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Show target tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
                currentTab = targetTab;
                
                // Refresh charts for current tab after a short delay
                setTimeout(() => {
                    refreshChartsForTab(targetTab);
                }, 100);
            } else {
                console.error('Target tab content not found:', targetTab);
            }
        });
    });
}

// Initialize All Charts
function initializeCharts() {
    console.log('Initializing charts...');
    createOverviewCharts();
    createTiposCharts();
    createCategoriasCharts();
    createTemporalCharts();
    createCorrelacoesCharts();
    createFormatosCharts();
    console.log('Charts initialized');
}

// Overview Tab Charts
function createOverviewCharts() {
    // Monthly Trend Chart
    const trendCtx = document.getElementById('overviewTrendChart');
    if (trendCtx) {
        charts.overviewTrend = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: dashboardData.tendencia_mensal.map(item => item.mes),
                datasets: [{
                    label: 'Engajamento Médio',
                    data: dashboardData.tendencia_mensal.map(item => item.engajamento_medio),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Linha de Tendência',
                    data: calculateTrendline(dashboardData.tendencia_mensal.map(item => item.engajamento_medio)),
                    borderColor: chartColors[2],
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Engajamento'
                        }
                    }
                }
            }
        });
        console.log('Overview trend chart created');
    }

    // Quadrant Chart
    const quadrantCtx = document.getElementById('quadrantChart');
    if (quadrantCtx) {
        const quadrantData = dashboardData.performance_tipos.map(tipo => ({
            x: tipo.count,
            y: tipo.engajamento_medio,
            label: tipo.tipo
        }));

        charts.quadrant = new Chart(quadrantCtx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Tipos de Post',
                    data: quadrantData,
                    backgroundColor: chartColors.slice(0, quadrantData.length),
                    borderColor: chartColors.slice(0, quadrantData.length),
                    pointRadius: 8,
                    pointHoverRadius: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw.label}: Volume ${context.raw.x}, Eng. ${context.raw.y}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Volume de Posts'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Engajamento Médio'
                        }
                    }
                }
            }
        });
        console.log('Quadrant chart created');
    }
}

// Tipos Tab Charts
function createTiposCharts() {
    // Performance by Type
    const tipoPerformanceCtx = document.getElementById('tipoPerformanceChart');
    if (tipoPerformanceCtx) {
        charts.tipoPerformance = new Chart(tipoPerformanceCtx, {
            type: 'bar',
            data: {
                labels: dashboardData.performance_tipos.map(item => item.tipo),
                datasets: [{
                    label: 'Engajamento Médio',
                    data: dashboardData.performance_tipos.map(item => item.engajamento_medio),
                    backgroundColor: chartColors,
                    borderColor: chartColors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                const tipo = dashboardData.performance_tipos[context.dataIndex];
                                return [
                                    `Volume: ${tipo.count} posts (${tipo.percentual}%)`,
                                    `CV: ${tipo.cv}%`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Engajamento Médio'
                        }
                    }
                }
            }
        });
    }

    // Radar Chart
    const tipoRadarCtx = document.getElementById('tipoRadarChart');
    if (tipoRadarCtx) {
        charts.tipoRadar = new Chart(tipoRadarCtx, {
            type: 'radar',
            data: {
                labels: ['Engajamento', 'Volume', 'Curtidas', 'Comentários', 'Compartilhamentos', 'Previsibilidade'],
                datasets: dashboardData.performance_tipos.slice(0, 3).map((tipo, index) => ({
                    label: tipo.tipo,
                    data: [
                        tipo.engajamento_medio / 100 * 100,
                        tipo.count / 14 * 100,
                        tipo.curtidas_media / 90 * 100,
                        tipo.comentarios_media / 10 * 100,
                        tipo.compartilhamentos_media / 35 * 100,
                        (100 - tipo.cv)
                    ],
                    borderColor: chartColors[index],
                    backgroundColor: chartColors[index] + '20',
                    pointBackgroundColor: chartColors[index]
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

// Categorias Tab Charts
function createCategoriasCharts() {
    // Category Ranking
    const categoriaRankingCtx = document.getElementById('categoriaRankingChart');
    if (categoriaRankingCtx) {
        charts.categoriaRanking = new Chart(categoriaRankingCtx, {
            type: 'bar',
            data: {
                labels: dashboardData.performance_categorias.map(item => item.categoria),
                datasets: [{
                    label: 'Engajamento Médio',
                    data: dashboardData.performance_categorias.map(item => item.engajamento_medio),
                    backgroundColor: chartColors,
                    borderColor: chartColors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Engajamento Médio'
                        }
                    }
                }
            }
        });
    }

    // Category Scatter
    const categoriaScatterCtx = document.getElementById('categoriaScatterChart');
    if (categoriaScatterCtx) {
        const scatterData = dashboardData.performance_categorias.map(cat => ({
            x: cat.count,
            y: cat.engajamento_medio,
            label: cat.categoria
        }));

        charts.categoriaScatter = new Chart(categoriaScatterCtx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Categorias',
                    data: scatterData,
                    backgroundColor: chartColors,
                    borderColor: chartColors,
                    pointRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw.label}: ${context.raw.x} posts, ${context.raw.y} eng.`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Frequência de Posts'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Engajamento Médio'
                        }
                    }
                }
            }
        });
    }
}

// Temporal Tab Charts
function createTemporalCharts() {
    // Monthly Trend
    const tendenciaMensalCtx = document.getElementById('tendenciaMensalChart');
    if (tendenciaMensalCtx) {
        charts.tendenciaMensal = new Chart(tendenciaMensalCtx, {
            type: 'line',
            data: {
                labels: dashboardData.tendencia_mensal.map(item => item.mes),
                datasets: [{
                    label: 'Engajamento Médio',
                    data: dashboardData.tendencia_mensal.map(item => item.engajamento_medio),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y'
                }, {
                    label: 'Total de Posts',
                    data: dashboardData.tendencia_mensal.map(item => item.count),
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    yAxisID: 'y1',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Engajamento Médio'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Número de Posts'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }

    // Weekly Performance
    const diaSemanaCtx = document.getElementById('diaSemanaChart');
    if (diaSemanaCtx) {
        charts.diaSemana = new Chart(diaSemanaCtx, {
            type: 'bar',
            data: {
                labels: dashboardData.performance_semanal.map(item => item.dia),
                datasets: [{
                    label: 'Engajamento Médio',
                    data: dashboardData.performance_semanal.map(item => item.engajamento_medio),
                    backgroundColor: chartColors,
                    borderColor: chartColors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Engajamento Médio'
                        }
                    }
                }
            }
        });
    }
}

// Correlações Tab Charts
function createCorrelacoesCharts() {
    // Correlation Matrix
    createCorrelationMatrix();

    // Outliers Chart
    const outliersCtx = document.getElementById('outliersChart');
    if (outliersCtx) {
        charts.outliers = new Chart(outliersCtx, {
            type: 'bar',
            data: {
                labels: dashboardData.outliers.map(item => item.tema),
                datasets: [{
                    label: 'Engajamento',
                    data: dashboardData.outliers.map(item => item.engajamento),
                    backgroundColor: chartColors[2],
                    borderColor: chartColors[2],
                    borderWidth: 2
                }, {
                    label: 'Média Geral',
                    data: new Array(dashboardData.outliers.length).fill(dashboardData.metricas_periodo.engajamento_medio),
                    type: 'line',
                    borderColor: chartColors[1],
                    borderDash: [5, 5],
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Engajamento'
                        }
                    }
                }
            }
        });
    }

    // Efficiency Chart
    const efficiencyCtx = document.getElementById('efficiencyChart');
    if (efficiencyCtx) {
        const efficiencyData = dashboardData.performance_tipos.map(tipo => ({
            tipo: tipo.tipo,
            eficiencia: tipo.engajamento_medio / tipo.count
        }));

        charts.efficiency = new Chart(efficiencyCtx, {
            type: 'radar',
            data: {
                labels: efficiencyData.map(item => item.tipo),
                datasets: [{
                    label: 'Eficiência (Eng/Post)',
                    data: efficiencyData.map(item => item.eficiencia),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    pointBackgroundColor: chartColors[0]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Formatos Tab Charts
function createFormatosCharts() {
    // Format vs Type Chart
    const formatoTipoCtx = document.getElementById('formatoTipoChart');
    if (formatoTipoCtx) {
        charts.formatoTipo = new Chart(formatoTipoCtx, {
            type: 'doughnut',
            data: {
                labels: ['Fotos', 'Reels'],
                datasets: [{
                    data: [dashboardData.analise_formatos.foto.count, dashboardData.analise_formatos.reels.count],
                    backgroundColor: [chartColors[0], chartColors[1]],
                    borderColor: [chartColors[0], chartColors[1]],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const format = context.label;
                                const count = context.raw;
                                const percentage = format === 'Fotos' ? 
                                    dashboardData.analise_formatos.foto.percentual :
                                    dashboardData.analise_formatos.reels.percentual;
                                const engMedio = format === 'Fotos' ?
                                    dashboardData.analise_formatos.foto.engajamento_medio :
                                    dashboardData.analise_formatos.reels.engajamento_medio;
                                return [
                                    `${format}: ${count} posts (${percentage}%)`,
                                    `Eng. Médio: ${engMedio}`
                                ];
                            }
                        }
                    }
                }
            }
        });
    }
}

// Create Correlation Matrix
function createCorrelationMatrix() {
    const correlationContainer = document.getElementById('correlationMatrix');
    if (!correlationContainer) return;

    const correlations = [
        {label: 'Curtidas × Engajamento', value: dashboardData.correlacoes.curtidas_engajamento},
        {label: 'Compartilh. × Engaj.', value: dashboardData.correlacoes.compartilhamentos_engajamento},
        {label: 'Coment. × Engajamento', value: dashboardData.correlacoes.comentarios_engajamento},
        {label: 'Curtidas × Compartilh.', value: dashboardData.correlacoes.curtidas_compartilhamentos},
        {label: 'Curtidas × Comentários', value: dashboardData.correlacoes.curtidas_comentarios}
    ];

    correlationContainer.innerHTML = correlations.map(corr => {
        const strength = Math.abs(corr.value);
        let className = 'correlation-weak';
        if (strength >= 0.8) className = 'correlation-strong';
        else if (strength >= 0.5) className = 'correlation-moderate';

        return `<div class="correlation-cell ${className}" title="${corr.label}">
            ${corr.value.toFixed(3)}
        </div>`;
    }).join('');
}

// Populate Data Tables
function populateDataTables() {
    // Tipos Table
    const tiposTable = document.getElementById('tiposTable');
    if (tiposTable) {
        const tbody = tiposTable.querySelector('tbody');
        tbody.innerHTML = dashboardData.performance_tipos.map(tipo => `
            <tr>
                <td><strong>${tipo.tipo}</strong></td>
                <td>${tipo.count}</td>
                <td>${tipo.percentual}%</td>
                <td>${tipo.engajamento_medio}</td>
                <td>${tipo.curtidas_media}</td>
                <td>${tipo.comentarios_media}</td>
                <td>${tipo.compartilhamentos_media}</td>
                <td>${tipo.cv}%</td>
            </tr>
        `).join('');
    }

    // Category Insights
    const categoriaInsights = document.getElementById('categoriaInsights');
    if (categoriaInsights) {
        categoriaInsights.innerHTML = dashboardData.performance_categorias.slice(0, 5).map(cat => `
            <div class="insight-item">
                <strong>${cat.categoria}</strong><br>
                <span>Engajamento: ${cat.engajamento_medio} | Posts: ${cat.count} | Formato: ${cat.formato_comum}</span>
            </div>
        `).join('');
    }

    // Actionable Insights
    const actionableInsights = document.getElementById('actionableInsights');
    if (actionableInsights) {
        actionableInsights.innerHTML = dashboardData.insights_principais.map((insight, index) => `
            <div class="actionable-insight">
                <h4>💡 Insight ${index + 1}</h4>
                <p>${insight}</p>
            </div>
        `).join('');
    }
}

// Interactive Features
function initializeInteractiveFeatures() {
    // Period Filter
    const periodoFilter = document.getElementById('periodoFilter');
    if (periodoFilter) {
        periodoFilter.addEventListener('change', function() {
            updateTemporalCharts(this.value);
        });
    }

    // Reels Simulator
    const reelsSlider = document.getElementById('reelsSlider');
    const reelsValue = document.getElementById('reelsValue');
    const simulatorResults = document.getElementById('simulatorResults');
    
    if (reelsSlider && reelsValue && simulatorResults) {
        reelsSlider.addEventListener('input', function() {
            const percentage = this.value;
            reelsValue.textContent = percentage + '%';
            
            // Calculate simulation results
            const currentReelsEng = dashboardData.analise_formatos.reels.engajamento_medio;
            const currentFotosEng = dashboardData.analise_formatos.foto.engajamento_medio;
            const totalPosts = dashboardData.metricas_periodo.total_posts;
            
            const newReelsPosts = Math.round(totalPosts * (percentage / 100));
            const newFotosPosts = totalPosts - newReelsPosts;
            
            const projectedEngagement = (newReelsPosts * currentReelsEng + newFotosPosts * currentFotosEng) / totalPosts;
            const currentEngagement = dashboardData.metricas_periodo.engajamento_medio;
            const improvement = ((projectedEngagement - currentEngagement) / currentEngagement * 100);
            
            simulatorResults.innerHTML = `
                <h4>📊 Projeção de Resultados</h4>
                <p><strong>Distribuição:</strong> ${newReelsPosts} Reels + ${newFotosPosts} Fotos</p>
                <p><strong>Engajamento Projetado:</strong> ${projectedEngagement.toFixed(1)}</p>
                <p><strong>Melhoria:</strong> <span class="${improvement >= 0 ? 'trend-indicator positive' : 'trend-indicator negative'}">${improvement >= 0 ? '+' : ''}${improvement.toFixed(1)}%</span></p>
            `;
        });
        
        // Trigger initial calculation
        reelsSlider.dispatchEvent(new Event('input'));
    }

    // Export functionality
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportReport);
    }

    // Refresh functionality
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            showLoading();
            setTimeout(() => {
                refreshAllCharts();
                hideLoading();
            }, 1000);
        });
    }
}

// Utility Functions
function calculateTrendline(data) {
    const n = data.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = data.reduce((a, b) => a + b, 0);
    const sumXY = data.reduce((sum, y, x) => sum + x * y, 0);
    const sumXX = data.reduce((sum, y, x) => sum + x * x, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return data.map((_, index) => slope * index + intercept);
}

function updateTemporalCharts(filter) {
    showLoading();
    
    setTimeout(() => {
        let filteredData = dashboardData.tendencia_mensal;
        
        if (filter === 'q1') {
            filteredData = dashboardData.tendencia_mensal.slice(0, 3);
        } else if (filter === 'q2') {
            filteredData = dashboardData.tendencia_mensal.slice(3, 6);
        } else if (filter === 'q3') {
            filteredData = dashboardData.tendencia_mensal.slice(6, 8);
        }
        
        if (charts.tendenciaMensal) {
            charts.tendenciaMensal.data.labels = filteredData.map(item => item.mes);
            charts.tendenciaMensal.data.datasets[0].data = filteredData.map(item => item.engajamento_medio);
            charts.tendenciaMensal.data.datasets[1].data = filteredData.map(item => item.count);
            charts.tendenciaMensal.update();
        }
        
        hideLoading();
    }, 500);
}

function refreshChartsForTab(tabName) {
    setTimeout(() => {
        Object.values(charts).forEach(chart => {
            if (chart && chart.canvas && chart.canvas.offsetParent !== null) {
                try {
                    chart.resize();
                    chart.update('none');
                } catch (error) {
                    console.log('Chart refresh error:', error);
                }
            }
        });
    }, 100);
}

function refreshAllCharts() {
    Object.values(charts).forEach(chart => {
        if (chart && chart.update) {
            try {
                chart.update();
            } catch (error) {
                console.log('Chart update error:', error);
            }
        }
    });
}

function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        overlay.style.display = 'flex';
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
        overlay.style.display = 'none';
    }
}

function exportReport() {
    showLoading();
    
    setTimeout(() => {
        const reportData = {
            periodo: `${dashboardData.metricas_periodo.data_inicio} - ${dashboardData.metricas_periodo.data_fim}`,
            metricas_gerais: dashboardData.metricas_periodo,
            performance_tipos: dashboardData.performance_tipos,
            insights: dashboardData.insights_principais,
            melhor_mes: 'Julho (73.0 eng. médio)',
            melhor_dia: 'Quinta-feira (57.78 eng. médio)',
            recomendacoes: [
                'Aumentar posts de Evento/Atividade para 25% do volume',
                'Implementar mais Tutoriais (atualmente apenas 2.9%)',
                'Priorizar publicações às quintas-feiras',
                'Aumentar Reels de 8.8% para 30% do conteúdo',
                'Focar em categorias de alta performance: Regulamentação, Receptivo'
            ]
        };
        
        const dataStr = JSON.stringify(reportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `dashboard-agroindustria-uesc-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        
        hideLoading();
        
        // Show success feedback
        setTimeout(() => {
            alert('✅ Relatório exportado com sucesso!');
        }, 100);
    }, 800);
}