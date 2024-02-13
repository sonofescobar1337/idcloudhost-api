const fetch = require('node-fetch');

/**
 * Modifies the configuration of a virtual machine.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * @param {string} uuid - The UUID (Universally Unique Identifier) of the virtual machine.
 * @param {string} name - The new name for the virtual machine.
 * @param {number} vcpu - The new number of virtual CPUs.
 * @param {number} ram - The new amount of RAM in GB.
 * 
 * @returns {Object} - The response object containing information about the result of the modification operation.
 */
async function modifyvm(apikey, slug, uuid, name, vcpu, ram) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm`, {
            method: 'PATCH',
            headers: {
              'apikey': `${apikey}`
            },
            body: new URLSearchParams({
              'uuid': `${uuid}`,
              'name': `${name}`,
              'vcpu': `${vcpu}`,
              'ram': `${ram}`
            })
          });

          const respon = await url.json();

          return { respon }
    } catch (error) {
        return error
    }
}

module.exports = modifyvm