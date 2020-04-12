let my_item = {
    template: `
    <div>
    <div class="my_page">
    <div class="item_container">
        <div class="head_image">
            <img :src="img" alt="" @click="personClick">
        </div>
        <div class="chat_content_account">
            <div class="chat_header name">
                <div class="name">{{name}}</div>
                <div class="item_time"></div>
            </div>
            <article class="wechat_account">微信号：{{account}}
                <i class="QR"></i>
                <i class="right" @click="forwardClick"></i>
            </article>
        </div>
    </div>

    <!-- 隔层 -->
    <div class="fix"></div>
    <!--  -->


    <div class="infor_container">
        <div class="pay_image">
        </div>
        <div class="infor_item newfriend">支付
            <i class="item_right"></i>
        </div>
    </div>
    <div class="fix"></div>
    <!--  -->


    <div class="infor_container">
        <div class="collect_image">
        </div>
        <div class="infor_item newfriend line">收藏
            <i class="item_right"></i>
        </div>
    </div>

    <div class="infor_container">
        <div class="photo_image">
        </div>
        <div class="infor_item newfriend line">相册
            <i class="item_right"></i>
        </div>
    </div>

    <div class="infor_container">
        <div class="card_image">
        </div>
        <div class="infor_item newfriend line">卡包
            <i class="item_right"></i>
        </div>
    </div>

    <div class="infor_container">
        <div class="face_image">
        </div>
        <div class="infor_item newfriend">表情
            <i class="item_right"></i>
        </div>
    </div>
    <div class="fix"></div>
    <div class="infor_container">
        <div class="set_image">
        </div>
        <div class="infor_item newfriend">设置
            <i class="item_right"></i>
        </div>
    </div>
</div>


// 下
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
            img: "image/2.jpg",
            name: "你的大叔",
            account: "hjy123456",
            pageIndex:4
        }
    },
    methods: {
        personClick() {
            this.$router.push({
                path:"/personal",
                query:{
                    img: this.img,
                    name:this.name,
                    account: this.account
                }
            });
        },
        forwardClick(){
            this.personClick();
        },
        firstClick(index){
            this.$router.push({
                path:"/"
            });
            this.pageIndex=index;
            this.showmessage="微信";
            this.flag=true
        },
        secondClick(index){
            this.$router.push({
                path:"/b"
            });
            this.pageIndex=index,
            this.showmessage="通讯录";
            this.flag=true;

        },
        thirdClick(index){
            this.$router.push({
                path:"/c"
            });
            this.pageIndex=index;
            this.showmessage="发现";
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
export { my_item };