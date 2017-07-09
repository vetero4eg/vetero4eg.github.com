new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue',
        items: [
            {
                name: 'one',
                status: false
            },
            {
                name: 'two',
                status: true
            },
            {
                name: 'three',
                status: false
            },
            {
                name: 'four',
                status: false
            },
            {
                name: 'five',
                status: false
            }
        ],
        show: false
    },
    methods: {
        onClick: function() {
            alert(this.message);
        }
    }
})
