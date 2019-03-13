var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Fragmata_15feb_1 = new ol.format.GeoJSON();
var features_Fragmata_15feb_1 = format_Fragmata_15feb_1.readFeatures(json_Fragmata_15feb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fragmata_15feb_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Fragmata_15feb_1.addFeatures(features_Fragmata_15feb_1);var lyr_Fragmata_15feb_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fragmata_15feb_1, 
                style: style_Fragmata_15feb_1,
                title: '<img src="styles/legend/Fragmata_15feb_1.png" /> Fragmata_15feb'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Fragmata_15feb_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Fragmata_15feb_1];
lyr_Fragmata_15feb_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'namegr': 'namegr', 'J_Date': 'J_Date', 'J_System': 'J_System', 'J_Capacity': 'J_Capacity', 'J_Inflow_L': 'J_Inflow_L', 'J_Inflow_S': 'J_Inflow_S', 'J_CurrentS': 'J_CurrentS', 'J_Curren_1': 'J_Curren_1', 'J_Storage_': 'J_Storage_', 'J_Storag_1': 'J_Storag_1', 'J_MaxStora': 'J_MaxStora', 'J_MaxSto_1': 'J_MaxSto_1', });
lyr_Fragmata_15feb_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'namegr': 'TextEdit', 'J_Date': 'TextEdit', 'J_System': 'TextEdit', 'J_Capacity': 'TextEdit', 'J_Inflow_L': 'TextEdit', 'J_Inflow_S': 'TextEdit', 'J_CurrentS': 'TextEdit', 'J_Curren_1': 'TextEdit', 'J_Storage_': 'TextEdit', 'J_Storag_1': 'TextEdit', 'J_MaxStora': 'TextEdit', 'J_MaxSto_1': 'TextEdit', });
lyr_Fragmata_15feb_1.set('fieldLabels', {'ogc_fid': 'no label', 'namegr': 'no label', 'J_Date': 'no label', 'J_System': 'no label', 'J_Capacity': 'no label', 'J_Inflow_L': 'no label', 'J_Inflow_S': 'no label', 'J_CurrentS': 'no label', 'J_Curren_1': 'no label', 'J_Storage_': 'no label', 'J_Storag_1': 'no label', 'J_MaxStora': 'no label', 'J_MaxSto_1': 'no label', });
lyr_Fragmata_15feb_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});