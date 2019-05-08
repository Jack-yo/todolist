//index.js
//获取应用实例

var app=getApp();

Page({
  data: {
    radioItems: app.globalData.radioItems,
   
    radioItems1:app.globalData.radioItems1,

    isExists:'',
  },


  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems, values = e.detail.value;
   
   if(radioItems[values].checked)radioItems[values].checked=false; else radioItems[values].checked=true;

                                  
    this.setData({
      radioItems: radioItems
    });

       console.log(radioItems[values]);
  },



  add: function (e) {

    wx.redirectTo({
      url: 'new/new?values=-1',
    })

  },



    
  
onLoad: function (options) {

    this.setData({
      radioItems: app.globalData.radioItems,

    })
  },

 
  task: function (e) {

    let values = e.currentTarget.id;

    console.log(e.currentTarget.id);


    wx.navigateTo({
      url: 'new/new?values=' + values,
    })


  },
   

     onUnload:function(){

      app.globalData.radioItems=this.data.radioItems;

       console.log(app.globalData.radioItems);
     },

 
  delete: function(e){

   let values=e.currentTarget.id;

   app.globalData.radioItems.splice(values,1);

    console.log(app.globalData.radioItems);

    wx.redirectTo({
      url: '../index/index',
    })
   }
});





