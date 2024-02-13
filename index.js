module.exports = {

    Auth: require('./src/auth'),
    Location: require('./src/location'),
    Start: require('./src/start'),
    Shutdown: require('./src/shutdown'),
    Vminfo: require('./src/vminfo'),
    Vmlist: require('./src/vmlist'),
    Getnetworkdata: require('./src/network/GetNetworkData'),
    Listnetwork: require('./src/network/ListNetwork'),
    Changepasswordvm: require('./src/vm/change_password'),
    Createvm: require('./src/vm/create'),
    Deletevm: require('./src/vm/delete'),
    Modifyvm: require('./src/vm/modify'),
    Reinstallvm: require('./src/vm/reinstall'),
    ResourceList: require('./src/vm/resource_list')
    



}