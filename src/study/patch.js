import vnode from './vnode'
import createElement from './createElement'
export default function(oldVnode,newVnode){

    // 判断老虚拟节点是否是DOM节点,如果是DOM节点，赋值一个vnode
    if(oldVnode.sel===''|| oldVnode.sel===undefined){
        oldVnode=vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode);
    }
    if(oldVnode.key===newVnode.key && oldVnode.sel===newVnode.sel){
        console.log('同一个节点')
    }else{
        createElement(newVnode,oldVnode.ele)
    }
}