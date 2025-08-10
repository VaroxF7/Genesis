GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('superpositioned_fusion_reactor')
        .category('superpositioned_fusion_reactor')
        .setEUIO('out')
        .setMaxIOSize(2, 9, 1, 0)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create("superpositioned_fusion_reactor", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("superpositioned_fusion_reactor")
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