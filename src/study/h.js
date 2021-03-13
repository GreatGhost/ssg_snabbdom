import vnode from './vnode'

// 简单版h
// 调用形态
// h('div',{},'你好')
// h('div',{},[])
// h('div',{},h())
export default function(sel,data,c){
    // 检查参数个数
    if(arguments.length!=3){
        throw new Error('对不起，h函数必须传入3个参数,因为我们是低配版h函数')
    }
    
    // 检查参数c类型

    if(typeof c==='number' || typeof c==='string'){
        return vnode(sel,data,undefined,c,undefined);
    }else if(Array.isArray(c)){
        // 说明传入是数组形态
        let children=[];
        let length=c.length;
        for(let i=0;i<length;i++){
            if(!(typeof c[i]==='object'&& c[i].hasOwnProperty('sel'))){
                throw new Error('传入数组参数中有项不是h函数')
            }
            // child手机h函数返回vnode
            children.push(c[i]);
        }
        return vnode(sel,data,children,undefined,undefined);
    }else if(typeof c==='object' && c.hasOwnProperty('sel')){
        // 说明传入形态是三
        // 表示唯一一个子节点
        return vnode(sel,data,c,undefined,undefined);
    }else{
        throw new Error('传入参数有误，请重新传入');
    }
}
