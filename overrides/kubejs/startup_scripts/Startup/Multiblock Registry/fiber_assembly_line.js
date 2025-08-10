GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('fiber_assembly_line')
        .category('fiber_assembly_line')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fiber_assembly_line', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .recipeType('fiber_assembly_line')
        .pattern(definition => FactoryBlockPattern.start()
          .aisle('CCC', 'CGC', 'CCC')
          .aisle('CCC', 'GSG', 'CCC')
          .aisle('CKC', 'CGC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
              .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
              .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
              .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
              .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
              .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})