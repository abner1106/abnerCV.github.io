// Funcionalidades para el CV

document.addEventListener('DOMContentLoaded', function() {
    // Botón de imprimir
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Botón de descargar PDF (simulado)
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert('En una implementación real, esto descargaría tu CV en formato PDF. Para una solución completa, se necesitaría una librería como jsPDF.');
            
            // Aquí iría el código para generar el PDF
            // Por ejemplo, usando la librería jsPDF:
            // const doc = new jsPDF();
            // doc.html(document.body, {
            //     callback: function(doc) {
            //         doc.save('cv-abner-roldan.pdf');
            //     }
            // });
        });
    }
    
    // Botón de modo oscuro/claro
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Cambiar icono y texto del botón
            const icon = themeBtn.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
            }
        });
    }
    
    // Animación de las barras de habilidades al hacer scroll
    const animateSkillBars = function() {
        const skillBars = document.querySelectorAll('.skill-level');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 300);
        });
    };
    
    // Ejecutar animación al cargar la página
    setTimeout(animateSkillBars, 500);
    
    // Cargar foto si está disponible
    const loadPhoto = function() {
        // En una implementación real, esto cargaría una foto desde una ruta específica
        // Por ahora, es solo un marcador de posición
        console.log('Espacio para cargar foto del CV');
    };
    
    loadPhoto();
});