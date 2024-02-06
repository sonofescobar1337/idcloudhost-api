const fetch = require('node-fetch');

/**
 * Get a list of virtual machines associated with a specific location or resource.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * 
 * @returns {Object} - The response object containing information about the virtual machine list.
 */

async function getvmlist(apikey, slug) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm/list`, {
            headers: {
                'apikey': `${apikey}`
            }
        });
        const respon = await url.json()

        return { respon }
    } catch (error) {
        return { error }
    }
}


module.exports = getvmlist