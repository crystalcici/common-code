var list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
]
function convert(arr) {
    let tree = [];
    arr.map((it, idx, array) => {
        let parent = it.parentId;

        if (parent === 0) {  // 根节点
            tree.push(it);
        } else {
            array.map(item => {
                if (item.id === parent) {
                    if (!item.children) {
                        item.children = [];
                    }

                    item.children.push(it);
                }
            });
        }
    });

    return tree;
}
console.log(convert(list))