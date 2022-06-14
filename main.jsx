console.log("hello react");
console.log("webpack-dev-server")
import React from 'react';
import ReactDOM from 'react-dom';
import Test from '@component/Test';
import Test2 from '@component/Test2'
// const DivBox = React.createElement('div',{title:"这是我创建的div"},'我是div的内容');
const DivBox = (
    <div className="box">
        <div className="title">我是中国人</div>
        <Test></Test>
        <Test2></Test2>
    </div>
)
console.log({DivBox})
ReactDOM.render(DivBox,document.getElementById('root'))