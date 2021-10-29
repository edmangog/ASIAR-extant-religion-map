# ASIAR-extant-religion-map

Please note in the mapdata.js, there's a command: ```'maxzoom':5.99``` under the ```map.addLayer``` function.
There are reasons for limiting the zoom extent:

1. It suits the geographical extent of our data, which focus on provincial granularity. Therefore, we don't need to go beyond that zoom level; and more importantly, 
2. Detailed processing of spatial data entails higher costs. Hosting and processing spatial data with zoom extent under 6 are completely free.
More info on: https://www.mapbox.com/pricing/

For now, simply set the maxzoom below 6 for all map layers. 
