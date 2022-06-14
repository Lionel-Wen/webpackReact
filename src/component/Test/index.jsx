import React from "react";
import {curryTest} from '../../util/curry';
import style from  './index.css'
import './index.css'
// 引入图片对象
import Rabbit from '../../assets/rabbit.png'
import wending from '../../assets/wending.png'
curryTest(1)(2);
const Test = () => {
    return (
        <div className={style.test}>我是测试
         <div className="less">less测试</div>
         <img src={Rabbit} alt="" className={style.png1} />
         {/* <div className="imageBox"> */}
            <img src={wending} alt="" className={style.png2}  />
            {/* <img src={require('../../assets/wending.png')} className={style.png2}></img> */}
         {/* </div> */}
         <img src="../../assets/qq.webp" className="qq" alt="" />
        </div>
    )
}


// class Test extends React.Component {
//     constructor(props) {
//       super(props)
//     }

//     render() {
//         return <div className="Test">Test</div>
//     }
// }

export default Test;