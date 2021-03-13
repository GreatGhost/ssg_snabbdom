// h课堂
import h from'./study/h'
import patch from './study/patch'

const vNode=h('h1',{},'你好')
const container=document.getElementById('container')
btn.addEventListener('click',function(){
    console.log('测试')
    patch(container,vNode)
  
})
