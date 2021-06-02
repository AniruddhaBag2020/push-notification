var push = require('web-push');
let vapidKeys = {
    publicKey: 'BBxQH2GsF4so4echj-X_cy0CYtqQrDMFSPcyHZH5Ie4kUV37zluBZBXe7bSSADnNKfQvs788W2TALoUhCdtPzRY',  privateKey: 'ZrVaHKZciWK1FlC_T1t24xeHAHOI90fmoODEJBZoYWs'
  }
// let vapidKeys = {
//     publicKey: 'BIKyZ40diPwGOLXNA3pZBV_MLlZ750yKZcuhZ9KioKNSPwwpkvRrGX8SY6cWHEAHTaJjgD_VhzDn-1gkrfq-gHE',  
//     privateKey: '6iDinp9jZEtSKfrClI2_6TWx_Qtd7cLM7YVLlTooS6g'
//   }
console.log(vapidKeys);

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c89sWmfFF-s:APA91bG2mdB1T6FZt2iXTPNzedhv-JOiVCIAd4W-FqWdANmio7ARznNllozAZ3VtU6iJb37VNWycKOa5JqwpKppZNgPHYmU4rmi77NvOaJJAz7Wh49Yv9npxgJTjsf5_syCtng4wKhxr","expirationTime":null,"keys":{"p256dh":"BIVbkRjBOXt3PUxe4HR5j6nTsX7lj2W7p9gdTNmS0igfvymXpHkWgxWFeANpCfCOfoWXT1F-2l4tdOG3JsQxYl8","auth":"xVweFhUSWxvJvEvMgRPC2Q"}};

push.sendNotification(sub, 'text messege');