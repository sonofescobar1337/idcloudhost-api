# Idcloudhost-API
Idcloudhost-API is a comprehensive Node.js module designed to seamlessly integrate with the idcloudhost API. With this module, developers can easily interact with various idcloudhost services and manage resources efficiently. <br>Stay ahead of the curve and streamline your cloud hosting experience with Idcloudhost-API. Explore the full potential of idcloudhost's capabilities by integrating this module into your Node.js projects today. For detailed usage instructions and examples, refer to the official idcloudhost documentation at [here](https://api.idcloudhost.com/)<br>




## Quick Links

* [Guide / Getting Started](https://sonofescobar1337.dev/) _(Comingsoon)_
* [Reference documentation](https://sonofescobar1337.dev/) _(Comingsoon)_
* [GitHub](https://github.com/sonofescobar1337/idcloudhost-api)
* [npm](https://npmjs.org/package/) _(Comingsoon)_


## Installation
The module is now available on npm! `npm i idcloudhost-api`

Please note that Node v15+ is required.


## Example usage

```js
const mod = require('idcloudhost-api')



const apikey = "YOUR APIKEY";



async function somethingFunction() {
    try {
        // Authenticate to get authorization information
        const auth = await mod.Auth(apikey); // Since the module function is asynchronous, use await
        console.log(auth);

        // Parsing and displaying user information
        console.log(`Your Info:\nName: ${auth.respon.profile_data.first_name}\n`);

        // Get the list of available locations
        const location = await mod.Location(apikey);
        console.log(location);

        /**
         * ==== SLUG ====
         * The 'slug' is a unique identifier or label associated with a specific location or resource.
         * It serves as a short, URL-friendly representation of a geographical or resource-related term.
         * In this example, each object within the 'respon' array represents a location, and the 'slug' field provides a concise identifier for that location.
         * For instance, in the first object, the 'slug' is "jkt01," representing the location or resource associated with "SouthJKT-a."
         */
        const slug = location.respon[0].slug;

        /**
         * ==== GET VM LIST ====
         * The 'getvmlist' function retrieves a list of virtual machines (VM) associated with a specific resource or location.
         * The 'slug' parameter is crucial in constructing the URL for the API request, dynamically specifying the location or resource for which the VM list is requested.
         * In the URL (https://api.idcloudhost.com/v1/${slug}/user-resource/vm/list), the 'slug' is inserted into the path, indicating the specific location's endpoint.
         */
        const vmList = await mod.Vmlist(apikey, slug);
        console.log(vmList);

        //Required for control vm (start, stop, etc)
        const uuid = vmList.respon[0].uuid;

        const startvm = await mod.Start(apikey, uuid, slug);
        console.log(startvm);

        const stopvm = await mod.Shutdown(apikey, uuid, slug, true) //for the last parameter is can be 'true' or 'false'. true is for force shutdown, false is for shutdown normal
        console.log(stopvm)

    } catch (error) {
        // Handle any potential errors
        console.error('An error occurred:', error);
    }
}


somethingFunction()
```

Take a look at [example.js](https://github.com/sonofescobar1337/idcloudhost-api/blob/master/example.js) for another example with more use cases.


## GET FREE CREDIT FROM IDCLOUDHOST 
[Register ID CLOUDHOST](https://console.idcloudhost.com/referral/35q7jb)

## Supported features

| Feature  | Status |
| ------------- | ------------- |
| Start VM  | ✅  |
| Shutdown VM   | ✅  |
| Get status VM  | ✅  |
| Check billing Status | 🟡  |
| Get Billing Accounts  | ✅  |
| Create VM   | ✅  |
| Delete VM  | ✅  |
| Modify VM | ✅  |
| Reinstall VM  | ✅  |


## Donate
[Saweria](https://saweria.co/sonofescobar1337) <br>
