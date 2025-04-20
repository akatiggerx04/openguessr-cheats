// Cheat by https://github.com/akatiggerx04
// Please don't use this cheat to ruin this game for others.

function extractLatLngFromGoogleMapsIframe(iframe) {
    const iframeSrc = iframe.src;
    const urlParams = new URL(iframeSrc);
    const params = urlParams.searchParams;

    const location = params.get('location');
    if (location) {
        const [lat, lng] = location.split(',');
        return [lat, lng];
    }

    return null; 
}

function openModal(lat, lng) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps?q=${lat},${lng}&t=m&z=3&output=embed`;
    iframe.style.width = '800px';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    iframe.style.backgroundColor = 'gray';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'red';
    closeButton.style.color = 'white';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
        modal.remove();
    };

    modal.appendChild(iframe);
    modal.appendChild(closeButton);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

function findIframe() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        if (iframe.src && iframe.src.includes('google.com/maps/embed')) {
            const latLng = extractLatLngFromGoogleMapsIframe(iframe);
            if (latLng) {
                const [lat, lng] = latLng;
                console.log(`Found the coordinates: ${lat}, ${lng}`);
                openModal(lat, lng);
            } else {
                console.log('No coordinates found in iframe');
            }
        } else {
            console.log('Iframe is not a Google Maps iframe');
        }
    });
}

function initCheat() {
    const button = document.createElement('button');
    button.textContent = 'Find Coordinates';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.background = 'red';
    button.style.color = 'white';
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '10px';
    button.style.cursor = 'pointer';
    button.onclick = findIframe;
    document.body.appendChild(button);

    console.log('%cOpenGuesser Cheat Initiated! \nCheat by akatiggerx04 :D \nDon\'t use this cheat to ruin this game for others.', 
    'background: red; color: white; font-size: 20px; padding: 10px; font-weight: bold;', 
    'color: white; font-weight: normal;');
}

initCheat();
