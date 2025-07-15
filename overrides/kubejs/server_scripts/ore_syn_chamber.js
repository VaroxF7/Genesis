ServerEvents.recipes(event => {
    event.recipes.gtceu.ore_syn_chamber("olivine_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_bentonite"),
        Item.of("125x gtceu:raw_magnetite"),
        Item.of("125x gtceu:raw_olivine"),
        Item.of("125x gtceu:raw_glauconite_sand"),
        Item.of("125x gtceu:raw_lithium")
    ])
    .circuit(1).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("sapphire_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_almandine"),
        Item.of("256x gtceu:raw_pyrope"),
        Item.of("125x gtceu:raw_sapphire"),
        Item.of("256x gtceu:raw_green_sapphire"),
        Item.of("125x gtceu:raw_ruby")
    ])
    .circuit(2).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("iron_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_goethite"),
        Item.of("512x gtceu:raw_magnetite"),
        Item.of("256x gtceu:raw_hematite"),
        Item.of("256x gtceu:raw_malachite")
    ])
    .circuit(3).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("lubri_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_soapstone"),
        Item.of("512x gtceu:raw_talc"),
        Item.of("125x gtceu:raw_glauconite_sand"),
        Item.of("512x gtceu:raw_pentlandite")
    ])
    .circuit(4).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("tetra_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_tetrahedrite"),
        Item.of("512x minecraft:raw_copper"),
        Item.of("125x gtceu:raw_stibnite"),
        Item.of("512x gtceu:raw_bastnasite")
    ])
    .circuit(5).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("monazite_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_bastnasite"),
        Item.of("512x gtceu:raw_monazite"),
        Item.of("125x gtceu:raw_neodymium"),
        Item.of("512x gtceu:raw_cinnabar")
    ])
    .circuit(6).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("redstone_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_redstone"),
        Item.of("512x gtceu:raw_ruby"),
        Item.of("512x gtceu:raw_cinnabar")
    ])
    .circuit(7).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("manganese_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_grossular"),
        Item.of("512x gtceu:raw_spessartine"),
        Item.of("512x gtceu:raw_pyrolusite"),
        Item.of("256x gtceu:raw_tantalite")
    ])
    .circuit(8).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("copper_tin_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_chalcopyrite"),
        Item.of("512x gtceu:raw_zeolite"),
        Item.of("512x gtceu:raw_cassiterite"),
        Item.of("256x gtceu:raw_realgar")
    ])
    .circuit(9).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("salpeter_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_saltpeter"),
        Item.of("512x gtceu:raw_diatomite"),
        Item.of("512x gtceu:raw_electrotine"),
        Item.of("256x gtceu:raw_alunite")
    ])
    .circuit(10).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("coal_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_coal"),
        Item.of("256x gtceu:raw_magnetite"),
        Item.of("512x gtceu:raw_electrotine"),
        Item.of("256x gtceu:raw_alunite")
    ])
    .circuit(10).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("naq_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_naquadah"),
        Item.of("256x gtceu:raw_plutonium"),
        Item.of("512x gtceu:raw_uraninite"),
        Item.of("256x minecraft:raw_gold")
    ])
    .circuit(11).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("mag_end_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_magnetite"),
        Item.of("256x gtceu:raw_vanadium_magnetite"),
        Item.of("125x gtceu:raw_chromite"),
        Item.of("512x minecraft:raw_gold")
    ])
    .circuit(12).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("beryliium_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_beryllium"),
        Item.of("256x gtceu:raw_emerald")
    ])
    .circuit(13).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("lapis_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_lazurite"),
        Item.of("256x gtceu:raw_sodalite"),
        Item.of("512x gtceu:raw_lapis"),
        Item.of("256x gtceu:raw_calcite")
    ])
    .circuit(14).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("scheelite_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_scheelite"),
        Item.of("256x gtceu:raw_tungstate"),
        Item.of("512x gtceu:raw_lithium"),
        Item.of("256x gtceu:raw_calcite")
    ])
    .circuit(15).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("galena_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_galena"),
        Item.of("256x gtceu:raw_silver"),
        Item.of("512x gtceu:raw_lead"),
        Item.of("256x gtceu:raw_mica")
    ])
    .circuit(16).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("cassiterite_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_cassiterite"),
        Item.of("256x gtceu:raw_tin"),
        Item.of("125x gtceu:raw_lead"),
        Item.of("256x gtceu:raw_copper")
    ])
    .circuit(17).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("garnet_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_red_garnet"),
        Item.of("256x gtceu:raw_yellow_garnet"),
        Item.of("125x gtceu:raw_amethyst"),
        Item.of("256x gtceu:raw_opal")
    ])
    .circuit(18).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("mineral_sand_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_basaltic_mineral_sand"),
        Item.of("256x gtceu:raw_granitic_mineral_sand"),
        Item.of("125x gtceu:raw_fullers_earth"),
        Item.of("256x gtceu:raw_gypsum")
    ])
    .circuit(19).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("baxuite_end_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_bauxite"),
        Item.of("256x gtceu:raw_ilmenite"),
        Item.of("125x gtceu:raw_aluminium")
    ])
    .circuit(20).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("molybdenum_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_wulfenite"),
        Item.of("256x gtceu:raw_molybdenite"),
        Item.of("125x gtceu:raw_molybdenum"),
        Item.of("125x gtceu:raw_powellite")
    ])
    .circuit(21).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("sheldonite_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("256x gtceu:raw_bornite"),
        Item.of("256x gtceu:raw_cooperite"),
        Item.of("125x gtceu:raw_platinum"),
        Item.of("125x gtceu:raw_palladium")
    ])
    .circuit(22).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("pitchblend_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_pitchblende"),
        Item.of("512x gtceu:raw_uraninite")
    ])
    .circuit(23).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("salts_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_rock_salt"),
        Item.of("512x gtceu:raw_salt"),
        Item.of("256x gtceu:raw_lepidolite"),
        Item.of("125x gtceu:raw_spodumene")
    ])
    .circuit(24).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("band_iron_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_goethite"),
        Item.of("512x gtceu:raw_yellow_limonite"),
        Item.of("256x gtceu:raw_hematite"),
        Item.of("125x minecraft:raw_gold"),
        Item.of("512x minecraft:redstone")
    ])
    .circuit(25).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("apatite_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_apatite"),
        Item.of("512x gtceu:raw_tricalcium_phosphate"),
        Item.of("256x gtceu:raw_pyrochlore")
    ])
    .circuit(26).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("certus_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_quartzite"),
        Item.of("512x gtceu:raw_certus_quartz"),
        Item.of("256x gtceu:raw_barite"),
        Item.of("125x gtceu:raw_diamond")
    ])
    .circuit(27).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("diamond_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",256000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_diamond"),
        Item.of("256x gtceu:raw_graphite"),
        Item.of("125x gtceu:raw_coal"),
    ])
    .circuit(28).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("sulfur_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_sulfur"),
        Item.of("256x gtceu:raw_pyrite"),
        Item.of("125x gtceu:raw_sphalerite")
    ])
    .circuit(29).duration(800).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("dilithium_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",512000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_dilithium"),
        Item.of("256x gtceu:raw_plutonium")
    ])
    .circuit(30).duration(1200).EUt(GTValues.VA[GTValues.LuV])

    // Inert Rod
    event.recipes.gtceu.chemical_reactor("rod_infusion")
    .itemInputs("kubejs:graphene_rod")
    .itemOutputs("kubejs:inert_enriched_rod")
    .inputFluids([Fluid.of("gtceu:compressed_hydrogen",144),Fluid.of("gtceu:compressed_krypton",10000)])
    .circuit(1).duration(100).EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.extruder("graphene_rod")
    .itemInputs("gtceu:graphene_ingot")
    .notConsumable("gtceu:long_rod_extruder_mold")
    .itemOutputs("kubejs:graphene_rod")
    .duration(100).EUt(GTValues.VA[GTValues.MV])
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.ore_syn_chamber("zephyrite_aerogem_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_aether_air_plasma",12000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_zephyrite"),
        Item.of("256x gtceu:raw_aerogem")
    ])
    .circuit(1).duration(1200).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("cloudiron_nimbusite_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_aether_air_plasma",12000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_cloudiron"),
        Item.of("256x gtceu:raw_nimbusite")
    ])
    .circuit(2).duration(1500).EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.ore_syn_chamber("halocite_super_vein")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_aether_air_plasma",12000)
    ])
    .itemOutputs([
        Item.of("512x gtceu:raw_halocite"),
        Item.of("125x gtceu:raw_cloudiron"),
        Item.of("96x gtceu:raw_zephyrite"),
        Item.of("64x gtceu:raw_nimbusite")
    ])
    .circuit(3).duration(1100).EUt(GTValues.VA[GTValues.LuV])
})

