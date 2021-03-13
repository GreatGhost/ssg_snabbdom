
// 虚拟节点，返回参数内容
export default function vnode(sel, data, children, text, ele){
    return {sel, data, children, text, ele}
}