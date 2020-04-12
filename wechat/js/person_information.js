let person_information={
    template:`
    <div class="person_container">
    <div class="person_header_container">
        <div class="personal_header">
            <i @click="back"></i>
            <div class="person_infor">个人信息</div>
        </div>
    </div>
    <!--  -->
    <div class="personal_middle">
        <div class="person_headerimg">
            <div class="person_headerimg_container">
                <div class="word_content">头像</div>
                <div class="right_container">
                    <div class="img_container">
                        <img :src="$route.query.img" alt="">
                    </div>
                    <div>
                        <i class="right_item"></i>
                    </div>
                </div>
                

            </div>

        </div>   
        
        
        <!--  -->

        <div class="detail_item">
            <div class="detail_container">
                <div>昵称</div>
                <div class="name_container">
                    <div class="detail_name">{{$route.query.name}}</div>
                    <i class="right_item"></i>
                </div>
            </div>
        </div>

        <div class="detail_item">
            <div class="detail_container">
                <div>微信号</div>
                <div class="name_container">
                    <div class="detail_name">{{$route.query.account}}</div>
                </div>
            </div>
        </div>

        <div class="detail_item">
            <div class="detail_container">
                <div>二维码名片</div>
                <div class="name_container">
                    <i class="detail_QR"></i>
                    <i class="right_item"></i>
                </div>
            </div>
        </div>


        <div class="detail_item">
            <div class="detail_container">
                <div>更多</div>
                <div class="name_container">
                    <i class="right_item"></i>
                </div>
            </div>
        </div>

        <div class="detail_item mixed">
            <div class="detail_container">
                <div>我的地址</div>
                <div class="name_container">
                    <i class="right_item"></i>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    
    
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
export {person_information}