// Sand aand Misc. Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.ore_syn_chamber("moon_turf_1")
    .itemInputs("kubejs:inert_enriched_rod")
    .inputFluids([
        Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",1000),
        Fluid.of("gtceu:super_compressed_hydrogen_plasma",12000)
    ])
    .notConsumable("ad_astra:moon_sand")
    .itemOutputs([
        Item.of("512x kubejs:moon_turf"),
        Item.of("256x ad_astra:moon_sand")
    ])
    .circuit(1).duration(1000).EUt(GTValues.VA[GTValues.IV])
})

// Crystalformic Acid Line
ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("acetylene")
    .inputFluids([Fluid.of("gtceu:acetone",144),Fluid.of("gtceu:ethylene",144)])
    .outputFluids([Fluid.of("gtceu:acetylene",144)])
    .EUt(GTValues.VA[GTValues.HV]).duration(200).circuit(1)

    event.recipes.gtceu.chemical_reactor("polyromatic_fluid")
    .itemInputs("16x gtceu:zeolite_dust")
    .inputFluids([Fluid.of("gtceu:toluene",144)])
    .outputFluids([Fluid.of("gtceu:polyromatic_fluid",144)])
    .EUt(GTValues.VA[GTValues.HV]).duration(200).circuit(1)

    event.recipes.gtceu.chemical_reactor("polycyclic_aromatic_hydrocarbon")
    .inputFluids([Fluid.of("gtceu:polyromatic_fluid",288),Fluid.of("gtceu:carbon",10512),Fluid.of("gtceu:hydrogen",2212)])
    .outputFluids([Fluid.of("gtceu:polycyclic_aromatic_hydrocarbon",144)])
    .EUt(GTValues.VA[GTValues.HV]).duration(200).circuit(1)

    event.recipes.gtceu.chemical_reactor("acrylic_acid")
    .inputFluids([Fluid.of("gtceu:propylene",144),Fluid.of("gtceu:oxygen",20000)])
    .outputFluids([Fluid.of("gtceu:acrylic_acid",144)])
    .EUt(GTValues.VA[GTValues.HV]).duration(200).circuit(1)

    event.recipes.gtceu.chemical_reactor("propylene")
    .inputFluids([Fluid.of("gtceu:propene",144),Fluid.of("gtceu:ethylene",144)])
    .outputFluids([Fluid.of("gtceu:propylene",144)])
    .EUt(GTValues.VA[GTValues.HV]).duration(200).circuit(1)

    event.recipes.gtceu.chemical_reactor("crystal_formic_aromatic_hydrocarbonized_acid")
    .inputFluids([Fluid.of("gtceu:acrylic_acid",144),Fluid.of("gtceu:polycyclic_aromatic_hydrocarbon",144),Fluid.of("gtceu:acetylene",144)])
    .outputFluids([Fluid.of("gtceu:crystal_formic_aromatic_hydrocarbonized_acid",144)])
    .EUt(GTValues.VA[GTValues.HV]).duration(200).circuit(1)
})

