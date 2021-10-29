function closeRTfun(ele) {
    frame = ele.target.parentNode.parentNode
    frame.style.display = 'none'
}
function resetRfun() {
    map.rotateTo(0)
}
function resetTfun(){
    map.setPitch(0)
}


map.on('zoom', function () {
    $('#zoomextent').html(parseInt(map.getZoom()))
})
map.on('rotate', function () {
    $('#rotationslidercurrent').html('Rotate: ' + map.getBearing().toFixed(1) + '&#xb0;')
    $('#rotationsliderinput').val(map.getBearing().toFixed(1))
});
map.on('pitch', function () {
    $('#tiltslidercurrent').html('Tilt: ' + map.getPitch().toFixed(1))
    $('#tiltsliderinput').val(map.getPitch().toFixed(1))
    document.getElementById('tiltimage').style.transform = "rotateX(" + map.getPitch().toFixed(1) + "deg )";
});

var dpi = 110;
function dpifunction(theTextInTheTextBox) {
    dpi = theTextInTheTextBox;
    map.resize()
}
Object.defineProperty(window, 'devicePixelRatio', {
    get: function () { return dpi / 70 }
});
var scale = 3
function scalefunction(theTextInTheTextBox) {
    scale = theTextInTheTextBox;
}
function genScreenshot() {
    html2canvas((document.body), { scale: scale, useCORS: true, allowTaint: true }).then(canvas => { //scale:影像解析度
        blob = canvas.toBlob(blob => {
            // 有了blob我們就可以使三 URL.createObjectURL建立url
            url = URL.createObjectURL(blob)
            link = document.createElement('a')
            link.href = url // 將url 設定給 a tage 的 href
            link.download = 'BRINFAITH.png'    // 設定 download name
            document.body.appendChild(link) // 加到指定元素之中，即可點擊下載
            link.click()
            link.remove()
        })
    })
    setTimeout(reset, 400)
}
function reset() {
    document.getElementsByName('DPI')[0].value = 110
    dpifunction(110)
}

map.addControl(new MapboxGeocoder({
    collapsed: 'true',
    accessToken: 'pk.eyJ1IjoiZWRtYW4iLCJhIjoiY2syNWs1ajk3MGM2NjNua3gxYTNhdWpkOSJ9.ngu-SlVjhLdLBPyDFFsIBw',
    mapboxgl: mapboxgl
}));

map.addControl(new mapboxgl.NavigationControl());
mbcontainer = $('.mapboxgl-control-container')[0]
mbtopright = document.getElementsByClassName('mapboxgl-ctrl mapboxgl-ctrl-group')[0]

zoomextent = document.createElement('button')
zoomextent.id = 'zoomextent'
zoomextent.title = 'Zoom extent'
zoomextent.innerHTML = parseInt(map.getZoom())

rotation = document.createElement('button')
rotation.id = 'rotation'
rotation.name = 'mapsubcontrol'
rotation.title = 'Rotate'
rotationimage = document.createElement('img')
rotationimage.className = 'mapboxgl-ctrl-icon'
rotationimage.style = 'transform: rotate(0deg); width: 80%; height: 80%; margin-left: 8%'
rotationimage.src = 'https://brinfaithmap.space/story/img/rotate.png'
rotation.append(rotationimage)

rotationslider = document.createElement('div')
rotationslider.id = 'rotationslider'
rotationslider.style.display = 'none'
rotationslidertitle = document.createElement('div')
rotationslidertitle.id = 'rotationslidertitle'
rotationslidercurrent = document.createElement('label')
rotationslidercurrent.id = 'rotationslidercurrent'
rotationslidercurrent.className = 'RTtext'
rotationslidercurrent.innerHTML = 'Rotate: 0'

rotationsliderRE = document.createElement('a')
rotationsliderRE.href = 'javascript:void(0)'
rotationsliderRE.className = 'reset'
rotationsliderRE.align = 'right'
rotationsliderRE.onclick = resetRfun
rotationsliderRE.title = 'Reset'
rotationsliderRE.innerHTML = '&#8634'

rotationsliderclose = document.createElement('a')
rotationsliderclose.href = 'javascript:void(0)'
rotationsliderclose.className = 'close'
rotationsliderclose.align = 'right'
rotationsliderclose.onclick = closeRTfun
rotationsliderclose.title = 'Close'
rotationsliderclose.innerHTML = '&#10539'

