const fetch = require('node-fetch');

/**
 * Retrieves a list of networks associated with a specific location or resource.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * 
 * @returns {Object} - The response object containing information about the networks.
 */
async function listnetwork(apikey, slug) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/network/networks`, {
            headers: {
              'apikey': `${apikey}`
            }
          });
        const respon = await url.json();

        return { respon }
    } catch (error) {
        return error
    }
}


module.exports = listnetwork