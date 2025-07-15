GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naq_reactor')
        .category('naq_reactor')
        .setEUIO('out')
        .setMaxIOSize(4, 4, 4, 4)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
        .setMaxTooltips(3);
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naq_reactor_repulsor')
        .category('naq_reactor')
        .setEUIO('out')
        .setMaxIOSize(4, 4, 4, 4)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
        .setMaxTooltips(3);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create("naq_reactor", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("naq_reactor")
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])    
        .appearanceBlock(GCYMBlocks.CASING_SHOCK_PROOF)
        .generator(true)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GNG", "GNG", "CCC")
            .aisle("CKC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where("G", Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where("C", Predicates.blocks(GCYMBlocks.CASING_SHOCK_PROOF.get()).setMinGlobalLimited(12)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("P", Predicates.blocks("ae2:spatial_pylon"))
            .where("N", Predicates.blocks("kubejs:reactor_coil_block"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/shock_proof_cutting_casing",
            "gtceu:block/multiblock/vacuum_freezer", false)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('naq_reactor_repulsor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:high_temperature_smelting_casing'))
        .recipeType('naq_reactor_repulsor')
        .generator(true)
        .pattern(definition => FactoryBlockPattern.start()
                .aisle('  CCCCCCCCC  ', '  CCCCCCCCC  ', '             ', '             ', '             ', '             ', '             ', '             ', '             ')
                .aisle(' CCCCCCCCCCC ', ' CCCAAAAACCC ', '     AAA     ', '             ', '             ', '             ', '             ', '             ', '             ')
                .aisle('CCCCCCCCCCCCC', 'CCCAAHHHAACCC', '   A     A   ', '   A     A   ', '   A     A   ', '             ', '             ', '             ', '             ')
                .aisle('CCCCCCCCCCCCC', 'CCCHHH1HHHCCC', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '             ')
                .aisle('CCCCCCCCCCCCC', 'CCCH11111HCCC', '  A       A  ', '  A       A  ', '  AN     NA  ', '  A       A  ', '  A       A  ', '  A       A  ', '             ')
                .aisle('CCCCCCCCCCCCC', 'CCH111X111HCC', ' AM       MA ', ' AMN     NMA ', ' AMN FFF NMA ', ' AMN     NMA ', ' AM       MA ', ' AA       AA ', ' AA       AA ')
                .aisle('CCCCCCCCCCCCC', 'CCH11XXX11HCC', ' AMN     NMA ', ' ANN  R  NNA ', ' ANFFFRFFFNA ', ' ANN  R  NNA ', ' AMN     NMA ', ' A         A ', ' A         A ')
                .aisle('CCCCCCCCCCCCC', 'CCH111X111HCC', ' AM       MA ', ' AMN     NMA ', ' AMN FFF NMA ', ' AMN     NMA ', ' AM       MA ', ' AA       AA ', ' AA       AA ')
                .aisle('CCCCCCCCCCCCC', 'CCCH11111HCCC', '  A       A  ', '  A       A  ', '  AN     NA  ', '  A       A  ', '  A       A  ', '  A       A  ', '             ')
                .aisle('CCCCCCCCCCCCC', 'CCCHHH1HHHCCC', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '  AA     AA  ', '             ')
                .aisle('CCCCCCCCCCCCC', 'CCCAAHHHAACCC', '   A     A   ', '   A     A   ', '   A     A   ', '             ', '             ', '             ', '             ')
                .aisle(' CCCCCCCCCCC ', ' CCCAAAAACCC ', '     AAA     ', '             ', '             ', '             ', '             ', '             ', '             ')
                .aisle('  CCCCCCCCC  ', '  CCCCKCCCC  ', '             ', '             ', '             ', '             ', '             ', '             ', '             ')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('F', Predicates.blocks('gtceu:fusion_coil'))
                .where('R', Predicates.blocks('kubejs:reactor_coil_block'))
                .where('M', Predicates.blocks('gtceu:magnetic_samarium_block'))
                .where('X', Predicates.blocks('gtceu:electrolytic_cell'))
                .where('1', Predicates.blocks('gtceu:computer_casing'))
                .where('A', Predicates.blocks('gtceu:atomic_casing'))
                .where('N', Predicates.blocks('gtceu:naquadah_coil_block'))
                .where('H', Predicates.blocks('gtceu:heat_vent'))
                .where(' ', Predicates.any())
                .where('C', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .build()
            )
        .workableCasingRenderer('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/fusion_reactor', false);
});