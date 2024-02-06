const fetch = require('node-fetch');

/**
 * Authenticate the user to request data-model for themselves.
 * 
 * @param {string} apikey - The API key for authentication.
 * 
 * @returns {Object} - The response object containing information about the authenticated user.
 */

async function auth(apikey) {

    try {
        const url = await fetch('https://api.idcloudhost.com/v1/user-resource/user', {
            headers: {
                'apikey': `${apikey}`
            }
        });

        const respon = await url.json();

        return { respon }
    } catch (error) {
        return { error }
    }
}

module.exports = auth