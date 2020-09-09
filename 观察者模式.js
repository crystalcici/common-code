//观察者
class observer {
    constructor() {
    }
    update (val) {

    }
}
// 观察者列表
class observerList {
    constructor() {
        this.observerList = []
    }
    add (observer) {
        return this.observerList.push(observer);
    }
    remove (observer) {
        this.observerList = this.observerList.filter(item => item !== observer)
    }
    count () {
        return this.observerList.length;
    }
    get (index) {
        return this.observerList[index]
    }
}
//目标
class Subject {
    constructor() {
        this.observers = new observerList();
    }
    addObserver (observer) {
        this.observers.add(observer)
    }
    removeObserver (observer) {
        this.observers.remove(observer);
    }
    notify(...args) {
        let oldCount = this.observers.count();
        for (let index = 0; index < oldCount; index +=1){
            this.observers.get(i).update(...args);
        }
    }
}
