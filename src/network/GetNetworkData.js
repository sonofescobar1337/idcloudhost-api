const fetch = require('node-fetch');


async function getnetworkdata(apikey, slug, networkid) {


    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/network/network/${networkid}`, {
            method: 'POST',
            headers: {
              'apikey': `${apikey}`,
              'Content-Type': 'application/json'
            }
          });

          const respon = await url.json();

          return { respon }
    } catch (error) {
        return error
    }
}


module.exports = getnetworkdata