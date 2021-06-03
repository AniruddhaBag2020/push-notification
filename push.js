var push = require('web-push');
let vapidKeys = {
    publicKey: 'BBxQH2GsF4so4echj-X_cy0CYtqQrDMFSPcyHZH5Ie4kUV37zluBZBXe7bSSADnNKfQvs788W2TALoUhCdtPzRY',
    privateKey: 'ZrVaHKZciWK1FlC_T1t24xeHAHOI90fmoODEJBZoYWs'
  }
// let vapidKeys = {
//     publicKey: 'BIKyZ40diPwGOLXNA3pZBV_MLlZ750yKZcuhZ9KioKNSPwwpkvRrGX8SY6cWHEAHTaJjgD_VhzDn-1gkrfq-gHE',  
//     privateKey: '6iDinp9jZEtSKfrClI2_6TWx_Qtd7cLM7YVLlTooS6g'
//   }
console.log(vapidKeys);

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eZlY9AtrPSo:APA91bHYp0SbPoyb_VMSNRBCeb2S5MA45xsjw-hSF4vvpNn4T0XxPLCiSgpGx_YoPC5EuNZykQmAK1xwi_yBC1VmFbEFHdgDpnXwKp4IzIUmSEXdo_84Pn9QIb5ACb8EJZIjWzIpMQOC","expirationTime":null,"keys":{"p256dh":"BFkXR1n6uwdh-gABf8j7yJFfNLTSa1CadNqnqWdbwiVjpQMkDC6ufGQjnnWfZGFuL9-xyycKDr9crTYXsfj5tGI","auth":"bnH84gLY6eTeazrLW2-GWQ"}}


setInterval(function(){
    push.sendNotification(sub, 'Welcome user').catch(e =>{
        console.log(e);
    });
}, 10000);

