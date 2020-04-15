const getJson = function (url) {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest(){
            xhr.open('GET','url',true);
            xhr.onreadystatechange=function () {
                if(this.readyState===4&&this.status===200){
                    resolve()
                }
                else{
                    const resJson = {code:this.status,reponse:this.response};
                    reject(resJson)
                }
            }
        };
        xhr.send();
    })
};