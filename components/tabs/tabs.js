// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldeItemTap(e){
      //获取 suoyin
      const {index}=e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
      // //获取数组
      // let tabs =JSON.parse(JSON.stringify(this.data.tabs));
      // //循环数组
      // tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
      // this.setData({
      //   tabs
      // })
    }
  }
})
