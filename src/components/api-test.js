import axios from "axios";

// Get Access Token
axios.post('https://accounts.spotify.com/api/token', null, {
    params: {
        grant_type: 'client_credentials',
    },
    auth: {
        username: '08316182515044ca92b89ad15eba3e87',
        password: '04cc60fb28ca4075b7e0ba39e876e071',
    },
})
    .then(response => {
        const accessToken = response.data.access_token;

        // Use Access Token to make another request
        const artistId = "77HMrIyqNfLuAvEwkgR2FY";
        axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
            .then(artistResponse => {
                console.log(artistResponse.data);
            })
            .catch(artistError => {
                console.error(artistError);
            });
    })
    .catch(error => {
        console.error(error);
    });

