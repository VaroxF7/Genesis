GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('litho_machine_mk1')
        .category('litho_machine_mk1')
        .setEUIO('in')
        .setMaxIOSize(6, 4, 6, 2)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('litho_machine_mk2')
        .category('litho_machine_mk2')
        .setEUIO('in')
        .setMaxIOSize(6, 4, 6, 2)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
        .setMaxTooltips(3);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('litho_machine_mk1', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:plascrete'))
        .recipeType('litho_machine_mk1')
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('CCC', 'CCC', 'CCC')
        .aisle('CCC', 'DLD', 'COC')
        .aisle('CCC', 'DLD', 'COC')
        .aisle('CCC', 'DLD', 'COC')
        .aisle('CCC', 'DHD', 'COC')
        .aisle('CCC', 'DHD', 'COC')
        .aisle('CCC', 'DHD', 'COC')
        .aisle('CCC', 'CCC', 'CCC')
        .aisle('CCC', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('O', Predicates.blocks('gtceu:filter_casing'))
            .where('H', Predicates.blocks('gtceu:kanthal_coil_block'))
            .where('L', Predicates.blocks('gtceu:stainless_steel_gearbox'))
            .where('C', Predicates.blocks('gtceu:plascrete')
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
              .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
              .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/cleanroom/plascrete', 'gtceu:block/multiblock/fusion_reactor', false)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('litho_machine_mk2', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('litho_machine_mk2')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:large_scale_assembler_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('####A###A####', '#B##A###A##B#', 'BB#########BB', '#B##A###A##B#', '####A###A####')
            .aisle('#B##A###A##B#', 'BAAAACCCAAAAB', 'BD##CCGCC##DB', 'BAAAACCCAAAAB', '#B##A###A##B#')
            .aisle('BB#########BB', 'BB##CCCCC##BB', 'BDDDDLFLDDDDB', 'BB##CCCCC##BB', 'BB#########BB')
            .aisle('#B##A###A##B#', 'BAAAACKCAAAAB', 'BD##CCGCC##DB', 'BAAAACCCAAAAB', '#B##A###A##B#')
            .aisle('####A###A####', '#B##A###A##B#', 'BB#########BB', '#B##A###A##B#', '####A###A####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C',
                Predicates.blocks('gtceu:large_scale_assembler_casing')
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('A', Predicates.blocks('gtceu:tungsten_carbide_frame'))
            .where('B', Predicates.blocks(GCYMBlocks.CASING_NONCONDUCTING.get()))
            .where('D', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('F', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('L', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/large_scale_assembling_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        );
});