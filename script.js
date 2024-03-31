let body = document.querySelector('body')
let form = document.querySelector('.form')
let select = document.querySelector('.select')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('.progcess')
let res = document.querySelector('.res')
let uzi = document.querySelector('#uzi')
let span = document.querySelector('#span1')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let qiymat = inp1.value-inp2.value
    if(select.value == "ota"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Kalla ishlaydimi?'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Otangizni yoshi '+ qiymat + ' ga teng'
            console.log('Otaning yoshi topildi!')
        }  
    }else if(select.value == "ona"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Kalla ishlaydimi?'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Onangizni yoshi '+ qiymat + ' ga teng'
            console.log('Onaning yoshi topildi!')
        }
    }else if(select.value == "aka"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Kalla ishlaydimi?'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Akangizni yoshi '+ qiymat + ' ga teng'
            console.log('Akaning yoshi topildi!')
        }
    }else if(select.value == "opa"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Kalla ishlaydimi?'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Opangizni yoshi '+ qiymat + ' ga teng'
            console.log('Opaning yoshi topildi!')
        }
    }else if(select.value == "qushni"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Kalla ishlaydimi?'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Qo`shningizni yoshi '+ qiymat + ' ga teng'
            console.log('Qo`shnining yoshi topildi!')
        }
    }else if(select.value == "tanish"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Kalla ishlaydimi?'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Tanishingizni yoshi '+ qiymat + ' ga teng'
            console.log('Tanishning yoshi topildi!')
        }
    }
    else if(select.value == "uzi"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Yosh bolamisan ukam'
        console.log('Noto`g`ri yil kiritildi!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'O`zingizni yoshingiz '+ qiymat + ' ga teng'
            console.log('O`zining yoshi topildi!')
        }
    }
})
let h2 = document.createElement('h2')
        res.append(h2)

let div = document.createElement('div')
        div.setAttribute('class', 'btn-wrap')
            
let newBtn1 = document.createElement('button')
        newBtn1.setAttribute('class', 'newbtn1')

let newBtn2 = document.createElement('button')
        newBtn2.setAttribute('class', 'newbtn2')
        


select.addEventListener('click', (e)=>{
    e.preventDefault()
    if(select.value == "uzi"){
        span.style.display = 'none'
        btn.style.display = 'none'
        
            h2.textContent = 'O`zingizni yoshingizni bilmaysizmi?'
            
            newBtn1.textContent = 'Bilmayman'
            
            newBtn2.textContent = 'Bilaman'
            div.append(newBtn1, newBtn2)
            body.append(res, div, div)
            
        }
    })
    newBtn1.addEventListener('click', ()=>{
        alert('Uyat uyat...!')
        span.style.display = 'flex'
            btn.style.display = 'inline-block'
            div.style.display = 'none'
            h2.remove()
    })

    newBtn2.addEventListener('click', ()=>{
        alert('Adashmangda!')
        div.style.display = 'none'
        h2.remove()
        span.style.display = 'flex'
        btn.style.display = 'inline-block'
        window.location.reload()
    })