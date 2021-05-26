const app = getApp();
Page({
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		TabbarBot: app.globalData.tabbar_bottom,
		hidden: true,
		arraylist:[{
			id: 1,
			name: "秦1",
			phone: "110",
			address: "山西太原",
			checked: false
		},{
			id: 2,
			name: "秦2",
			phone: "120",
			address: "山西榆次",
			checked: true
		}]
	},
	onLoad: function (option) {

	},
	// add: function () {
	// 	let that = this;
	// 	wx.showModal({
	// 		title: '提示',
	// 		content: '是否获取微信的收货地址？',
	// 		success(res) {
	// 			if (res.confirm) {
	// 				that.wxaddress();
	// 			} else if (res.cancel) {
	// 				wx.redirectTo({
	// 					url: '/pages/address/add/index'
	// 				});
	// 			}
	// 		}
	// 	});
	// },
	//获取微信的收货地址
	wxaddress: function () {
		let that = this;
		wx.getSetting({
			success: res => {
				if (!res.authSetting['scope.address']) {
					wx.chooseAddress({
						success(res) {
							console.log(res)
							/*console.log(res.userName)
							console.log(res.postalCode)
							console.log(res.provinceName)
							console.log(res.cityName)
							console.log(res.countyName)
							console.log(res.detailInfo)
							console.log(res.nationalCode)
							console.log(res.telNumber)*/
						}
					})
				}
			}
		});
	}
});
