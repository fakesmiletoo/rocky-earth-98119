//config.js
/** TWITTER APP CONFIGURATION 
 * consumer_key
 * consumer_secret
 * acess_token
 * acess_token_secret
*/

module.exports = {
    consumer_key: "wcoYByTyUFDdZYVxQXkQ7qED3B",
    consumer_secret: "yhw9kFdpXMlwaYG7lmVITOv3oZHdHo79uqKNgANic6IqvJ7G2K0",
    access_token: "1285913402452385792-L4HcdNGtcxJBOICRbyZDzDRwfDihuc",
    access_token_secret: "hcK4Pf5flFztgWVAoSIE8Ts069lNhQXBsF0C6Z9NIs7cu"
};
let Twit = require("twit");
let T = new Twit(require("./config"));
