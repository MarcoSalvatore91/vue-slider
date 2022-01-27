console.log('Vue Ok!', Vue)

Vue.config.devtools = true;

const message = new Vue({
    el: '#root',

    data: {

        autoPlay: undefined,
        currentIndex: 0,
        images: [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
    ]},

    // #Function

    methods: {

        selectPage(index) {
            this.currentIndex = index        
        },

        previousImg() {
            if(this.currentIndex === 0){
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },

        nextImg() {
            if(this.currentIndex === this.images.length - 1){
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },

        isActive(index) {
            if(this.currentIndex === index)
            return true
        },

        startAutoPlay() {
            this.autoPlay = setInterval(this.nextImg, 3000)
        },

        stopAutoPlay() {
            clearInterval(this.autoPlay)
        }
    },

    created() {
        this.startAutoPlay();
    }
});
