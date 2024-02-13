const fetch = require('node-fetch');


async function changepassword(apikey, uid, slug, username, password) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm/user`, {
            method: 'PATCH',
            headers: {
              'apikey': `${apikey}`
            },
            body: new URLSearchParams({
              'uuid': `${uid}`,
              'username': `${username}`,
              'password': `${password}`
            })
          });

          const respon = await url.json();

          return { respon }
    } catch (error) {
        return error
    }
}

module.exports = changepassword