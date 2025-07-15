ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("smd_quant_1")
    .itemInputs("4x gtceu:advanced_smd_transistor","8x gtceu:zephyrite_foil","16x gtceu:fine_aerogem_wire")
    .itemOutputs("kubejs:quant_chip_1")
    .inputFluids([Fluid.of("gtceu:polycaprolactam",1440),Fluid.of("gtceu:tungsten_carbide",500),Fluid.of("gtceu:iridium",250)])
    .duration(280)
    .EUt(GTValues.VA[GTValues.LuV])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:advanced_smd_transistor')).EUt(GTValues.VA[GTValues.IV]).duration(420))

    event.recipes.gtceu.assembly_line("smd_quant_2")
    .itemInputs("4x gtceu:advanced_smd_inductor","8x gtceu:aerogem_foil","16x gtceu:fine_aerogem_wire")
    .itemOutputs("kubejs:quant_chip_2")
    .inputFluids([Fluid.of("gtceu:polycaprolactam",1440),Fluid.of("gtceu:tungsten_carbide",500),Fluid.of("gtceu:iridium",250)])
    .duration(280)
    .EUt(GTValues.VA[GTValues.LuV])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:advanced_smd_inductor')).EUt(GTValues.VA[GTValues.IV]).duration(420))

    event.recipes.gtceu.assembly_line("smd_quant_3")
    .itemInputs("4x gtceu:advanced_smd_resistor","2x gtceu:dense_cloudiron_plate","32x gtceu:fine_nimbusite_wire")
    .itemOutputs("kubejs:quant_chip_3")
    .inputFluids([Fluid.of("gtceu:polycaprolactam",1440),Fluid.of("gtceu:tungsten_carbide",500),Fluid.of("gtceu:iridium",250)])
    .duration(280)
    .EUt(GTValues.VA[GTValues.LuV])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:advanced_smd_resistor')).EUt(GTValues.VA[GTValues.IV]).duration(420))

    event.recipes.gtceu.assembly_line("smd_quant_4")
    .itemInputs("4x gtceu:advanced_smd_capacitor","4x gtceu:cloudiron_ring","32x gtceu:fine_aerogem_wire")
    .itemOutputs("kubejs:quant_chip_4")
    .inputFluids([Fluid.of("gtceu:polycaprolactam",1440),Fluid.of("gtceu:tungsten_carbide",500),Fluid.of("gtceu:iridium",250)])
    .duration(280)
    .EUt(GTValues.VA[GTValues.LuV])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:advanced_smd_capacitor')).EUt(GTValues.VA[GTValues.IV]).duration(420))
    
    event.recipes.gtceu.assembly_line("smd_quant_5")
    .itemInputs('4x gtceu:advanced_smd_diode','16x gtceu:aerogem_foil','16x gtceu:nimbusite_foil')
    .itemOutputs('kubejs:quant_chip_5')
    .inputFluids([Fluid.of("gtceu:polycaprolactam",1440),Fluid.of("gtceu:tungsten_carbide",500),Fluid.of("gtceu:iridium",250)])
    .duration(280)
    .EUt(GTValues.VA[GTValues.LuV])
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:advanced_smd_diode')).EUt(GTValues.VA[GTValues.IV]).duration(420))
})

// Misc.
ServerEvents.recipes(event => {
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

   event.recipes.gtceu.evaporation("lithium_1")
   .inputFluids([Fluid.of("gtceu:hot_brine",1000)])
   .outputFluids([Fluid.of("gtceu:lithium",500)])
   .EUt(GTValues.VA[GTValues.HV]).duration(900)

   event.recipes.gtceu.fiber_assembly_line("optical_fiber_cable_1")
   .itemInputs("16x gtceu:fine_borosilicate_glass_wire","16x gtceu:silver_foil","32x gtceu:ruthenium_foil")
   .inputFluids([Fluid.of("gtceu:polytetrafluoroethylene", 1000)])
   .itemOutputs("4x gtceu:normal_optical_pipe")
   .EUt(GTValues.VA[GTValues.IV]).duration(1000).cleanroom(CleanroomType.CLEANROOM)

})

// Silicon with High Purity - Naquadah Line
ServerEvents.recipes(event => {
    event.recipes.gtceu.distillery("trichlorosilane_purification")
    .inputFluids([Fluid.of("gtceu:trichlorosaline",144)])
    .outputFluids([Fluid.of("gtceu:pure_trichlorosaline",144)])
    .EUt(GTValues.VA[GTValues.LV]).duration(100)
    
    event.recipes.gtceu.chemical_reactor("zinc_tri_silicon")
    .itemInputs("gtceu:zinc_dust")
    .inputFluids([Fluid.of("gtceu:pure_trichlorosaline",576)])
    .outputFluids([Fluid.of("gtceu:hydrogen_chloride",288),Fluid.of("gtceu:lead_zinc_solution",144)])
    .itemOutputs("gtceu:high_grade_silicon_dust")
    .EUt(GTValues.VA[GTValues.LV]).duration(100)

    event.recipes.gtceu.electric_blast_furnace("naquadah_boule")
    .itemInputs("gtceu:small_gallium_arsenide_dust","16x gtceu:high_grade_silicon_block","gtceu:naquadah_alloy_ingot")
    .inputFluids([Fluid.of("gtceu:super_compressed_krypton",10000)])
    .itemOutputs("gtceu:naquadah_boule")
    .EUt(GTValues.VA[GTValues.IV]).duration(8000).blastFurnaceTemp(5400)
})

