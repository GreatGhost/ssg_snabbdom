import vnode from './vnode'
import createElement from './createElement'
export default function patch(oldVnode,newVnode){

    // 判断老虚拟节点是否是DOM节点,如果是DOM节点，赋值一个vnode
    if(oldVnode.sel===''|| oldVnode.sel===undefined){
        oldVnode=vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode);
    }
    if(oldVnode.key===newVnode.key && oldVnode.sel===newVnode.sel){
        console.log('同一个节点')
    }else{
        console.log('不是同一个节点，暴力插入新的，删除旧的')

        let newNodeEle=createElement(newVnode)
        // 插入到老
        if(oldVnode.ele.parentNode && newNodeEle){
            oldVnode.ele.parentNode.insertBefore(newNodeEle,oldVnode.ele)
        }

        // 删除老节点
        oldVnode.ele.parentNode.removeChild(oldVnode.ele)
    }
}