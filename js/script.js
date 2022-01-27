console.log('Vue Ok!', Vue)

Vue.config.devtools = true;

const message = new Vue({
    el: '#root',

    data: {
        currentIndex: 0,
        images: [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
    ]},

    // #Function

    methods: {
        previousImg() {
            this.currentIndex--
        },
        nextImg() {
            this.currentIndex++
        },
    }
});
