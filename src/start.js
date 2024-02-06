const fetch = require('node-fetch');

/**
 * Start the virtual machine.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} vmid - The UUID of the virtual machine to start.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * 
 * @returns {Object} - The response object containing information about the result of the VM startup operation.
 */

async function startvm(apikey, vmid, slug) {


    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm/start`, {
            method: 'POST',
            headers: {
                'apikey': `${apikey}`
            },
            body: new URLSearchParams({
                'uuid': `${vmid}`
            })
        });

        const respon = await url.json();

        return { respon }
    } catch (error) {
        return { error }
    }
}

module.exports = startvm
