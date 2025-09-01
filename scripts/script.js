// Interactive Profile JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('nav-container');
    const contentContainer = document.getElementById('content-container');
    const navButtons = navContainer.querySelectorAll('.nav-btn');
    const contentPanels = contentContainer.querySelectorAll('.content-panel');

    function showPanel(targetId) {
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === targetId);
        });
        contentPanels.forEach(panel => {
            if (panel.id === targetId) {
                panel.style.display = 'block';
            } else {
                panel.style.display = 'none';
            }
        });
    }

    navContainer.addEventListener('click', (e) => {
        if (e.target.matches('.nav-btn')) {
            const targetId = e.target.dataset.target;
            showPanel(targetId);
        }
    });

    showPanel('culture');
    
    const bentoParts = document.querySelectorAll('.bento-part');
    const mealTexts = document.querySelectorAll('.meal-text');

    bentoParts.forEach(part => {
        part.addEventListener('mouseenter', () => {
            const bentoTarget = part.dataset.bento;
            mealTexts.forEach(text => {
                text.style.transition = 'background-color 0.3s';
                if (text.dataset.bento === bentoTarget || text.dataset.bento === "all") {
                    text.style.backgroundColor = 'rgba(0, 255, 255, 0.2)';
                }
            });
        });
        part.addEventListener('mouseleave', () => {
            mealTexts.forEach(text => {
                text.style.backgroundColor = 'transparent';
            });
        });
    });
});
