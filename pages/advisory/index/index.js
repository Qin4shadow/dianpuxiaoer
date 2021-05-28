import common from "../../../utils/public.js";
const app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        tabs: [{
                id: 0,
                name: "新闻",
                isActive: true
            },
            {
                id: 1,
                name: "事件",
                isActive: false
            },
            {
                id: 2,
                name: "采访",
                isActive: false
            }
        ],
        dataList: []
    },
    handleItemChange(e) {
        const {
            index
        } = e.detail;
        let tabs = JSON.parse(JSON.stringify(this.data.tabs));
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData({
            tabs
        })
    },
    getRequest() {
        //发送网络请求
        wx.request({
            url: 'https://ku.qingnian8.com/school/list.php',
            data: {
                num: 5,
                page: 1
            },
            success: res => {
                res.data.forEach(item => {
                    // var time =item.posttime*1000
                    // var d = new Date(time);
                    // console.log(d)
                    item.title = common.getStrLen(item.title, 10)
                    item.posttime = common.getDate(item.posttime, "Y-m-d")
                })
                this.setData({
                    dataList: res.data
                })
            }
        })
    },
    // 监听页面加载
    onLoad: function (option) {
        this.getRequest();
    }
});