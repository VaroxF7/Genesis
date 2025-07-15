ServerEvents.recipes(event => {
    event.recipes.gtceu.biochemical_reactor("biochemline_step_1")
    .inputFluids("gtceu:fermented_biomass 144","gtceu:sulfuric_acid 1000")
    .outputFluids("gtceu:blood_plasma 72","gtceu:blood_cells 72")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_2")
    .inputFluids("gtceu:blood_plasma 144","gtceu:glucose_solution 144","gtceu:concentrated_bromine_solution 144")
    .outputFluids("gtceu:plasma_enriched_blood_cells 144")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_3")
    .inputFluids("gtceu:plasma_enriched_blood_cells 144","gtceu:saline_solution 144","gtceu:mutagen 144")
    .outputFluids("gtceu:dna_fragments 288","gtceu:protein_slurry 144")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_4")
    .inputFluids("gtceu:plasma_enriched_blood_cells 144","gtceu:saline_solution 144","gtceu:mutagen 1000","gtceu:nutrient_medium 1000")
    .outputFluids("gtceu:dna_fragments 288","gtceu:protein_slurry 144")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_5")
    .inputFluids("gtceu:blood_plasma 144","gtceu:dna_fragments 144")
    .outputFluids("gtceu:blood_devrived_genetic_material 144")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.centrifuge("biochemline_centrifuge_6")
    .inputFluids("gtceu:protein_slurry 144")
    .itemOutputs("8x gtceu:calcium")
    .outputFluids("gtceu:high_purity_protein 144")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.vacuum_freezer("biochemline_freezer_7")
    .inputFluids("gtceu:blood_cells 1000")
    .outputFluids("gtceu:cryogenic_blood_cells 1000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_8")
    .itemInputs("32x gtceu:agar_dust")
    .inputFluids("gtceu:cryogenic_blood_cells 144","gtceu:xenon_oxide 2000")
    .outputFluids("gtceu:hematogenic_catalyst 144")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_9")
    .inputFluids("gtceu:mutated_bacterial_sludge 1000","gtceu:hematogenic_catalyst 144")
    .outputFluids("gtceu:beta_cell_cluster 500")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_10")
    .notConsumable("gtceu:blacklight")
    .inputFluids("gtceu:beta_cell_cluster 500","gtceu:proto_cell_cluster 500")
    .outputFluids("gtceu:stabilized_growth_medium 1000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biovat("biochemline_biovat_sterilized")
    .itemInputs("gtceu:lead_dust")
    .inputFluids("gtceu:stabilized_growth_medium 1000")
    .chancedFluidOutput("gtceu:sterilized_growth_medium 1000", 2500, 0)
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(600).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biovat("biochemline_biovat_proto")
    .itemInputs("gtceu:duranium_dust")
    .inputFluids("gtceu:recombinated_dna_strands 1000")
    .outputFluids("gtceu:proto_cell_cluster 500")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(400).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.mixer("biochemline_mixer_11")
    .inputFluids("gtceu:ammonium_formate 1000","gtceu:mutated_bacterial_sludge 500")
    .outputFluids("gtceu:purified_generic_mass 1000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_12")
    .inputFluids("gtceu:deuterium_oxide 500","gtceu:purified_generic_mass 1000","gtceu:nitrous_oxide 250")
    .outputFluids("gtceu:recombinated_dna_strands 2000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_13")
    .itemInputs("16x gtceu:barium_sulfide_dust","16x gtceu:sodium_hydroxide_dust")
    .inputFluids("gtceu:evolved_bacterial_culture 250")
    .outputFluids("gtceu:mutated_bacterial_sludge 1000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(400).cleanroom(CleanroomType.STERILE_CLEANROOM)

    // Culture Growing
    event.recipes.gtceu.biochemical_reactor("biochemline_culture_1")
    .itemInputs("gtceu:petri_dish")
    .inputFluids("gtceu:bacteria 1000","gtceu:fermented_biomass 1000")
    .itemOutputs("kubejs:culture_1")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(400).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_culture_2")
    .itemInputs("gtceu:petri_dish")
    .inputFluids("gtceu:bacteria 1000","gtceu:fermented_biomass 1000")
    .itemOutputs("kubejs:culture_2")
    .EUt(GTValues.VA[GTValues.IV]).circuit(2).duration(400).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biovat("biochemline_biovat_cell_1")
    .chancedInput("kubejs:culture_1", 2500, 0)
    .inputFluids("gtceu:xenon_oxide 1000","gtceu:ethanol 288","gtceu:oxygen 10000")
    .itemOutputs("16x kubejs:cell_1")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(400).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biovat("biochemline_biovat_cell_2")
    .chancedInput("kubejs:culture_2", 2500, 0)
    .inputFluids("gtceu:xenon_oxide 1000","gtceu:ethanol 288","gtceu:oxygen 10000")
    .itemOutputs("16x kubejs:cell_2")
    .EUt(GTValues.VA[GTValues.IV]).circuit(2).duration(400).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biovat("biochemline_biovat_cell_3")
    .chancedInput("kubejs:culture_1", 5000, 0)
    .inputFluids("gtceu:rapid_replicate_protein_cells 2000")
    .itemOutputs("32x kubejs:cell_1")
    .EUt(GTValues.VA[GTValues.IV]).circuit(3).duration(100).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biovat("biochemline_biovat_cell_4")
    .chancedInput("kubejs:culture_2", 5000, 0)
    .inputFluids("gtceu:rapid_replicate_protein_cells 2000")
    .itemOutputs("32x kubejs:cell_2")
    .EUt(GTValues.VA[GTValues.IV]).circuit(4).duration(100).cleanroom(CleanroomType.STERILE_CLEANROOM)

    // Last Steps
    event.recipes.gtceu.biochemical_reactor("biochemline_growth_raw_1")
    .itemInputs("4x kubejs:cell_1","4x kubejs:cell_2")
    .notConsumable("gtceu:blacklight")
    .inputFluids("gtceu:oxygen 20000","gtceu:gelatin_mixture 3000")
    .outputFluids("gtceu:raw_growth_medium 1000")
    .EUt(GTValues.VA[GTValues.LuV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.biochemical_reactor("biochemline_step_14")
    .inputFluids("gtceu:blood_devrived_genetic_material 2000","gtceu:nutrient_medium 1500")
    .outputFluids("gtceu:evolved_bacterial_culture 2000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200).cleanroom(CleanroomType.STERILE_CLEANROOM)
})

// Intermed. Steps & Products for Supplementary Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("glucose_solution_1")
    .itemInputs("32x minecraft:sugar")
    .inputFluids("gtceu:distilled_water 1000")
    .outputFluids("gtceu:glucose_solution 500")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200)

    event.recipes.gtceu.chemical_reactor("saline_solution_1")
    .itemInputs("32x gtceu:salt_dust")
    .inputFluids("minecraft:water 2000")
    .outputFluids("gtceu:saline_solution 500")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200)

    event.recipes.gtceu.chemical_reactor("xenon_oxide_1")
    .inputFluids("gtceu:xenon 1000","gtceu:oxygen 1000")
    .outputFluids("gtceu:xenon_oxide 2000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200)

    event.recipes.gtceu.chemical_reactor("deuterium_oxide_1")
    .inputFluids("gtceu:deuterium 1000","gtceu:oxygen 1000")
    .outputFluids("gtceu:deuterium_oxide 2000")
    .EUt(GTValues.VA[GTValues.IV]).circuit(1).duration(200)

    event.recipes.gtceu.biochemical_reactor("nutrient_medium_1")
    .inputFluids("gtceu:saline_solution 250","gtceu:glucose_solution 250","gtceu:ammonium_formate 250","gtceu:distilled_water 2000")
    .outputFluids("gtceu:nutrient_medium 1000")
    .EUt(GTValues.VA[GTValues.LuV]).circuit(1).duration(300).cleanroom(CleanroomType.STERILE_CLEANROOM)

    // Stem Cell's 
    event.recipes.gtceu.biochemical_reactor("stem_cells")
    .itemInputs("16x gtceu:trinium_dust","4x gtceu:oxmiridium_dust")
    .inputFluids("gtceu:sterilized_growth_medium 500","gtceu:high_purity_protein 1000")
    .itemOutputs("16x gtceu:stem_cells")
    .outputFluids("gtceu:bacterial_sludge 2000")
    .EUt(GTValues.VA[GTValues.LuV]).circuit(1).duration(1000).cleanroom(CleanroomType.STERILE_CLEANROOM)
})