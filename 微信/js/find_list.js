let find_list = {
    template: `
<div class="trans_item">
<div class="container">
    <div class="header" v-if="flag">
        <div class="header_container">
            <span>发现</span>
            <div>
                <i class="search"></i>
                <i class="add"></i>
            </div>
        </div>
    </div>
   
    <div class="middle">
        <div class="infor_container circle">
            <div class="friendcircle_image">
            </div>
            <div class="infor_item newfriend" @click="friendClick">朋友圈
                <i class="item_right"></i>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="fix"></div>
        <!--  -->
        <div class="infor_container">
            <div class="scan_image">
            </div>
            <div class="infor_item newfriend line">扫一扫
                <i class="item_right"></i>
            </div>
        </div>
    
        <div class="infor_container">
            <div class="shark_image">
            </div>
            <div class="infor_item newfriend">摇一摇
                <i class="item_right"></i>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="fix"></div>
        <!--  -->
        <div class="infor_container">
            <div class="see_image">
            </div>
            <div class="infor_item newfriend line">看一看
                <i class="item_right"></i>
            </div>
        </div>
    
        <div class="infor_container">
            <div class="search_image">
            </div>
            <div class="infor_item newfriend">搜一搜
                <i class="item_right"></i>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="fix"></div>
        <!--  -->
    
        <div class="infor_container">
            <div class="near_image">
            </div>
            <div class="infor_item newfriend">附近的人
                <i class="item_right"></i>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="fix"></div>
        <!--  -->
        <div class="infor_container">
            <div class="shop_image">
            </div>
            <div class="infor_item newfriend line">购物
                <i class="item_right"></i>
            </div>
        </div>
    
        <div class="infor_container">
            <div class="game_image">
            </div>
            <div class="infor_item newfriend">游戏
                <i class="item_right"></i>
            </div>
        </div>
    
        <!-- 隔层 -->
        <div class="fix"></div>
        <!--  -->
        <div class="infor_container">
            <div class="routine_image">
            </div>
            <div class="infor_item newfriend">小程序
                <i class="item_right"></i>
            </div>
        </div>
    
    
        <!--  -->
    
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
            pageIndex: 3,
            flag: true,
        }
    },
    methods: {
        friendClick() {
            this.$router.push({
                path: "/friendcircle"
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
export { find_list };
