$(function () {    
    //WhatsApp
    $(function () {
        $('#myButton').floatingWhatsApp({
            phone: '573506267374',
            popupMessage: '¿En que puedo ayudarlo?',
            message: "",
            showPopup: true,
            showOnIE: false,
            headerTitle: 'Bienvenido',
            headerColor: '#00a65a',
            backgroundColor: '#00a65a',
            buttonImage: '<img src="assets/img/whatsapp.png"/>',
            position: "right"
        });
    });
})