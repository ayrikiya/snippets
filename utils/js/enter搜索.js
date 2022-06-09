/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:51:29
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:51:29
 * @Description: enter搜索
 */

// enter搜索
handleEnterPress = (e) => {
  if (this.isEnterPress(e) && !e.shiftKey) {
      
      e.preventDefault();
      this.handleSearch(this.state.searchValue)
  }
}

isEnterPress = (e)=>{
  const {nativeEvent: {code, keyCode}} = e;

  return code === "Enter" || code === "NumpadEnter" || keyCode === 13;
}