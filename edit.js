Vue.component("page-header",{
    template: '<header class="app-header"><h1>Video Pacha TV</h1><span><a href="new.html">Agregar Video</a></span></header>'
})

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

let appEdit = new Vue({
    el: "#appEdit",
    data: {
        id: urlParams.get("id"),
        title: null,
        url: null,
        desc: null
    },
    mounted() {
        console.log(`http://localhost:3000/videos/${this.id}`)
        fetch(`http://localhost:3000/videos/${this.id}`)
        .then(response => response.json())
        .then(data => {
            this.title = data.title
            this.url = data.url
            this.desc = data.desc
        })
    },
    methods:{
        sendVideo: function() {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: this.title, url: this.url, desc: this.desc })
              };
            
            fetch(`http://localhost:3000/videos/${this.id}`, requestOptions)
            .then(response => response.json())
            .then(data => (this.postId = data.id))
            window.location.href = "index.html"
        }
    }
})