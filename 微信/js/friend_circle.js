let friend_circle = {
    template: `
    <div class="friend_circle_container">
    <div class="friend_circle_header">
        <div class="icon_container">
            <i class="left" @click="back"></i>
            <i class="photo"></i>
        </div>
        <div class="friend_circle_word">你的大叔</div>

        <div class="friend_circle_img_container">
            <img src="image/2.jpg" alt="">
        </div>
    </div>


    <div class="saysay">
    <div class="saysay_container">
        <div class="friend_say_left">
            <img src="image/12.jpg" alt="">
        </div>
        <div class="friend_say_right">
            <div class="friend_content_">
                <span class="friend_-name">安然</span>
                <p>生日快乐（心凉了大半截）</p>
            </div>
            <div class="content_img">
                <img src="image/1.jpg" alt="">
            </div>
        </div>
    </div>
    <div class="circle_footer">
        <div class="time">1小时前</div>
        <i class="comment"></i>
    </div>
</div>
    
</div>
    `,
    methods:{
        back(){
            window.history.go(-1);
        }
    }
}
export { friend_circle };