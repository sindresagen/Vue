var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'These are socks',
        image: '/Socks/vmSocks-green.jpg',
        link: 'https://www.vg.no/',
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '/Socks/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: '/Socks/vmSocks-blue.jpg'
            }
        ],
        sizes: ["35-38", "39-42", "43-46"],
        cart: 0,
        
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        // deleteFromCart() {
        //     this.cart -= 1
        // },
    },
})