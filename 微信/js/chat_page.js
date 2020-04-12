let chat_page = {
    template: `
    <div class="chat_container">
    <div class="header">
        <div class="chat_header_">
            <div>
                <i class="left_" @click="back"></i>
                <span class="name_">{{$route.query.username}}</span>
            </div>
            <div>
                <i class="more"></i>
            </div>
        </div>
    </div>
    <div class="chat_middle">
        <div class="friend_container">
            <div class="chat_img_container">
                <img :src="$route.query.img" alt="">
            </div>
        </div>
        <div class="chat_content_container">
            <div class="external_container">
                <span class="chat_content_">{{$route.query.centent}}</span>
            </div>
        </div>
    </div>
    <div class="chat_footer_">
        <div class="footer_overall">
            <div class="footer_left">
                <i class="voice"></i>

            </div>
            <input type="text" class="chat_input">
            <div class="footer_right">
                <i class="face"></i>
                <i class="add_"></i>
            </div>
        </div>
    </div>
</div>
    `,
    created(){
        console.log(this);

    },
    methods:{
        back(){
            window.history.go(-1);
        }
    }
}
export { chat_page }