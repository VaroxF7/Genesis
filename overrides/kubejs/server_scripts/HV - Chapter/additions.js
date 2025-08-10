ServerEvents.recipes(event => {
    // Boule & Wafer
    event.recipes.gtceu.electric_blast_furnace("doped_silicon_boule")
    .itemInputs("16x gtceu:phosphorus_dust","gtceu:small_gallium_arsenide_dust")
    .inputFluids([Fluid.of("gtceu:pure_silicon_crystal_slurry",1000)])
    .itemOutputs("gtceu:phosphorus_boule")
    .duration(4500).EUt(512).blastFurnaceTemp(3500).circuit(2)

    event.recipes.gtceu.chemical_bath("prep_wafer_3")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("kubejs:prepared_phosphorus_wafer")
    .inputFluids([Fluid.of("gtceu:organosilicate",750)])
    .duration(400).EUt(240).cleanroom(CleanroomType.CLEANROOM)

    // LTMC Wafer & Chip
    event.recipes.gtceu.cutter("ltmc_chip")
    .itemInputs("kubejs:ltmc_wafer")
    .inputFluids([Fluid.of("gtceu:distilled_water",750)])
    .itemOutputs("4x kubejs:ltmc_chip")
    .duration(200).EUt(450).cleanroom(CleanroomType.CLEANROOM)

    // 16k Component - 64k Component
    // 16k
    event.recipes.gtceu.circuit_assembler("16k_component_cac_1")
    .itemInputs("3x kubejs:ltmc_chip","gtceu:soc","4x gtceu:fine_borosilicate_glass_wire")
    .itemOutputs("ae2:cell_component_16k")
    .inputFluids([Fluid.of("gtceu:polytetrafluoroethylene",288)])
    .duration(300).EUt(450).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler("12k_component_cac_2")
    .itemInputs("3x ae2:cell_component_4k","gtceu:soc","8x gtceu:fine_borosilicate_glass_wire")
    .itemOutputs("ae2:cell_component_16k")
    .inputFluids([Fluid.of("gtceu:polytetrafluoroethylene",288)])
    .duration(400).EUt(450).cleanroom(CleanroomType.CLEANROOM)

    // 64k
    event.recipes.gtceu.circuit_assembler("64k_component_cac_1")
    .itemInputs("9x kubejs:ltmc_chip","gtceu:soc","16x gtceu:fine_borosilicate_glass_wire","gtceu:epoxy_circuit_board")
    .itemOutputs("ae2:cell_component_64k")
    .inputFluids([Fluid.of("gtceu:polytetrafluoroethylene",500)])
    .duration(300).EUt(450).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler("64k_component_cac_2")
    .itemInputs("3x ae2:cell_component_16k","gtceu:soc","32x gtceu:fine_borosilicate_glass_wire","gtceu:epoxy_circuit_board")
    .itemOutputs("ae2:cell_component_64k")
    .inputFluids([Fluid.of("gtceu:polytetrafluoroethylene",500)])
    .duration(400).EUt(450).cleanroom(CleanroomType.CLEANROOM)

    // Titanium Gating & Product Reduction Recipes
    event.recipes.gtceu.electric_blast_furnace("titanium_from_dust_1")
    .itemInputs("gtceu:titanium_dust")
    .itemOutputs("gtceu:hot_titanium_ingot")
    .inputFluids([Fluid.of("gtceu:helium",1000)])
    .duration(2000).EUt(512).blastFurnaceTemp(3000).circuit(1)

    event.recipes.gtceu.electric_blast_furnace("titanium_from_dust_2")
    .itemInputs("gtceu:titanium_dust")
    .itemOutputs("gtceu:hot_titanium_ingot")
    .duration(2400).EUt(512).blastFurnaceTemp(3500).circuit(2)

    // Vacuum Freezer Change
    event.recipes.gtceu.assembler("freezer_box_1")
    .itemInputs("3x gtceu:hv_electric_pump","gtceu:frostproof_machine_casing","3x #gtceu:circuits/hv","2x gtceu:gold_single_cable")
    .itemOutputs("gtceu:vacuum_freezer")
    .duration(100).EUt(510).circuit(1)

    // Titanium Line
    event.recipes.gtceu.large_chemical_reactor("bauxite_hydroxide")
    .itemInputs("8x gtceu:sodium_hydroxide_dust","4x gtceu:bauxite_dust")
    .inputFluids([Fluid.of("minecraft:water",500)])
    .outputFluids([Fluid.of("gtceu:bauxite_hydroxide",1000)])
    .duration(100).EUt(510).circuit(1)

    event.recipes.gtceu.large_chemical_reactor("neutral_bauxite")
    .inputFluids([Fluid.of("gtceu:bauxite_hydroxide",500),Fluid.of("gtceu:sulfuric_acid",250)])
    .outputFluids([Fluid.of("gtceu:neutral_bauxite_hydroxide",750)])
    .duration(100).EUt(510).circuit(2)

    event.recipes.gtceu.large_chemical_reactor("virulent")
    .inputFluids([Fluid.of("gtceu:neutral_bauxite_hydroxide",500),Fluid.of("undergarden:virulent_mix_source",1000),Fluid.of("gtceu:sulfuric_acid",250)])
    .outputFluids([Fluid.of("gtceu:hollow_earth_filtrate",750)])
    .duration(150).EUt(510).circuit(3)

    event.recipes.gtceu.evaporation("thermo_shock")
    .inputFluids([Fluid.of("gtceu:hollow_earth_filtrate",1500)])
    .outputFluids([Fluid.of("gtceu:thermo_shock_residue",500)])
    .duration(250).EUt(510).circuit(4)

    event.recipes.gtceu.centrifuge("crystal_titan_rich")
    .inputFluids([Fluid.of("gtceu:thermo_shock_residue",1500)])
    .outputFluids([Fluid.of("gtceu:crystal_titanium_rich_compound",1000)])
    .duration(300).EUt(512).circuit(5)

    event.recipes.gtceu.electrolyzer("crystal_rich_to_rutile")
    .inputFluids([Fluid.of("gtceu:crystal_titanium_rich_compound",1000)])
    .itemOutputs("16x gtceu:rutile_dust")
    .duration(300).EUt(500).circuit(6)

})
 // Rutile Recipe Replacements
