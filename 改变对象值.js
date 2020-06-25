let target={
    x: 10,
    y: 20
}
let handler = {
    get: (obj,prob) => prop.x = 20
}
target = new Proxy(target,handler)

