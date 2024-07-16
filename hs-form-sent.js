document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => data[key] = value);

    fetch(`https://api.hsforms.com/submissions/v3/integration/submit/45586814/252e7c89-3ff9-4c72-a242-850e5b96d088`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.__HUBSPOT_API_KEY__}`
        },
        body: JSON.stringify({
            fields: [
                {
                    name: 'email',
                    value: data.email
                },
                {
                    name: 'message',
                    value: data.message
                }
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title
            }
        })
    }).then(response => {
        if (response.ok) {
            alert('Formulario enviado correctamente!');
        } else {
            alert('Hubo un problema al enviar el formulario.');
        }
    });
});