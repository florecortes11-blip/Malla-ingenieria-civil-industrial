// 1. Definición de la Malla Curricular
const malla = [
    {
        semestre: 1,
        ramos: [
            { id: "FIS1", nombre: "Introducción a la Física", req: [] },
            { id: "CAL1", nombre: "Cálculo I", req: [] },
            { id: "ALG1", nombre: "Álgebra I", req: [] },
            { id: "FGC1", nombre: "Formación General Comunicacional", req: [] },
            { id: "ING1", nombre: "Inglés 1", req: [] },
            { id: "PROY1", nombre: "Proyecto Introducción a la Ingeniería", req: [] },
            { id: "IDEN1", nombre: "Formación en Identidad UCN Nivel 1", req: [] }
        ]
    },
    {
        semestre: 2,
        ramos: [
            { id: "MEC", nombre: "Mecánica", req: [] },
            { id: "CAL2", nombre: "Cálculo II", req: ["CAL1"] },
            { id: "ALG2", nombre: "Álgebra II", req: ["ALG1"] },
            { id: "QUI", nombre: "Química General", req: [] },
            { id: "IDEN2", nombre: "Formación en Identidad UCN Nivel 2", req: ["IDEN1"] },
            { id: "ING2", nombre: "Inglés 2", req: ["ING1"] }
        ]
    },
    {
        semestre: 3,
        ramos: [
            { id: "EDIF", nombre: "Ecuaciones Diferenciales", req: [] },
            { id: "EST", nombre: "Estadística", req: [] },
            { id: "CAL3", nombre: "Cálculo III", req: ["CAL2"] },
            { id: "PROG", nombre: "Programación", req: [] },
            { id: "FGE", nombre: "Formación General Electiva", req: [] },
            { id: "PROY2", nombre: "Proyecto Diseño e Innovación", req: [] }
        ]
    },
    {
        semestre: 4,
        ramos: [
            { id: "ELEC", nombre: "Electromagnetismo", req: [] },
            { id: "TERM", nombre: "Termodinámica", req: [] },
            { id: "ESTA", nombre: "Estadística Aplicada", req: [] },
            { id: "ADM1", nombre: "Administración Producción I", req: [] },
            { id: "ECON", nombre: "Economía", req: [] },
            { id: "FGC2", nombre: "Formación General Comunicacional", req: [] }
        ]
    },
    {
        semestre: 5,
        ramos: [
            { id: "ECI", nombre: "Electivo Ciencias de la Ingeniería", req: [] },
            { id: "INV1", nombre: "Investigación Operativa I", req: [] },
            { id: "DAT", nombre: "Ciencia de Datos", req: [] },
            { id: "CONT", nombre: "Contabilidad de Dirección", req: [] },
            { id: "FPE1", nombre: "Formación Profesional Electiva", req: [] },
            { id: "PROY3", nombre: "Proyecto Diseño de Sistemas Productivos", req: [] }
        ]
    },
    {
        semestre: 6,
        ramos: [
            { id: "ADM2", nombre: "Administración Producción II", req: ["ADM1"] },
            { id: "EMPR", nombre: "Emprendimiento", req: [] },
            { id: "IECO", nombre: "Ingeniería Económica", req: [] },
            { id: "INV2", nombre: "Investigación Operativa II", req: ["INV1"] },
            { id: "FPE2", nombre: "Formación Profesional Electiva", req: [] },
            { id: "IDEN3", nombre: "Formación en Identidad UCN Nivel 3", req: ["IDEN2"] },
            { id: "PROY4", nombre: "Proyecto Calidad", req: [] }
        ]
    },
    {
        semestre: 7,
        ramos: [
            { id: "SIM", nombre: "Simulación", req: [] },
            { id: "DESO", nombre: "Ingeniería y Desarrollo Sostenible", req: [] },
            { id: "TI", nombre: "Tecnologías de Información", req: [] },
            { id: "CAD", nombre: "Cadena de Suministros", req: [] },
            { id: "FPE3", nombre: "Formación Profesional Electiva", req: [] },
            { id: "PROY5", nombre: "Proyecto Formación y Evaluación de Proyectos", req: [] },
            { id: "IDEN4", nombre: "Formación en Identidad UCN Nivel 4", req: ["IDEN3"] },
            { id: "PRAC", nombre: "Práctica Pre-Profesional", req: [] }
        ]
    },
    {
        semestre: 8,
        ramos: [
            { id: "ACTI", nombre: "Gestión de Activos", req: [] },
            { id: "CAPI", nombre: "Gestión de Capital Humano", req: [] },
            { id: "ORGD", nombre: "Organización Digital", req: [] },
            { id: "ESTR", nombre: "Planificación Estratégica", req: [] },
            { id: "FPE4", nombre: "Formación Profesional Electiva", req: [] },
            { id: "PROY6", nombre: "Proyecto Cadena de Suministro", req: [] }
        ]
    },
    {
        semestre: 9,
        ramos: [
            { id: "FPE9_1", nombre: "Formación Profesional Electiva", req: [] },
            { id: "FPE9_2", nombre: "Formación Profesional Electiva", req: [] },
            { id: "FPE9_3", nombre: "Formación Profesional Electiva", req: [] },
            { id: "FPE9_4", nombre: "Formación Profesional Electiva", req: [] },
            { id: "FPE9_5", nombre: "Formación Profesional Electiva", req: [] },
            { id: "FPE9_6", nombre: "Formación Profesional Electiva", req: [] }
        ]
    },
    {
        semestre: 10,
        ramos: [
            { id: "CAPS", nombre: "Capstone Project", req: [] }
        ]
    }
];

