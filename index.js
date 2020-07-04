
Vue.component("page-header",{
    template: '<header class="app-header"><h1>Video Pacha TV</h1><span><a href="new.html">Agregar Video</a></span></header>'
})


let app = new Vue({
    el: "#app",
    data () {
        return {
            showModal: false,
            videos: null
        }
    },
    mounted() {
        fetch("http://localhost:3000/videos")
        .then(response => response.json())
        .then(data => this.videos = data)
    },
    methods: {
        deleteVideo: function(elemId) {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
              };
            
            fetch(`http://localhost:3000/videos/${elemId}`, requestOptions)
            .then(response => response.json())
            .then(data => (this.postId = data.id))
            window.location.href = "index.html"
        }
    }
})

