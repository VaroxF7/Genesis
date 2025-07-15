GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('advanced_circuit_manufacturer')
        .category('advanced_circuit_manufacturer')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 4, 0)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('advanced_circuit_manufacturer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:large_scale_assembler_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .recipeType('advanced_circuit_manufacturer')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#######C#C#######', '######CCCCC######', '#####CCGGGCC#####', '######CCCCC######', '#######C#C#######')
            .aisle('######CCCCC######', '###DDDCCCCCDDD###', '#DD###Y###Y###DD#', '###DDDCCCCCDDD###', '######CCCCC######')
            .aisle('#####CCCCCCC#####', '##DDDD#PBP#DDDD##', 'ZZZZPPPPFPPPPZZZZ', '##DDDD#PBP#DDDD##', '#####CCCCCCC#####')
            .aisle('######CCCCC######', '###DDDCCCCCDDD###', '#DD###Y###Y###DD#', '###DDDCCCCCDDD###', '######CCCCC######')
            .aisle('#######C#C#######', '######CCKCC######', '#####CCGGGCC#####', '######CCCCC######', '#######C#C#######')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('Y', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('P', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('D', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('F', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('Z', Predicates.blocks('gtceu:tungsten_carbide_frame'))
            .where('B', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('C',
                Predicates.blocks('gtceu:large_scale_assembler_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/large_scale_assembling_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        );
});