ServerEvents.recipes(event => {
    event.recipes.gtceu.electrolyzer("rutile_hv_replace_1")
    .itemInputs("16x gtceu:bauxite_dust")
    .itemOutputs("6x gtceu:aluminium_dust")
    .outputFluids([Fluid.of("gtceu:oxygen",6000)])
    .duration(120).EUt(60)

    event.recipes.gtceu.centrifuge("rutile_hv_replace_2")
    .itemInputs("gtceu:pure_ilmenite_dust")
    .itemOutputs("gtceu:ilmenite_dust")
    .duration(50).EUt(5)

    event.recipes.gtceu.centrifuge("rutile_hv_replace_3")
    .itemInputs("gtceu:pure_bauxite_dust")
    .itemOutputs("gtceu:bauxite_dust")
    .duration(50).EUt(5)

    event.recipes.gtceu.thermal_centrifuge("rutile_hv_replace_4")
    .itemInputs("gtceu:crushed_bauxite_ore")
    .itemOutputs("gtceu:refined_bauxite_ore")
    .duration(400).EUt(20)

    event.recipes.gtceu.thermal_centrifuge("rutile_hv_replace_5")
    .itemInputs("gtceu:purified_bauxite_ore")
    .itemOutputs("gtceu:refined_bauxite_ore")
    .duration(400).EUt(20)

    event.recipes.gtceu.thermal_centrifuge("rutile_hv_replace_6")
    .itemInputs("gtceu:crushed_ilmenite_ore")
    .itemOutputs("gtceu:refined_ilmenite_ore")
    .duration(400).EUt(20)

    event.recipes.gtceu.thermal_centrifuge("rutile_hv_replace_7")
    .itemInputs("gtceu:purified_ilmenite_ore")
    .itemOutputs("gtceu:refined_ilmenite_ore")
    .duration(400).EUt(20)

})


