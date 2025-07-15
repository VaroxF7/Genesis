ServerEvents.recipes(event => {
    event.recipes.gtceu.fusion_reactor("new_zpm_material_plasma")
    .inputFluids([Fluid.of("gtceu:naquadah",144),Fluid.of("gtceu:trinium",144)])
    .outputFluids([Fluid.of("gtceu:naqatrite",144)])
    .duration(80).EUt(GTValues.VA[GTValues.LuV]).fusionStartEU(150000000)

    event.recipes.gtceu.fusion_reactor("silquadria_1")
    .inputFluids([Fluid.of("gtceu:silver",144),Fluid.of("gtceu:naquadria",12)])
    .outputFluids([Fluid.of("gtceu:silquadria_plasma",72)])
    .duration(70).EUt(GTValues.VA[GTValues.ZPM]).fusionStartEU(200000000)

    event.recipes.gtceu.fusion_reactor("darmstadtium_new_1")
    .inputFluids([Fluid.of("gtceu:duranium",144),Fluid.of("gtceu:nichrome",144)])
    .outputFluids([Fluid.of("gtceu:darmstadtium",14)])
    .duration(50).EUt(GTValues.VA[GTValues.ZPM]).fusionStartEU(250000000)
})

// Fusion Fuel Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.fusion_reactor("plasma_combind_1")
    .inputFluids([Fluid.of("gtceu:gallium_pl_plasma",144),Fluid.of("gtceu:osmium_pl_plasma",144)])
    .outputFluids([Fluid.of("gtceu:gallosium_plasma",144)])
    .duration(80).EUt(GTValues.VA[GTValues.ZPM]).fusionStartEU(150000000)

    event.recipes.gtceu.fusion_reactor("plasma_combind_2")
    .inputFluids([Fluid.of("gtceu:iridium_pl_plasma",144),Fluid.of("gtceu:yttrium_pl_plasma",144)])
    .outputFluids([Fluid.of("gtceu:iridyne_plasma",144)])
    .duration(80).EUt(GTValues.VA[GTValues.ZPM]).fusionStartEU(150000000)

    event.recipes.gtceu.fusion_reactor("plasma_combind_3")
    .inputFluids([Fluid.of("gtceu:cobalt_pl_plasma",144),Fluid.of("gtceu:tungsten_pl_plasma",144)])
    .outputFluids([Fluid.of("gtceu:cobalten_plasma",144)])
    .duration(80).EUt(GTValues.VA[GTValues.ZPM]).fusionStartEU(150000000)

    event.recipes.gtceu.fusion_reactor("plasma_combind_4")
    .inputFluids([Fluid.of("gtceu:samarium_pl_plasma",144),Fluid.of("gtceu:vanadium_pl_plasma",144)])
    .outputFluids([Fluid.of("gtceu:samaradium_plasma",144)])
    .duration(80).EUt(GTValues.VA[GTValues.ZPM]).fusionStartEU(150000000)

    event.recipes.gtceu.large_chemical_reactor("givs_13_1")
    .itemInputs("16x gtceu:indium_dust","16x gtceu:lanthanum_dust")
    .inputFluids([
        Fluid.of("gtceu:samaradium_plasma",1000),
        Fluid.of("gtceu:cobalten_plasma",1000),
        Fluid.of("gtceu:iridyne_plasma",1000),
        Fluid.of("gtceu:gallosium_plasma",1000)
    ])
    .outputFluids([Fluid.of("gtceu:givs_13_fuel_plasma",288)])
    .circuit(1).duration(400).EUt(GTValues.VA[GTValues.HV]) 

})

// Fuel Production
ServerEvents.recipes(event => {
    event.recipes.gtceu.plasma_generator("gen_1_rcp_1")
    .inputFluids([Fluid.of("gtceu:gallium_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:gallium",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_2")
    .inputFluids([Fluid.of("gtceu:osmium_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:osmium",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_3")
    .inputFluids([Fluid.of("gtceu:iridium_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:iridium",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_4")
    .inputFluids([Fluid.of("gtceu:yttrium_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:yttrium",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_5")
    .inputFluids([Fluid.of("gtceu:cobalt_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:cobalt",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_6")
    .inputFluids([Fluid.of("gtceu:samarium_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:samarium",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_7")
    .inputFluids([Fluid.of("gtceu:tungsten_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:tungsten",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("gen_1_rcp_8")
    .inputFluids([Fluid.of("gtceu:vanadium_pl_plasma",1)])
    .outputFluids([Fluid.of("gtceu:vanadium",1)])
    .duration(25).EUt(-2048)

    event.recipes.gtceu.plasma_generator("givs_fuel_1")
    .inputFluids([Fluid.of("gtceu:givs_13_fuel_plasma",1)])
    .outputFluids([Fluid.of("gtceu:oxygen",1)])
    .duration(20).EUt(-8192)

})