// High Grade Solder
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("high_grade_solder_1")
    .itemInputs("2x gtceu:silver_dust","2x gtceu:indium_dust","4x gtceu:tin_dust")
    .outputFluids([Fluid.of("gtceu:high_grade_solder",576)])
    .EUt(GTValues.VA[GTValues.MV]).duration(150).circuit(1)
})

// Circuit Recipe's
ServerEvents.recipes(event => {
event.recipes.gtceu.advanced_circuit_manufacturer("crystal_cpu_1")
    .itemInputs([
        Item.of("8x gtceu:engraved_crystal_chip"),
        Item.of("kubejs:cmc_chip"),
        Item.of("kubejs:ctc_chip"),
        Item.of("32x gtceu:fine_europium_wire"),
        Item.of("16x gtceu:fine_naquadah_wire")
    ])
    .itemOutputs("kubejs:crystal_cpu")
    .inputFluids([Fluid.of("gtceu:high_grade_solder",5500),Fluid.of("gtceu:cryotheum",15000),Fluid.of("gtceu:duranium",2500)])
    .EUt(GTValues.VA[GTValues.EV]).duration(500).circuit(1)
    .dimension("ad_astra:earth_orbit")
})

// Superclusters™ - Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_asoc")
    .itemInputs("16x gtceu:advanced_soc","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",12000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_5")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_asoc_cwu")
    .itemInputs("16x gtceu:advanced_soc","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",12000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_5")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(2).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_uhpic")
    .itemInputs("16x gtceu:uhpic_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",12000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_1")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(3)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_uhpic_cwu")
    .itemInputs("16x gtceu:uhpic_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",12000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_1")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(4).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_hpic")
    .itemInputs("16x gtceu:hpic_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",8000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_2")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_hpic_cwu")
    .itemInputs("16x gtceu:hpic_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",5000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_2")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(2).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_rhpcc")
    .itemInputs("16x kubejs:rhpcc_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",12000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_3")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_rhpcc_cwu")
    .itemInputs("16x kubejs:rhpcc_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",8000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_3")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(2).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_ltmc")
    .itemInputs("16x kubejs:ltmc_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",15000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_4")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_ltmc_cwu")
    .itemInputs("16x kubejs:ltmc_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",10000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_4")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(2).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_soc")
    .itemInputs("16x gtceu:soc","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",10000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_6")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_soc_cwu")
    .itemInputs("16x gtceu:soc","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",5000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_6")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(2).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_qubit")
    .itemInputs("16x gtceu:qbit_cpu_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",15000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_7")
    .notConsumable("gtceu:luv_emitter")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("supercluster_qubit_cwu")
    .itemInputs("16x gtceu:qbit_cpu_chip","64x kubejs:super_seperator","64x gtceu:indium_tin_barium_titanium_cuprate_single_wire","128x gtceu:fine_platinum_wire","64x gtceu:electrum_foil")
    .inputFluids([Fluid.of("gtceu:cryotheum",12000),Fluid.of("gtceu:helium_plasma",10000)])
    .itemOutputs("kubejs:superclust_7")
    .EUt(GTValues.VA[GTValues.LuV]).duration(500).circuit(2).CWUt(8)
    .dimension("ad_astra:earth_orbit")

    // Spacer
    event.recipes.gtceu.advanced_circuit_manufacturer("spacer_1")
    .itemInputs("4x gtceu:indium_tin_barium_titanium_cuprate_single_wire","32x kubejs:certus_quartz_fine_fiber","64x gtceu:electrum_foil","64x gtceu:fine_zephyrite_wire")
    .itemOutputs("4x kubejs:super_seperator")
    .inputFluids([Fluid.of("gtceu:cryotheum",6000),Fluid.of("gtceu:polycaprolactam",1500)])
    .EUt(GTValues.VA[GTValues.EV]).duration(100).circuit(1)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("spacer_2")
    .itemInputs("2x gtceu:uranium_rhodium_dinaquadide_single_wire","16x gtceu:fine_europium_wire")
    .itemOutputs("16x kubejs:super_seperator")
    .inputFluids([Fluid.of("gtceu:cryotheum",4000),Fluid.of("gtceu:polycaprolactam",800)])
    .EUt(GTValues.VA[GTValues.LuV]).duration(200).circuit(2)
    .dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("spacer_3")
    .itemInputs("gtceu:tritanium_single_wire","8x gtceu:fine_americium_wire")
    .itemOutputs("32x kubejs:super_seperator")
    .inputFluids([Fluid.of("gtceu:cryotheum",2000),Fluid.of("gtceu:polycaprolactam",144)])
    .EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(3)
    .dimension("ad_astra:earth_orbit")
})


