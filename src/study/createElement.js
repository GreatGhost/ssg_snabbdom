// 真正创建节点
// 插入到元素之前
export default function(vnode,pivot){
    console.log('将',vnode,'插入到标杆',pivot,'前');
    // 创建一个dom节点，但是现在DOM节点还是孤儿节点
    let domNode=document.createElement(vnode.sel);
    if(vnode.text!='' && (vnode.children===undefined||vnode.children.length===0 )){
        // vnode内部是文字
        // 孤儿节点上树
        domNode.innerText=vnode.text;
        pivot.parentNode.insertBefore(domNode,pivot)
    }
}