const fetch = require('node-fetch');


async function reinstallos(apikey, uid, slug, osname, osversion) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm/reinstall`, {
            method: 'POST',
            headers: {
              'apikey': `${apikey}`
            },
            body: new URLSearchParams({
              'uuid': `${uid}`,
              'os_name': `${osname}`,
              'os_version': `${osversion}`
            })
          });

          const respon = await url.json();

          return { respon }
    } catch (error) {
        return error
    }
}


module.exports = reinstallos