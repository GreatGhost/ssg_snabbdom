// h课堂
import h from'./study/h'
import patch from './study/patch'

// const vNode=h('h1',{},'你好')
const vNode=h('ul',{},[
    h('li',{},'A'),
    h('li',{},'B'),
    h('li',{},'C'),
    h('li',{},[
        h('span',{},'d'),
        h('span',{},'e'),
        h('span',{},'f'),

    ])
])
const container=document.getElementById('container')
btn.addEventListener('click',function(){
    console.log('测试')
    patch(container,vNode)
  
})
