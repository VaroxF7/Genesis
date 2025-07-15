ServerEvents.recipes(event => {
    event.recipes.gtceu.naq_reactor("naquadah_bolt_cryo_normal")
    .itemInputs("gtceu:naquadah_bolt").inputFluids([Fluid.of("gtceu:cryotheum",20000)])
    .outputFluids([Fluid.of("gtceu:naquadria_waste",1500)])
    .EUt(-GTValues.V[GTValues.EV]).duration(200).circuit(1)

    event.recipes.gtceu.naq_reactor("naquadah_bolt_cryo_super")
    .itemInputs("gtceu:naquadah_bolt").inputFluids([Fluid.of("gtceu:supercooled_cryotheum",5000)])
    .outputFluids([Fluid.of("gtceu:naquadria_waste",1000)])
    .EUt(-GTValues.V[GTValues.EV]).duration(400).circuit(2)

    event.recipes.gtceu.naq_reactor("naquadah_alloy_bolt_cryo_normal")
    .itemInputs("gtceu:naquadah_alloy_bolt").inputFluids([Fluid.of("gtceu:cryotheum",15000)])
    .outputFluids([Fluid.of("gtceu:naquadria_waste",3000)])
    .EUt(-GTValues.V[GTValues.EV]).duration(500).circuit(1)

    event.recipes.gtceu.naq_reactor("naquadah_alloy_bolt_cryo_super")
    .itemInputs("gtceu:naquadah_alloy_bolt").inputFluids([Fluid.of("gtceu:supercooled_cryotheum",2500)])
    .outputFluids([Fluid.of("gtceu:naquadria_waste",3000)])
    .EUt(-GTValues.V[GTValues.EV]).duration(900).circuit(2)

    event.recipes.gtceu.naq_reactor("naquadria_bolt_cryo_normal")
    .itemInputs("gtceu:naquadria_bolt").inputFluids([Fluid.of("gtceu:cryotheum",10000)])
    .outputFluids([Fluid.of("gtceu:naquadria_waste",4000)])
    .EUt(-GTValues.V[GTValues.IV]).duration(1000).circuit(1)

    event.recipes.gtceu.naq_reactor("naquadria_bolt_cryo_super")
    .itemInputs("gtceu:naquadria_bolt").inputFluids([Fluid.of("gtceu:supercooled_cryotheum",2000)])
    .outputFluids([Fluid.of("gtceu:naquadria_waste",4000)])
    .EUt(-GTValues.V[GTValues.IV]).duration(1000).circuit(2)

})

// Repulsor Naquadah Reactor
ServerEvents.recipes(event => {
    event.recipes.gtceu.naq_reactor_repulsor("repulsor_naq_reactor_1")
    .inputFluids([Fluid.of("gtceu:supercooled_cryotheum",20000),Fluid.of("gtceu:naquadic_combust_agent_1",10000),Fluid.of("gtceu:givs_13_fuel_plasma",1500)])
    .outputFluids([Fluid.of("gtceu:superheated_steam",200000),Fluid.of("gtceu:decay_naquadric_acid",4000)])
    .EUt(-GTValues.V[GTValues.LuV]).duration(200)
    .CWUt(16).circuit(1)

    event.recipes.gtceu.naq_reactor_repulsor("repulsor_naq_reactor_2")
    .inputFluids([Fluid.of("gtceu:supercooled_cryotheum",20000),Fluid.of("gtceu:naquadic_combust_agent_2",10000)])
    .outputFluids([Fluid.of("gtceu:supercritical_steam_plasma",200000),Fluid.of("gtceu:decay_naquadric_acid",8000)])
    .EUt(-GTValues.V[GTValues.ZPM]).duration(250)
    .CWUt(32).circuit(1)

    event.recipes.gtceu.steam_turbine("steam_turbine_superheated_1")
    .inputFluids([Fluid.of("gtceu:superheated_steam",1000)])
    .outputFluids([Fluid.of("minecraft:water",62)])
    .EUt(-64).duration(50)

    event.recipes.gtceu.plasma_generator("plasma_turbine_supercritical_1")
    .inputFluids([Fluid.of("gtceu:supercritical_steam_plasma",1)])
    .outputFluids([Fluid.of("gtceu:air",1)])
    .EUt(-4096).duration(50)
})

