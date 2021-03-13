// h课堂
// import h from'./study/h'

// const vNode1=h('div',{},'你好');
// const vNode2=h('div',{},[
//     h('span',{},'你好'),
//     h('div',{},[
//         h('p',{},'我是一顿饭')
//     ])
// ])

// const vNode3=h('div',{},h('span',{},'A'))
// console.log(vNode3);


import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

const patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])

const container = document.getElementById('container')
const btn = document.getElementById('btn')

const vNode1=h('div',[
    h('p',{key:'A'},'A'),
    h('p',{key:'B'},'B'),
    h('p',{key:'C'},'C'),
    h('p',{key:'D'},'D'),
])
const vNode2=h('div',[
    h('p',{key:'E'},'E'),
    h('p',{key:'A'},'A'),
    h('p',{key:'B'},'B'),
    h('p',{key:'C'},'C'),
    h('p',{key:'E'},'E'),
])
patch(container,vNode1)
// patch 修补
// 存在几种判断情形
// 1.没有传key值
// 2.后面插入，还是前面插入
// 3.父节点改变,就暴力拆除
// 4.同层比较

btn.addEventListener('click',function(){
    patch(vNode1,vNode2)
  
})
