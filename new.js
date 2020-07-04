Vue.component("page-header",{
    template: '<header class="app-header"><h1>Video Pacha TV</h1><span><a href="new.html">Agregar Video</a></span></header>'
})

let app_new = new Vue({
    el : "#appNew",
    data: {
        title: null,
        url: null,
        desc: null
    },
    methods : {
        sendVideo: function() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: this.title, url: this.url, desc: this.desc })
              };
            
            fetch("http://localhost:3000/videos", requestOptions)
            .then(response => response.json())
            .then(data => (this.postId = data.id))
            window.location.href = "index.html"
        }
    }
})