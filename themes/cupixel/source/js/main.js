document.addEventListener('DOMContentLoaded', ()=>{
  // 初始化
  // $.Init()
  document.querySelector('#now-year').innerHTML = (new Date()).getFullYear()

  // let cupixel3DLogo = document.querySelector('.cupixel-logo.cupixel-logo-animation'), rotateX = 0, rotateY = 0
  // if (cupixel3DLogo) {
  //   window.addEventListener('pointermove', ev=>{
  //     rotateX = (ev.x - document.documentElement.clientWidth / 2) / document.documentElement.clientWidth
  //     rotateY = (ev.y - (document.documentElement.clientHeight > 700 ? 700 : document.documentElement.clientHeight) / 2) / (document.documentElement.clientHeight > 700 ? 700 : document.documentElement.clientHeight)
  //     // console.log({rotateX,rotateY});
  //     cupixel3DLogo.style.transform = 'rotate3d(-1, 0, 0, ' + (35 + rotateY * 10) + 'deg) rotate3d(0, -1, 0, ' + (45 - rotateX * 10) + 'deg)'
  //   })
  // }
  document.querySelector('[button-nav]').addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('show-menu')
  })

  document.querySelectorAll('article img').forEach(e=>{
    e.outerHTML += '<div class="img-caption">' + e.getAttribute('alt') + '</div>'
  })
})