//console.log('我是js2')
let n = 1 //值会变化时用let
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200) {
            const array = JSON.parse(request.response) //把json字符串变成js数组
            array.forEach(item => {//将每个元素叫做item
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li) //<ul id="xxx">
            });
            n += 1
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //console.log(request.responseXML)
            //console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            //getElementsByTagName得到的是伪数组
            console.log(text.trim())
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './3.html')
    request.onload = () => {
        console.log('request.response:' + request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './2.js')
    request.onload = () => {
        //console.log('request.response:' + request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './style.css') //readyState=1
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx还是失败4xx 5xx
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log("下载完成")
            console.log(request.status) //打印http状态码
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }

    request.send()//readyState=2
}

