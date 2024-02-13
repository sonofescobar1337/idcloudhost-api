const fetch = require('node-fetch');

/**
 * Deletes a virtual machine.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * @param {string} uuid - The UUID (Universally Unique Identifier) of the virtual machine to delete.
 * 
 * @returns {Object} - The response object containing information about the result of the deletion operation.
 */
async function deletevm(apikey, slug, uuid) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm`, {
            method: 'DELETE',
            headers: {
              'apikey': `${apikey}`
            },
            body: new URLSearchParams({
              'uuid': `${uuid}`
            })
          });

          const respon = await url.json();


          return { respon }
    } catch (error) {
        return error
    }
}


module.exports = deletevm