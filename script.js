let app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola DoctaDevs!',
        mostrar: false,
        visible: false,
        filtroCategoria: '',
        productos: [
            {
                nombre:'Mouse',
                categoria:'Periferico',
                precio:500,
                img:'https://waitforit.com.ar/doctacommerce/mouse.png'
            },
            {
                nombre:'Teclado',
                categoria:'Periferico',
                precio:10000,
                img:'https://waitforit.com.ar/doctacommerce/teclado.png'
            },
            {
                nombre:'Memoria RAM',
                categoria:'Hardware',
                precio:4700,
                img:'https://waitforit.com.ar/doctacommerce/memoria.png'
            },
            {
                nombre:'Joystick',
                categoria:'Games',
                precio:6500,
                img:'https://waitforit.com.ar/doctacommerce/joystick.png'
            },
            {
                nombre:'Monitor',
                categoria:'Pantalla',
                precio:16000,
                img:'https://waitforit.com.ar/doctacommerce/monitor.png'
            },
            {
                nombre:'Auriculares',
                categoria:'Audio',
                precio:8500,
                img:'https://waitforit.com.ar/doctacommerce/auris.png'
            },
        ]
    }
})

