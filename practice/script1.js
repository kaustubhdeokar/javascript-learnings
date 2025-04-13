document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signupform').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        let resp = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        let parsedData = await resp.json();
        console.log(parsedData);

        let getResp = await fetch('http://localhost:3000/fetchusers', {
            headers: {
            'Content-Type': 'application/json',
            'authorization':parsedData.token
            }
        })
        
        let parsedGetResp = await getResp.json();
        console.log(parsedGetResp);

    } catch (error) {
        console.error('Error:', error);
    }
});
});
