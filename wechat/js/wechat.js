let we_chat = {
    template: `
    <div class="middle">
        <div class="item_container" v-for="(item,index) in userList" @click="chatClick(index)">
            <div class="head_image">
                <img :src="item.img" alt="">
            </div>
            <div class="chat_content">
                <div class="chat_header">
                    <div>{{item.username}}</div>
                    <div class="item_time">{{item.time}}</div>
                </div>
                <article>{{item.centent}}</article>
            </div>
        </div>
    </div>
    
    `,
    data() {
        return {
            userList: [
                { img: "image/1.jpg", username: "张钰", centent: "好的", time: "11:24" },
                { img: "image/2.jpg", username: "刘林", centent: "流口水大浪街道", time: "11:24" },
                { img: "image/3.jpg", username: "汪永", centent: "按实际大阿大声道", time: "13:54" },
                { img: "image/4.jpg", username: "盛吉伟", centent: "刷卡机大事哦", time: "1:05" },
                { img: "image/5.jpg", username: "小天", centent: "jajskka", time: "23:36" },
                { img: "image/6.jpg", username: "杰克辣五", centent: "华U盾那就买", time: "8:49" },
                { img: "image/7.jpg", username: "晒哥", centent: "我我哦啊接都爱", time: "16:18" }

            ]
        }
    },
    methods:{
        chatClick(index){
            console.log(index);
            this.$router.push({
                path:"/chat",
                query:{
                    img:this.userList[index].img,
                    username:this.userList[index].username,
                    centent:this.userList[index].centent
                }
            });
            
        }

    }
}
export { we_chat };