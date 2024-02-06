const fetch = require('node-fetch');

/**
 * Stop the virtual machine.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} vmid - The UUID of the virtual machine to stop.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * @param {boolean} force - Optional parameter indicating whether to force an immediate shutdown (true) or attempt a graceful shutdown (false).
 * 
 * @returns {Object} - The response object containing information about the result of the VM stop operation.
 */
async function stopvm(apikey, vmid, slug, force) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm/stop`, {
            method: 'POST',
            headers: {
                'apikey': `${apikey}`
            },
            body: new URLSearchParams({
                'uuid': `${vmid}`,
                'force': `${force}`
            })
        });

        const respon = await url.json();

        return { respon }
    } catch (error) {
        return { error }
    }
}