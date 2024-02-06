const fetch = require('node-fetch');

/**
 * Get a list of available locations (data centres or resource pools) where virtual machines can be hosted.
 * By default, API calls manage resources in the "is_default": true location.
 * 
 * @param {string} apikey - The API key for authentication.
 * 
 * @returns {Object} - The response object containing information about available locations.
 */
async function getlocation(apikey) {

    try {
        const url = await fetch('https://api.idcloudhost.com/v1/config/locations', {
            headers: {
                'apikey': `${apikey}`
            }
        });

        const respon = await url.json()

        return { respon }
    } catch (error) {
        return { respon }
    }
}

module.exports = getlocation