GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('biochemical_reactor')
        .category('biochemical_reactor')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('biochemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:high_temperature_smelting_casing'))
        .recipeType('biochemical_reactor')
        .pattern(definition => FactoryBlockPattern.start()
                .aisle(' CC CC ', '       ', '       ', '       ', '       ', ' CC CC ')
                .aisle('CCCCCCC', ' FF FF ', ' F   F ', ' F   F ', ' FF FF ', 'CCCCCCC')
                .aisle('CCCCCCC', '  SSSF ', '  111  ', '  111  ', ' FSSSF ', 'CCCVCCC')
                .aisle(' CCCCC ', '  S S  ', '  1 1  ', '  1 1  ', '  S S  ', ' CVVVC ')
                .aisle('CCCCCCC', ' FSSSF ', '  111  ', '  111  ', ' FSSSF ', 'CCCVCCC')
                .aisle('CCCKCCC', ' FF FF ', ' F   F ', ' F   F ', ' FF FF ', 'CCCCCCC')
                .aisle(' CC CC ', '       ', '       ', '       ', '       ', ' CC CC ')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('1', Predicates.blocks(GTBlocks.COIL_RTMALLOY.get()))
                .where('S', Predicates.blocks('gtceu:inert_machine_casing'))
                .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
                .where('V', Predicates.blocks('gtceu:heat_vent'))
                .where(' ', Predicates.any())
                .where('C', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .build()
            )
        .workableCasingRenderer('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/fusion_reactor', false);
});