// 2. Cargar estado desde LocalStorage
let aprobados = JSON.parse(localStorage.getItem('aprobados')) || [];

const container = document.getElementById('malla-container');

// 3. Función para renderizar la malla
function renderMalla() {
    container.innerHTML = '';
    
    malla.forEach(sem => {
        const col = document.createElement('div');
        col.className = 'semester-column';
        col.innerHTML = `<h3>Semestre ${sem.semestre}</h3>`;
        
        sem.ramos.forEach(ramo => {
            const card = document.createElement('div');
            card.className = `course-card ${aprobados.includes(ramo.id) ? 'approved' : ''}`;
            card.innerText = ramo.nombre;
            card.onclick = () => toggleAprobar(ramo.id, ramo.nombre, ramo.req);
            col.appendChild(card);
        });
        
        container.appendChild(col);
    });
    actualizarProgreso();
}

// 4. Lógica para aprobar/desaprobar
function toggleAprobar(id, nombre, requisitos) {
    if (aprobados.includes(id)) {
        // Si ya está aprobado, lo quitamos
        aprobados = aprobados.filter(item => item !== id);
    } else {
        // Si no está aprobado, verificamos requisitos
        const faltantes = requisitos.filter(r => !aprobados.includes(r));
        
        if (faltantes.length > 0) {
            // Buscamos los nombres de los ramos faltantes para el mensaje
            const nombresFaltantes = faltantes.map(fid => {
                let nombreRamo = "";
                malla.forEach(s => s.ramos.forEach(r => { if(r.id === fid) nombreRamo = r.nombre }));
                return nombreRamo;
            });
            alert(`No puedes aprobar "${nombre}".\nFaltan los siguientes requisitos:\n- ${nombresFaltantes.join('\n- ')}`);
            return;
        }
        aprobados.push(id);
    }
    
    // Guardar y refrescar
    localStorage.setItem('aprobados', JSON.stringify(aprobados));
    renderMalla();
}

function actualizarProgreso() {
    const totalRamos = malla.reduce((acc, sem) => acc + sem.ramos.length, 0);
    const porcentaje = Math.round((aprobados.length / totalRamos) * 100);
    document.getElementById('progress-percent').innerText = `${porcentaje}%`;
}

// Inicializar
renderMalla();
