ServerEvents.recipes(event => {
// Silicon with High Purity - Naquadah Line
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

// High Grade Solder
    event.recipes.gtceu.mixer("high_grade_solder_1")
    .itemInputs("2x gtceu:silver_dust","2x gtceu:indium_dust","4x gtceu:tin_dust")
    .outputFluids([Fluid.of("gtceu:high_grade_solder",576)])
    .EUt(GTValues.VA[GTValues.MV]).duration(150).circuit(1)
})