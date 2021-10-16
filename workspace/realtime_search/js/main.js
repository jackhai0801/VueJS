var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {
        keyword: function(newValue, oldValue){
            // console.log(newValue)
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    beforeUpdate(){
    	this.test = 20
    	console.log('beforeUpdate : ' + this.keyword)
    },
    updated(){
    	console.log('updated : ' + this.keyword);
    },
    methods: {
        getAnswer: function(){
            if(this.keyword === ''){
                this.items = null
                this.message = ''
                return
            }

            this.message = 'Loading...'
            var vm = this
            var params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(response){
                    console.log(response)
                    vm.items = response.data
                })
                .catch(function(error){
                    vm.message = 'Error! ' + error
                })
                .finally(function(){
                    vm.message = ''
                })
        }
    }
})