// 由一个组件, 向上找到最近的指定组件
function findComponentUpward(context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name
    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
    }
    return parent
}

// 由一个组件, 向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
    let parents = []
    const parent = context.$parent
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent)
        return parents.concat(findComponentsUpward(parent, componentName))
    }
    return parents
}

// 由一个组件, 向下找到最近的指定组件
function findComponentDownward(context, componentName) {
    const children = context.$children
    let child = null
    if (children.length) {
        for (const c of children) {
            const name = c.$options.name
            if (name === componentName) {
                child = c
                break;
            } else {
                child = findComponentDownward(c, componentName)
                if (child) break
            }
        }
    }

    return child
}

// 由一个组件, 向下找所有的指定的组件
function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) componentName.push(child)
        const foundChildren = findComponentsDownward(child, componentName)
        return components.concat(foundChildren)
    }, [])
}

export {findComponentUpward, findComponentsUpward, findComponentDownward, findComponentsDownward}