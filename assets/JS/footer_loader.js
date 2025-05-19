const footer_div = document.getElementById('footer-div');

async function loadFooter() {
    const resp = await fetch('footer.html');
    if (!resp.ok) {
        console.error('No se pudo cargar el footer:', resp.status);
        return;
    }
    footer_div.innerHTML = await resp.text();
}

loadFooter();