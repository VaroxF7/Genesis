ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("research_station_new")
    .itemInputs("gtceu:data_bank","gtceu:luv_sensor","8x kubejs:superclust_2","16x kubejs:superclust_4","8x kubejs:superclust_7","16x #gtceu:circuits/luv","4x gtceu:luv_field_generator","16x gtceu:uranium_rhodium_dinaquadide_octal_wire","32x gtceu:normal_optical_pipe","16x gtceu:naqatrite_plate")
    .inputFluids("gtceu:high_grade_solder 4000","gtceu:trinium 2500","gtceu:duranium 2000")
    .itemOutputs("gtceu:research_station")
    .duration(1600).EUt(GTValues.V[GTValues.ZPM])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_scanner')).EUt(GTValues.VA[GTValues.IV]).duration(500))

    event.recipes.gtceu.assembly_line("hcpa_new")
    .itemInputs("gtceu:data_bank","4x kubejs:superclust_2","8x kubejs:superclust_4","4x kubejs:superclust_7","8x #gtceu:circuits/luv","gtceu:data_orb","8x gtceu:luv_field_generator","64x gtceu:uranium_rhodium_dinaquadide_double_wire","16x gtceu:normal_optical_pipe","32x gtceu:naqatrite_plate")
    .inputFluids("gtceu:high_grade_solder 2000","gtceu:trinium 1500","gtceu:duranium 1000")
    .itemOutputs("gtceu:high_performance_computation_array")
    .duration(900).EUt(GTValues.V[GTValues.ZPM])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:computer_monitor_cover')).EUt(GTValues.VA[GTValues.IV]).duration(500))

    event.recipes.gtceu.assembly_line("data_access_hatch_advanced_new")
    .itemInputs("gtceu:luv_input_bus","2x kubejs:superclust_2","2x #gtceu:circuits/luv","4x gtceu:data_orb")
    .inputFluids("gtceu:high_grade_solder 1200","gtceu:polybenzimidazole 560")
    .itemOutputs("gtceu:advanced_data_access_hatch")
    .duration(900).EUt(GTValues.V[GTValues.ZPM])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:data_bank')).EUt(GTValues.VA[GTValues.IV]).duration(400))

    event.recipes.gtceu.assembly_line("network_switch_new")
    .itemInputs("gtceu:computer_casing","16x gtceu:luv_emitter","16x gtceu:luv_sensor","8x #gtceu:circuits/luv","16x gtceu:uranium_rhodium_dinaquadide_double_wire","128x gtceu:trinium_foil","32x gtceu:normal_optical_pipe")
    .inputFluids("gtceu:high_grade_solder 1200","gtceu:polybenzimidazole 560")
    .itemOutputs("gtceu:network_switch")
    .duration(500).EUt(GTValues.V[GTValues.ZPM])
    .stationResearch(b => b.researchStack('gtceu:normal_optical_pipe').CWUt(10,384000).EUt(12200))

    event.recipes.gtceu.assembler("bridge_component_new")
    .itemInputs("gtceu:advanced_computer_casing","4x gtceu:luv_emitter","4x #gtceu:circuits/luv","4x gtceu:uranium_rhodium_dinaquadide_single_wire","32x gtceu:trinium_foil","4x gtceu:normal_optical_pipe")
    .inputFluids("gtceu:high_grade_solder 1000")
    .itemOutputs("gtceu:hpca_bridge_component")
    .duration(500).EUt(GTValues.V[GTValues.IV]).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembler("advanced_computation_component_new")
    .itemInputs("gtceu:advanced_computer_casing","4x #gtceu:circuits/zpm","gtceu:zpm_field_generator")
    .inputFluids("gtceu:high_grade_solder 1000")
    .itemOutputs("gtceu:hpca_advanced_computation_component")
    .duration(500).EUt(GTValues.V[GTValues.IV]).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembler("hpca_active_cooler_component_new")
    .itemInputs("gtceu:computer_casing","8x #gtceu:circuits/luv","gtceu:luv_sensor","8x gtceu:duranium_plate","16x gtceu:hsse_screw")
    .inputFluids("gtceu:high_grade_solder 1000")
    .itemOutputs("gtceu:hpca_active_cooler_component")
    .duration(500).EUt(GTValues.V[GTValues.IV]).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.alloy_blast_smelter("quantum_star_liquid")
    .itemInputs("16x gtceu:quantum_star")
    .outputFluids([Fluid.of("gtceu:quantum_star",1000)])
    .duration(1000).EUt(GTValues.VA[GTValues.LuV]).blastFurnaceTemp(10000)

    event.recipes.gtceu.electric_blast_furnace("neutronium_boule_1")
    .itemInputs("16x gtceu:iridium_dust","32x gtceu:high_grade_silicon_block","4x gtceu:neutronium_block")
    .itemOutputs("gtceu:neutronium_boule")
    .inputFluids([Fluid.of("gtceu:super_compressed_solarium_plasma",8000)])
    .duration(8000).EUt(GTValues.VA[GTValues.IV]).blastFurnaceTemp(10000)

    event.recipes.gtceu.assembler("draconic_reflector_new")
    .itemInputs("4x gtceu:dense_draconium_plate","16x gtceu:tritanium_bolt","16x gtceu:tritanium_round")
    .itemOutputs("kubejs:draconic_reflector")
    .inputFluids([Fluid.of("gtceu:naqatrite",1000)])
    .duration(100).EUt(GTValues.VA[GTValues.IV])

    // Fusion MK1 - MK2 Fusion
    event.recipes.gtceu.assembly_line("mk2_fusion_new")
    .itemInputs("gtceu:fusion_coil","16x #gtceu:circuits/zpm","4x gtceu:double_naquadria_plate","2x gtceu:double_europium_plate","gtceu:zpm_field_generator","16x kubejs:superclust_1","16x kubejs:superclust_3","16x gtceu:uranium_rhodium_dinaquadide_quad_wire")
    .inputFluids("gtceu:high_grade_solder 4000","gtceu:indium 1500","gtceu:trinium 4000")
    .itemOutputs("gtceu:zpm_fusion_reactor")
    .duration(500).EUt(GTValues.VA[GTValues.ZPM])
    .stationResearch(b => b.researchStack('gtceu:luv_fusion_reactor').CWUt(10,500000).EUt(220022))

    event.recipes.gtceu.assembly_line("fusion_coil")
   .itemInputs("gtceu:superconducting_coil","4x gtceu:iv_field_generator","2x gtceu:neutron_reflector","16x gtceu:dilithium_dust","2x gtceu:samarium_iron_arsenic_oxide_hex_wire")
   .itemOutputs("gtceu:fusion_coil")
   .inputFluids([Fluid.of("gtceu:naquadah",576)])
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

   event.recipes.gtceu.assembly_line("better_fusion_mk1")
   .itemInputs("2x gtceu:superconducting_coil","gtceu:double_plutonium_241_plate","4x gtceu:double_osmiridium_plate","16x gtceu:indium_tin_barium_titanium_cuprate_hex_wire","32x kubejs:superclust_5","16x kubejs:superclust_1","4x gtceu:luv_field_generator","4x kubejs:t1_circuit_luv")
   .inputFluids([Fluid.of("gtceu:high_grade_solder",2000)])
   .itemOutputs("gtceu:luv_fusion_reactor")
   .EUt(GTValues.VA[GTValues.LuV]).duration(2048)
})





