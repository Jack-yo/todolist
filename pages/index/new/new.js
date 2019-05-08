// pages/index/new/new.js

var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',

    length:'',

    text:'',

    radioItems:app.globalData.radioItems,

    isExist:'',

  },


  inputtitle:function(e)
  {
    this.setData({
      title:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('radio发生change事件，携带value值为：', options);

    var radioItems = app.globalData.radioItems, values = options.values;

    if (values!=-1) {  


      this.setData({
        text:radioItems[values].text,

        title: radioItems[values].name,
     });

      console.log(radioItems[values]);}

      this.setData({
        isExist: values,

        radioItems: radioItems
      })
},


   text:function(e){

       this.setData({

         length:e.detail.value.length,

    text:e.detail.value,
})},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

app.globalData.radioItems=this.data.radioItems;

  },


  openAlert: function () {
    
    if(this.data.title){
      
           console.log(this.data.title);
     

         if(this.data.isExist!=-1){

          let item= {name:this.data.title,text:this.data.text,checked:this.data.radioItems[this.data.isExist].checked};

          console.log(item.text);

          app.globalData.radioItems[this.data.isExist]=item;

           wx.navigateBack({
    
         })
        }

       else { 
  
               let item = { name: this.data.title, text: this.data.text, checked: false };

                       app.globalData.radioItems.push(item);

                   wx.redirectTo({
                      url: '../index',
                  })
              }    
}

 else {
      wx.showModal({
        content: '请输入标题',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });}   
 }})