rotationslidertitle.append(rotationslidercurrent, rotationsliderRE, rotationsliderclose)

rotationsliderinput = document.createElement('input')
rotationsliderinput.id = 'rotationsliderinput'
rotationsliderinput.type = 'range'
rotationsliderinput.min = -180
rotationsliderinput.max = 180
rotationsliderinput.step = 0.1
rotationsliderinput.value = 0
rotationsliderinput.style.width = '180px'
rotationslider.append(rotationslidertitle, rotationsliderinput)

tilt = document.createElement('button')
tilt.id = 'tilt'
tilt.name = 'mapsubcontrol'
tilt.title = 'Tilt'
tiltimage = document.createElement('img')
tiltimage.id = 'tiltimage'
tiltimage.className = 'mapboxgl-ctrl-icon'
tiltimage.style = 'transform: rotate(0deg); width: 80%; height: 80%; margin-left: 8%'
tiltimage.src = 'https://brinfaithmap.space/story/img/worldwide.png'
tilt.append(tiltimage)

tiltslider = document.createElement('div')
tiltslider.id = 'tiltslider'
tiltslider.style.display = 'none'
tiltslidertitle = document.createElement('div')
tiltslidertitle.id = 'tiltslidertitle'
tiltslidercurrent = document.createElement('label')
tiltslidercurrent.id = 'tiltslidercurrent'
tiltslidercurrent.className = 'RTtext'
tiltslidercurrent.innerHTML = 'Tilt: 0'

tiltsliderRE = document.createElement('a')
tiltsliderRE.href = 'javascript:void(0)'
tiltsliderRE.className = 'reset'
tiltsliderRE.align = 'right'
tiltsliderRE.onclick = resetTfun
tiltsliderRE.title = 'Reset'
tiltsliderRE.innerHTML = '&#8634'

tiltsliderclose = document.createElement('a')
tiltsliderclose.href = 'javascript:void(0)'
tiltsliderclose.className = 'close'
tiltsliderclose.align = 'right'
tiltsliderclose.onclick = closeRTfun
tiltsliderclose.title = 'Close'
tiltsliderclose.innerHTML = '&#10539'

tiltslidertitle.append(tiltslidercurrent, tiltsliderRE, tiltsliderclose)

tiltsliderinput = document.createElement('input')
tiltsliderinput.id = 'tiltsliderinput'
tiltsliderinput.type = 'range'
tiltsliderinput.min = 0
tiltsliderinput.max = 85
tiltsliderinput.step = 0.1
tiltsliderinput.value = 0
tiltsliderinput.style.width = '180px'
tiltslider.append(tiltslidertitle, tiltsliderinput)

capture = document.createElement('button')
capture.id = 'capture'
capture.title = 'Screenshot'
capture.onclick = genScreenshot
captureimage = document.createElement('img')
captureimage.id = 'captureimage'
captureimage.className = 'mapboxgl-ctrl-icon'
captureimage.src = 'https://brinfaithmap.space/story/img/capture.png'
captureimage.style = 'transform: rotate(0deg); width: 80%; height: 80%; margin-left: 8%'
capture.append(captureimage)

mbtopright.insertBefore(zoomextent, mbtopright.childNodes[2])
mbtopright.append(rotation, rotationslider, tilt, tiltslider, capture)

mapsubcontrol = document.getElementsByName('mapsubcontrol')
mapsubcontrol.forEach(mapsliderVis)
function mapsliderVis(item) {
    item.addEventListener('click', function () {
        maptargetslider = document.getElementById(item.id + 'slider')
        if (maptargetslider.style.display === 'none') {
            maptargetslider.style.display = ' block'
        } else {
            maptargetslider.style.display = 'none'
        }
    })
}

document.getElementById('rotationsliderinput').addEventListener('input', function (f) {
    map.setBearing(f.target.value);
    $('#rotationslidercurrent').html('Rotate: ' + f.target.value + '&#xb0;')
});
document.getElementById('tiltsliderinput').addEventListener('input', function (f) {
    map.setPitch(f.target.value)
    $('#tiltslidercurrent').html('Tilt: ' + f.target.value)
    document.getElementById('tiltimage').style.transform = "rotateX(" + f.target.value + "deg )";
});
