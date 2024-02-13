const fetch = require('node-fetch');

/**
 * Retrieves a list of billing accounts associated with the authenticated user.
 * 
 * @param {string} apikey - The API key for authentication.
 * 
 * @returns {Object} - The response object containing information about the billing accounts.
 */
async function listbilling(apikey) {

    try {
        const url = await fetch('https://api.idcloudhost.com/v1/payment/billing_account/list', {
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


module.exports = listbilling