let address_book = {
    template: `
    <div class="infor_container_">
    <div class="header_">
        <div class="chet_header">
            <div>
                <i class="peleft" @click="back"></i>
            </div>
            <div>
                <i class="more"></i>
            </div>
        </div>
    </div>

    <!-- 中间 -->
    <div class="infor_middle">
        <div class="infor_content">
            <div class="infor_left_container">
                <img :src="$route.query.img" alt="">
            </div>
            <div class="infor_right_container">
                <p class="infor_name">{{$route.query.name}}</p>
                <div class="person_container">
                    <div>微信号：{{$route.query.waccount}}</div>
                    <div class="infor_area">地区：{{$route.query.area}}</div>
                </div>
            </div>

        </div>

    </div>

    <!-- 下 -->
    <div class="infor_footer">
        <div class="footer_item">
            <span>设置标签与备注</span>
            <i class="infor_right"></i>
        </div>
        <div class="footer_item">
            <span>朋友权限</span>
            <i class="infor_right"></i>
        </div>

        <!--  -->
        <div class="footer_item mixed">
            <span>朋友圈</span>
            <i class="infor_right"></i>
        </div>
        <div class="footer_item">
            <span>更多信息</span>
            <i class="infor_right"></i>
        </div>

        <!--  -->

        <div class="footer_item mixed last">
            <i class="blue_infor"></i>
            <span>发消息</span>
        </div>
        <div class="footer_item last">
            <i class="blue_video"></i>
            <span>音视屏通话</span>
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
export { address_book };