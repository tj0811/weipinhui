/**
 * Created by asus1 on 2017/1/17.
 */
function lunboqi(obj,objaImg){

    obj.style.width=objaImg[0].offsetWidth*objaImg.length+'px';
    var num=1;      //计数器
    var num2=3;     //计数器
    setInterval(function(){
        if(num<3) {
            sportFrame(obj, 'marginLeft',-(num *999)); // 运动框架运动
            num++;                         //计数器自增
        }
        else
        {
            if(num2>0) {
                num2--;
                sportFrame(obj,'marginLeft', -(num2 * 999));
            }
            else
            {
                num=1;       // 恢复计数器原始状态
                num2=3;
            }
        }
    },3000);
}