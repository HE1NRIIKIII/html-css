function showTab(tabId) {
    // Esconde todas as tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostra a tab clicada
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

// Mostra a primeira tab ao carregar
window.onload = () => {
    showTab('cachorros');
};
