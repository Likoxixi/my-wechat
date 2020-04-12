import { we_chat } from "./wechat.js";
import { my_item } from "./my_item.js";
import { infor_list } from "./infor_list.js";
import { find_list } from "./find_list.js";
import { chat_page } from "./chat_page.js";
import { main_page } from "./main_page.js";
import { person_information } from "./person_information.js";
import { address_book } from "./address_book.js";
import { friend_circle } from "./friend_circle.js";

let routes = [
    {
        path: "/", component: main_page
    },
    {
        path: "/chat", component: chat_page
    },
    {
        path: "/personal", component: person_information
    },
    {
        path: "/address", component: address_book
    },
    {
        path: "/friendcircle", component: friend_circle
    },
    { path: "/b", component: infor_list },
    { path: "/c", component: find_list },
    { path: "/d", component: my_item }
];
let routeobj = new VueRouter({
    routes: routes
});
let vm = new Vue({
    el: ".app",
    router: routeobj,

});