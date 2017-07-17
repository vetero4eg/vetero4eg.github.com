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
        show: false,
        text: '',
        limit: 140
    },
    methods: {
        onClick: function() {
            alert(this.message);
        }
    },
    computed: {
        count: function() {
            return this.text.length;
        },
        disabled: function() {
            return (this.count<this.limit) ? false : true;
        }
    }
})
