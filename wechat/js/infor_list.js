let infor_list = {
    template: `
    <div class="trans_item">
        <div class="container">
            <div class="header" v-if="flag">
                <div class="header_container">
                    <span>通讯录</span>
                    <div>
                        <i class="search"></i>
                        <i class="add"></i>
                    </div>
                </div>
            </div>
           
            <div class="middle">
                <div class="infor_container">
                    <div class="infor_image">
                    </div>
                    <div class="infor_item_ newfriend line">新的朋友</div>
                </div>
        
                <div class="infor_container">
                    <div class="infors_image">
                    </div>
                    <div class="infor_item_ chats line">群聊</div>
                </div>
        
                <div class="infor_container">
                    <div class="label_image">
                    </div>
                    <div class="infor_item_ newfriend line">标签</div>
                </div>
        
                <div class="infor_container">
                    <div class="offical_image">
        
                    </div>
                    <div class="infor_item_ newfriend line">公众号</div>
                </div>
        
                <!-- 隔层 -->
                <div class="interlayer">
                    <span>A</span>
                </div>
        
                <div class="good_friend" v-for="(item,index) in Alist" @click="addressClick(index)">
                <div class="good_friend_container">
                <img :src="item.img" alt="">
                </div>
                  <div class=good_friend_word>
                  <span>{{item.name}}</span>
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
            Alist: [
                { img: "image/11.jpg", name: "aaa",waccount:"aaa190kliu",nickname:"LY-66-o" ,area:"江苏南京"},
                { img: "image/12.jpg", name: "安然" ,waccount:"anran1999",nickname:"AR" ,area:"江西上饶"},
                { img: "image/13.jpg", name: "艾特" ,waccount:"lhy15266871079",nickname:"LY-66-o",area:"山东济南"}
            ],
            flag: true,
            pageIndex:2
        }
    },
    methods:{
        addressClick(index){
            this.$router.push({
                path:"/address",
                query:{
                    img:this.Alist[index].img,
                    name:this.Alist[index].name,
                    waccount:this.Alist[index].waccount,
                    nickname:this.Alist[index].nickname,
                    area:this.Alist[index].area
                }
            });

        },
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


    }

}
export { infor_list };