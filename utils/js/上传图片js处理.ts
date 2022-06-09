/*
 * @Author: 王荣
 * @Date: 2022-06-09 14:55:31
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 14:55:31
 * @Description: 填写简介
 */

upLoadAvatar = (e:React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.files)
//    console.log(document.querySelector('#avatar-upload')?.files) 
  const filesList = e.target.files;
  const file = filesList?.[0];

  const acceptType = ['image/jpeg','image/jpg','image/png',]
  
  const _this = this;

  if(file?.type && !acceptType.includes(file?.type)){
      // 格式错误

  }

  if(file){
      const size = file.size/(2**20);
      let width:number,height:number;
      
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(theFile){
          let img = new Image();
          theFile && (img.src = theFile?.target?.result as string)
          console.log('readthis',this)
          const readThis = this;
          img.onload = function(){
              const imgLabel:any = this;
              console.log(imgLabel.width,imgLabel.height)
              width = imgLabel.width;
              height = imgLabel.height;

              if(size < 5 && (width < 800) && height < 800){

              uploadPic({userId: _this.state.userId, picFile:readThis.result}).then((data)=>{
                      console.log('上传成功',data)


                  })

              }else{
                  // 尺寸 大小错误
              }

          }

      }

  }
}