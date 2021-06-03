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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cOyjTHzfKQc:APA91bG39eTzzedqjclQcO02RZZKDy6bw6BntNELXrkYkrkZeQUNMDNemTEA-1mN6-CQWEXMPQV2ngH4iOGkEPZ02vO9Fb1cncsgnUA4N_Mc98NVby4HZnj2A5n4KaUuuLjj0H3udbDb","expirationTime":null,"keys":{"p256dh":"BN7muljUZpsaqgsss-dsfOcqI3WJrZTF9eGz23Kn3uH4FiT-Ib1pJbJZWWwGOcb3HGlr_125xROrDQeIy_HKxtM","auth":"bxrnplSdCNXOCr1_rZYHPg"}}


setInterval(function(){
    push.sendNotification(sub, 'Welcome user').catch(e =>{
        console.log(e);
    });
}, 10000);

