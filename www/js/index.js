
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function welcome(){
    var name = document.getElementById("nama").value
    document.getElementById("namae").innerHTML = "WELCOME " + name
}

function msg1(){

    var nama = document.getElementById("namaForm").value
    var email = document.getElementById("emailForm").value
    var tel = document.getElementById("telForm").value
    var bank = document.getElementById("inputGroupSelect01").value

    document.getElementById("username").innerHTML = "Nama: " + nama
    document.getElementById("useremail").innerHTML = "Email: " + email
    document.getElementById("usertel").innerHTML = "Telefon: " + tel
    document.getElementById("userbank").innerHTML = "Bank: " + bank
}
