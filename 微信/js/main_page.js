import { we_chat } from "./wechat.js";
import { my_item } from "./my_item.js";
import { infor_list } from "./infor_list.js";
import { find_list } from "./find_list.js";
let main_page = {
    template: `
    <div class="trans_item">
    <div class="container">
        <div class="header" v-if="flag">
            <div class="header_container">
                <span>微信</span>
                <div>
                    <i class="search"></i>
                    <i class="add"></i>
                </div>
            </div>
        </div>
       
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
    </div>
    <div class="footer_container">
        <div class="foot_bar">
            <div class="bar_item" @click="firstClick(1)">
                <div class="nav_item first" :class="{'active':pageIndex==1}"></div>
                <div class="name_item" :class="{'bgdcolor':pageIndex==1}">微信</div>
            </div>
            <div class="bar_item" @click="secondClick(2)">
                <div class="nav_item second" :class="{'active':pageIndex==2}"></div>
                <div class="name_item" :class="{'bgdcolor':pageIndex==2}">通讯录</div>
            </div>
            <div class="bar_item" @click="thirdClick(3)">
                <div class="nav_item third" :class="{'active':pageIndex==3}"></div>
                <div class="name_item" :class="{'bgdcolor':pageIndex==3}">发现</div>
            </div>
            <div class="bar_item" @click="LastClick(4)">
                <div class="nav_item fourth" :class="{'active':pageIndex==4}"></div>
                <div class="name_item" :class="{'bgdcolor':pageIndex==4}">我</div>
            </div>
        </div>
    </div>
</div>
    `,

    data() {
        return {
            transName: "leftToright",
            pageIndex:1,
            flag: true,
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
    components: {
        "wechat": we_chat,
        "myitem": my_item,
        "inforlist": infor_list,
        "findlist": find_list

    },
    methods: {
        firstClick(index){
            this.$router.push({
                path:"/"
            });
            this.pageIndex=index;
            this.flag=true
        },
        secondClick(index){
            this.$router.push({
                path:"/b"
            });
            this.pageIndex=index,
            this.flag=true;

        },
        thirdClick(index){
            this.$router.push({
                path:"/c"
            });
            this.pageIndex=index;
            this.flag=true;
        },
        LastClick(index){
            this.$router.push({
                path:"/d"
            });
            this.pagrIndex=index;
            this.flag=false;
        },

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
export { main_page }