// Repulsor Fuel
ServerEvents.recipes(event => {
    event.recipes.gtceu.large_chemical_reactor("naquadrolene_1")
    .inputFluids([Fluid.of("gtceu:acidic_naquadria_solution",1000),Fluid.of("gtceu:tritium",1000),Fluid.of("gtceu:glycolonitrile",1000)])
    .outputFluids([Fluid.of("gtceu:naquadrolene",1000)])
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(100)

    event.recipes.gtceu.large_chemical_reactor("naquadic_fuel_mix_base")
    .inputFluids([Fluid.of("gtceu:naquadrolene",2000),Fluid.of("gtceu:cobalt_mang_sulfuric_acid",1500),Fluid.of("gtceu:kryptoxene",4000)])
    .outputFluids([Fluid.of("gtceu:naquadic_fuel_mix_base",4000)])
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(100)

    event.recipes.gtceu.large_chemical_reactor("fuel_mix_naquadic")
    .inputFluids([Fluid.of("gtceu:naquadic_fuel_mix_base",1000),Fluid.of("gtceu:ammonium_lithium_nitrate_1",500),Fluid.of("gtceu:nitrobenzene",8000),Fluid.of("gtceu:cetane_boosted_diesel",4000)])
    .outputFluids([Fluid.of("gtceu:fuel_mixture_naquadic_1",4000)])
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(100)

    event.recipes.gtceu.cracker("cryocracking_naquadic_fuel_1")
    .inputFluids([Fluid.of("gtceu:fuel_mixture_naquadic_1",1000),Fluid.of("gtceu:cryotheum",4000)])
    .outputFluids([Fluid.of("gtceu:cryocracked_naquadic_fuel_mix",1000)])
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(100)

    event.recipes.gtceu.cracker("cryocracking_naquadic_fuel_2")
    .inputFluids([Fluid.of("gtceu:fuel_mixture_naquadic_1",1000),Fluid.of("gtceu:supercooled_cryotheum",4000)])
    .outputFluids([Fluid.of("gtceu:cryocracked_naquadic_fuel_mix",1000)])
    .EUt(GTValues.VA[GTValues.LuV]).circuit(2).duration(200)

    event.recipes.gtceu.vacuum_freezer("supercooled_naquadi_fuel_1")
    .inputFluids([Fluid.of("gtceu:cryocracked_naquadic_fuel_mix",1000),Fluid.of("gtceu:cryotheum",8000)])
    .outputFluids([Fluid.of("gtceu:supercooled_naquadic_fuel",1000)])
    .EUt(GTValues.VA[GTValues.LuV]).circuit(1).duration(400)

    event.recipes.gtceu.vacuum_freezer("supercooled_naquadi_fuel_2")
    .inputFluids([Fluid.of("gtceu:cryocracked_naquadic_fuel_mix",1000),Fluid.of("gtceu:supercooled_cryotheum",4000)])
    .outputFluids([Fluid.of("gtceu:supercooled_naquadic_fuel",1000)])
    .EUt(GTValues.VA[GTValues.ZPM]).circuit(2).duration(200)

    event.recipes.gtceu.electrolyzer("fuel_finale_speration_1")
    .inputFluids([Fluid.of("gtceu:supercooled_naquadic_fuel",4000)])
    .outputFluids([Fluid.of("gtceu:naquadic_combust_agent_1",2000),Fluid.of("minecraft:water",40000),Fluid.of("gtceu:ice",5000)])
    .EUt(GTValues.VA[GTValues.ZPM]).duration(200)

    // Misc Steps in chain of process
    event.recipes.gtceu.chemical_reactor("ammonium_lithium_nitrate_chem")
    .inputFluids([Fluid.of("gtceu:ammonia",1214),Fluid.of("gtceu:lithium",576),Fluid.of("gtceu:nitrogen",2125)])
    .outputFluids([Fluid.of("gtceu:ammonium_lithium_nitrate_1",1000)])
    .EUt(GTValues.VA[GTValues.MV]).duration(100)

    event.recipes.gtceu.chemical_reactor("kryptoxene_1")
    .inputFluids([Fluid.of("gtceu:krypton",1000),Fluid.of("gtceu:xenon",1000),Fluid.of("gtceu:nitric_acid",2000)])
    .outputFluids([Fluid.of("gtceu:kryptoxene",1000)])
    .EUt(GTValues.VA[GTValues.MV]).duration(200).circuit(1)

    event.recipes.gtceu.chemical_reactor("cobalt_mang_sulfuric_acid")
    .inputFluids([Fluid.of("gtceu:cobalt",1000),Fluid.of("gtceu:manganese",1000),Fluid.of("gtceu:sulfuric_acid",4000)])
    .outputFluids([Fluid.of("gtceu:cobalt_mang_sulfuric_acid",1000)])
    .EUt(GTValues.VA[GTValues.MV]).duration(200).circuit(1)

    // Decaying Protein Line
    event.recipes.gtceu.biochemical_reactor("dacay_step_1")
    .inputFluids([Fluid.of("gtceu:decay_naquadric_acid",1000),Fluid.of("gtceu:salt_water",500)])
    .outputFluids([Fluid.of("gtceu:decaying_protein",1000)])
    .EUt(GTValues.VA[GTValues.IV]).duration(200).circuit(1)

    event.recipes.gtceu.biochemical_reactor("dacay_step_2")
    .inputFluids([Fluid.of("gtceu:decaying_protein",1000),Fluid.of("gtceu:uranium_235",500)])
    .outputFluids([Fluid.of("gtceu:rapid_replicate_protein_cells",1000)])
    .EUt(GTValues.VA[GTValues.IV]).duration(200).circuit(1)
})

// Controller
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("naq_reactor_controller_1")
    .itemInputs("16x gtceu:naqatrite_foil","4x kubejs:superclust_2","2x kubejs:superclust_4","gtceu:computer_monitor_cover","16x kubejs:quant_chip_1","32x kubejs:quant_chip_3")
    .inputFluids("gtceu:lubricant 250","gtceu:soldering_alloy 500")
    .itemOutputs("gtceu:naq_reactor")
    .EUt(GTValues.VA[GTValues.IV]).duration(200).circuit(1)

    event.recipes.gtceu.assembly_line("naq_reactor_controller_2")
    .itemInputs("gtceu:naq_reactor","4x kubejs:superclust_2","2x kubejs:superclust_4","gtceu:computer_monitor_cover","128x kubejs:quant_chip_1","32x kubejs:quant_chip_5")
    .inputFluids("gtceu:lubricant 3050","gtceu:high_grade_solder 1500")
    .itemOutputs("gtceu:naq_reactor_repulsor")
    .EUt(GTValues.VA[GTValues.ZPM]).duration(400).circuit(2)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:naq_reactor')).EUt(GTValues.VA[GTValues.IV]).duration(400))
})