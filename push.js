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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eyHuyHFwo_k:APA91bFIvy-M62WBYGo9QzbF1t7W2soXhsY6eU3ZfLZcY9H8r-7Vos29lIUpevcMT-UmvpNfMSt-tYzudMdRZRS9xo7sTymc-3FRTwthC-lgwQuW0yGSYBg2I_fRrKyCg_Teg5aT4VNp","expirationTime":null,"keys":{"p256dh":"BOYlyucR5T6rmW2Dg2y9p5wHe8m1EQsife6kaWRkez4_L51UjZuQ5JNckf5VRhcygZ5E69YJGqdLSUKVTZxzMRM","auth":"ZgOrB2K9WkSlg9DH61vjfQ"}}


setInterval(function(){
    push.sendNotification(sub, 'Welcome user').catch(e =>{
        console.log(e);
    });
}, 10000);

