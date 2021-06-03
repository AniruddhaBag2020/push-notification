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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dMV8Ij1HqgM:APA91bEqtl8A9EoNWiGP5Ty95mBKiPFo8ZxbJE-lyhwpsEFIl_QRrgkdgpvw00QskJJXyht0R-LGz313XTEGcU4rSRTygYJaslOWlqHMq_4GLiesB6UKrK_IShThjeVDj3M7X5VINMF5","expirationTime":null,"keys":{"p256dh":"BEBeGnVGN_rCieHc7kpt0Ty23lqomJNZrlOepXLJEbXuE8GukjKOH48Pd068fNrPULu0Udyae1wrzmR4zJz1yUI","auth":"o-R_ypgCDkVLa-VbjrTDHA"}}


setInterval(function(){
    push.sendNotification(sub, 'Welcome user').catch(e =>{
        console.log(e);
    });
}, 10000);

