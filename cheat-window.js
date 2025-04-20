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

function createPopup() {
    const popup = window.open('', 'OpenGuesser Cheat', 'width=800,height=600');
    const html = [
        '<html>',
        '<head>',
        '<title>OpenGuesser Cheat by @akatiggerx04</title>',
        '<style>',
        'body {',
        '    font-family: Arial, sans-serif;',
        '    margin: 0;',
        '    padding: 0;',
        '}',
        '#container {',
        '    width: 100%;',
        '    height: 100vh;',
        '    display: flex;',
        '    flex-direction: column;',
        '}',
        '#info {',
        '    height: 20%;',
        '    background-color: #f0f0f0;',
        '    padding: 20px;',
        '    border-bottom: 1px solid #ccc;',
        '}',
        '#map {',
        '    height: 80%;',
        '}',
        '#reload-time {',
        '    position: absolute;',
        '    top: 10px;',
        '    right: 10px;',
        '    font-size: 12px;',
        '}',
        '</style>',
        '</head>',
        '<body>',
        '<div id="container">',
        '<div id="info">',
        '<h2>Coordinates:</h2>',
        '<p id="coordinates"></p>',
        '</div>',
        '<div id="map">',
        '<iframe id="map-iframe" width="100%" height="100%" frameborder="0"></iframe>',
        '</div>',
        '<span id="reload-time"></span>',
        '</div>',
        '<script>',
        'let previousLatLng = null;',
        'let iframe = document.getElementById("map-iframe");',
        'let coordinates = document.getElementById("coordinates");',
        'let reloadTime = document.getElementById("reload-time");',
        '',
        'function checkCoordinates() {',
        '    const iframes = window.opener.document.querySelectorAll("iframe");',
        '    let currentLatLng = null;',
        '    iframes.forEach(iframeElement => {',
        '        if (iframeElement.src && iframeElement.src.includes("google.com/maps/embed")) {',
        '            currentLatLng = extractLatLngFromGoogleMapsIframe(iframeElement);',
        '        }',
        '    });',
        '    if (!currentLatLng && !previousLatLng) return;',
        '    if (!currentLatLng || !previousLatLng) {',
        '        previousLatLng = currentLatLng;',
        '        updatePopup(currentLatLng);',
        '        return;',
        '    }',
        '    if (currentLatLng[0] !== previousLatLng[0] || currentLatLng[1] !== previousLatLng[1]) {',
        '        previousLatLng = currentLatLng;',
        '        updatePopup(currentLatLng);',
        '    }',
        '}',
        '',
        'function updatePopup(latLng) {',
        '    if (latLng) {',
        '        const [lat, lng] = latLng;',
        '        coordinates.textContent = `${lat}, ${lng}`;',
        '        iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&t=m&z=3&output=embed`;',
        '    } else {',
        '        coordinates.textContent = "No coordinates found";',
        '        iframe.src = "";',
        '    }',
        '    const currentTime = new Date().toLocaleTimeString();',
        '    reloadTime.textContent = `Last updated: ${currentTime}`;',
        '}',
        '',
        'function extractLatLngFromGoogleMapsIframe(iframe) {',
        '    const iframeSrc = iframe.src;',
        '    const urlParams = new URL(iframeSrc);',
        '    const params = urlParams.searchParams;',
        '',
        '    const location = params.get("location");',
        '    if (location) {',
        '        const [lat, lng] = location.split(",");',
        '        return [lat, lng];',
        '    }',
        '',
        '    return null; ',
        '}',
        '',
        'setInterval(checkCoordinates, 100);',
        '</script>',
        '</body>',
        '</html>'
    ].join('');
    popup.document.write(html);
    return popup;
}

function initCheat() {
    createPopup();
    console.log('%cOpenGuesser Cheat Initiated! \nCheat by akatiggerx04 :D \nDon\'t use this cheat to ruin this game for others.',
        'background: red; color: white; font-size: 20px; padding: 10px; font-weight: bold;');
}

initCheat();
