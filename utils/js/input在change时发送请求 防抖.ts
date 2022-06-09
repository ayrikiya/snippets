/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:53:40
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:55:13
 * @Description: 填写简介
 */

// inputchange时post cat信息 需要被防抖处理的函数 主要发送联想目录请求
handleInputChange = async (inputVal)=> {
  const data = await post('/productcatalog.do?method=searchCataInfoNew', { word: inputVal})
  if(data.data){
      this.setState({
          catSuggestList: data.data.slice(0, 10)
      })
  } else if (data.message){
      this.setState({
          catSuggestList: []
      })
  }
}

// 事件防抖
debounce(func, wait) {
  let timer = null;

  return function() {
      const context = this;
      const args = arguments;
      timer && clearTimeout(timer);
      timer = setTimeout(function() {
          func.apply(context, args)
      }, wait)
  }
}

// 1.inputChange处理函数 input输入时触发，将input值推进state。执行被防抖处理后的请求函数。
handleInputChangeDebouce = (e)=>{
  
  let inputVal = e.target.value;
  this.setState({
      curPostType: 'keyword',
      inputVal,
      selectedCatValue: '',
      selectedCatName: '',
  })
  //防抖处理
  // 2. 防抖debounce包裹后的函数。就是debounce返回的函数。 0.5秒后执行 如果0.5秒内有新change事件触发 清空函数运行计时器重新计时
  this.debounce(this.handleInputChange, 500)(inputVal)
}