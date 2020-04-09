var request = XMLHttpRequest()
    request.open('method','url')
    request.onreadystatechange = function () {
        if(request.readyState ===4 &&request.status===200){
            console.log(request.reposeText)
        }
    }
    request.send()