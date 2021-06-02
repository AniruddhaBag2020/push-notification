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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dkes3TWi7PU:APA91bH1RSXrfaBJ2LG-U-S7_r7Bo0h6PRmsWQZVdI9p_2vonBNE8zt4fXjPW1u70tn3B7Zl3ef3i4eP_Dh3oUayB1SLDyKV-2CJymtAhzGrjpJi0IxYKXkuGNTdWfXWn-2EouAWIaAJ","expirationTime":null,"keys":{"p256dh":"BI0c1MpRL9GWcr4MxJPe6NzoBbIUSNBZmrykWOaEXvHcQJcgNCtP6aOBOrUJxZziyRO0QShgK1zRkmR490t1jCs","auth":"eezA3iUIWJIjZKjJFFbtYA"}}


setInterval(function(){
    push.sendNotification(sub, 'text messege').catch(e =>{
        console.log(e);
    });
}, 3000);

