const app = getApp();

Page({
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		hidden: true,
		current: 0,lines: 0,
		swiperlist: [{
			id: 0,
			url: '/img/4x3-1.jpg',
			type: 1
		}, {
			id: 1,
			url: '/img/4x3-2.jpg',
			type: 2

		}, {
			id: 2,
			url: '/img/4x3-3.jpg',
			type: 3
		}, {
			id: 3,
			url: '/img/4x3-4.jpg',
			type: 4
		}],
		iconList: [{
			id: 1,
			icon: 'questionfill',
			url: '/img/fenlei/1.png',
			color: 'red',
			name: '宣传',
			type: 1
		}, {
			id: 2,
			icon: 'info',
			url: '/img/fenlei/2.png',
			color: 'orange',
			name: '招聘',
			type: 2
		}, {
			id: 3,
			icon: 'info',
			url: '/img/fenlei/3.png',
			color: 'yellow',
			name: '运营',
			type: 3
		}, {
			id: 4,
			icon: 'info',
			url: '/img/fenlei/4.png',
			color: 'olive',
			name: '耗材',
			type: 4
		}, {
			id: 5,
			icon: 'info',
			url: '/img/fenlei/5.png',
			color: 'green',
			name: '售后',
			type: 5
		}, {
			id: 6,
			icon: 'info',
			url: '/img/fenlei/1.png',
			color: 'blue',
			name: '培训',
			type: 6
		}],
		videosrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
		dataList:[]
	}
});
