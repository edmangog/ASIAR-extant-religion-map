function footercollapse(){
    $('.footer').css({ 'width': '30%', 'max-height': '10%' })
}

function footertoggle(e) {
    $('#footernote').hide()
    $('.footer').css({ 'width': '30%', 'max-height': '50%' })
    $('#religioustable').show()
    $('#placename').html(e.features[0].properties.ProvName + ', ' + e.features[0].properties.Country + '<a href=javascript:void(0) class=MBfootercollapse onclick=footercollapse()>&#10539</a>')
    $('#1streligion').html(e.features[0].properties.HighRelig+ ' (' + e.features[0].properties.ReligCatP +')')
    if (e.features[0].properties.SecRelig) {
        $('#2ndreligion').show()
        $('#religion2').show()
        $('#religion2').html(e.features[0].properties.SecRelig + ' (' + e.features[0].properties.SReligCatp +')')
    } else {
        $('#2ndreligion').hide()
        $('#religion2').hide()
    }
    if (e.features[0].properties.Ethnic1) {
        $('#1stethnic').show()
        $('#ethnic1').show()
        $('#ethnic1').html(e.features[0].properties.Ethnic1)
    } else {
        $('#1stethnic').hide()
        $('#ethnic1').hide()
    }
    if (e.features[0].properties.Ethnic2) {
        $('#2ndethnic').show()
        $('#ethnic2').show()
        $('#ethnic2').html(e.features[0].properties.Ethnic2)
    } else {
        $('#2ndethnic').hide()
        $('#ethnic2').hide()
    }
    $('#year').html(e.features[0].properties.Year)
    $('#datasource').html(e.features[0].properties.DataSource)
}

var hoveredStateId = null;
var clickstate = null
var clicked = false
map.on('click', 'Religious Demography', function (e) {
    if (e.features.length > 0) {
        if (clickstate) { //cancel current feature's state to false when mouse move to another feature
            map.setFeatureState(
                { source: 'Religious Demography', sourceLayer: 'BRI_Religion_Layer', id: clickstate },
                { click: false }
            );
        }
        clickstate = e.features[0].id;
        map.setFeatureState(
            { source: 'Religious Demography', sourceLayer: 'BRI_Religion_Layer', id: clickstate },
            { click: true }
        );
    }
    clicked = true
    footertoggle(e)
})

map.on('contextmenu', 'Religious Demography', function (e) { //Right click
    if (clickstate) {
        map.setFeatureState(
            { source: 'Religious Demography', sourceLayer: 'BRI_Religion_Layer', id: clickstate },
            { click: false }
        );
    }
    clicked = false
})
map.on('mousemove', 'Religious Demography', function (e) {
    map.getCanvas(e).style.cursor = 'pointer';
    if (e.features.length > 0) {
        if (hoveredStateId) { //cancel current feature's state to false when mouse move to another feature
            map.setFeatureState(
                { source: 'Religious Demography', sourceLayer: 'BRI_Religion_Layer', id: hoveredStateId },
                { hover: false }
            );
        }
        hoveredStateId = e.features[0].id;
        map.setFeatureState(
            { source: 'Religious Demography', sourceLayer: 'BRI_Religion_Layer', id: hoveredStateId },
            { hover: true }
        );
    }

    if ((e.features.length > 0) && (clicked === false)) {
        footertoggle(e)
    }
});
map.on('mouseleave', 'Religious Demography', function (e) {
    map.getCanvas(e).style.cursor = '';
    if (hoveredStateId) {
        map.setFeatureState(
            { source: 'Religious Demography', sourceLayer: 'BRI_Religion_Layer', id: hoveredStateId },
            { hover: false }
        );
    }
    hoveredStateId = null;
});
//if rightclick happen, disable this code
map.on('mouseout', 'Religious Demography', function(e){
    if(clicked != true) {
    $('#religioustable').hide()
    $('footernote').show()
    $('#footernote').html('Hover over the map to see the religious demography')
}
})

regslider = document.getElementsByName('reg-sliderCB')
regslider.forEach(regfilter)
regslidersec = document.getElementsByName('reg-sliderCB-sec')
for (i = 0 ; i < regslidersec.length; i ++){
    regslidersec[i].addEventListener('click', function(event){
        if(event.target.checked === true) {
            map.setLayoutProperty(event.target.id, 'visibility', 'visible')
        } else {
            map.setLayoutProperty(event.target.id, 'visibility', 'none')
        }
    })
}
function regfilter(item) {
    item.addEventListener('click', function () {
        visible = []
        for (i = 0; i < regslider.length; i++) {
            if (regslider[i].checked === true) {
                visible.push(regslider[i].id)
            }
        }
        if (visible.length > 0) {
            map.setFilter('Religious Demography', ['match', ['get', 'HighRelig'], visible, true, false])
        } else {
            map.setFilter('Religious Demography', null)
        }
    })
}
