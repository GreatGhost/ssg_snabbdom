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

// const myVnode=h('a',{props:{href:'https://www.baidu.com',target:'_blank'}},'尚硅谷')
// const myVnode=h('div','你好')

const myVnode=h('ul',[
    h('li','苹果'),
    h('li','例子'),
    h('div',[h('span','it'),h('span','css'),h('span','JavaScript')])
])
// 让虚拟节点上树

patch(container,myVnode);