const fetch = require('node-fetch');

/**
 * Get detailed information about a specific virtual machine.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} vmid - The UUID (Universally Unique Identifier) of the virtual machine.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * 
 * @returns {Object} - The response object containing information about the virtual machine.
 */


async function getvmingfo(apikey, vmid, slug) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm?uuid=${vmid}`, {
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


module.exports = getvmingfo