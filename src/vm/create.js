const fetch = require('node-fetch');

/**
 * Creates a new virtual machine.
 * 
 * @param {string} apikey - The API key for authentication.
 * @param {string} vmname - The name of the virtual machine.
 * @param {string} osname - The name of the operating system.
 * @param {string} osversion - The version of the operating system.
 * @param {number} disk - The size of the disk in GB.
 * @param {number} vcpu - The number of virtual CPUs.
 * @param {number} ram - The amount of RAM in GB.
 * @param {string} pooluid - The UUID of the resource pool where the virtual machine will be created.
 * @param {string} username - The username for the virtual machine.
 * @param {string} password - The password for the virtual machine.
 * @param {string} billing_account - The ID of the billing account.
 * @param {string} network_uuid - The UUID of the network.
 * @param {string} slug - The unique identifier or label associated with the specific location or resource.
 * 
 * @returns {Object} - The response object containing information about the result of the creation operation.
 */

async function createvm(apikey, vmname, osname, osversion, disk, vcpu, ram, pooluid, username, password, billing_account, network_uuid, slug) {

    try {
        const url = await fetch(`https://api.idcloudhost.com/v1/${slug}/user-resource/vm`, {
            method: 'POST',
            headers: {
              'apikey': `${apikey}`,
              'content-type': 'application/x-www-form-urlencoded'
            },
            body: `name=${vmname}&os_name=${osname}&os_version=${osversion}&disks=${disk}&vcpu=${vcpu}&ram=${ram}&designated_pool_uuid=${pooluid}&username=${username}&password=${password}&billing_account_id=${billing_account}&network_uuid=${network_uuid}&cloud_init={"runcmd": ["/firstboot"], "write_files": [{"path": "/firstboot", "content": "IyEvYmluL2Jhc2gKZWNobyBOb3cgQm9vdGluZwoK", "permissions": "0755", "encoding": "b64"}]}`
          });

          const respon = await url.json();

          return { respon }
    } catch (error) {
        return error 
    }
}


exports.module = createvm