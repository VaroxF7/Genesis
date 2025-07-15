GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:mars_sky_stone_vein', vein => vein
        .weight(40).clusterSize(30).density(0.2)
        .layer('mars_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('sky_stone')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('sky_stone'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:moon_dilithium_vein', vein => vein
        .weight(40).clusterSize(30).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('dilithium')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Spessartine).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('dilithium'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:moon_sheelite_vein', vein => vein
        .weight(30).clusterSize(20).density(0.3)
        .layer('moon_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Scheelite)
            .density(0.2)
            .radius(4)
        )
    )
})

GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein") 
})