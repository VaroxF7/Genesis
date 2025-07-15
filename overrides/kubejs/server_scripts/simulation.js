ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:mk1_sim_chamber',
        [
        'AWA', 
        'CSC', 
        'WCW'
        ],
        {
            A: '#gtceu:circuits/hv',
            W: 'gtceu:magnesium_diboride_octal_wire',
            C: '#gtceu:circuits/hv',
            S: 'gtceu:hv_field_generator'
        }
    ).id('gtceu:shaped/mk1_sim_chamber')

    // Card & Satellite
    event.recipes.gtceu.assembler("card_1_recipe")
    .itemInputs("gtceu:hv_field_generator","3x gtceu:carbon_fiber_plate","3x #gtceu:circuits/hv","16x gtceu:fine_electrum_wire")
    .inputFluids([Fluid.of("gtceu:epoxy",567)])
    .itemOutputs("kubejs:cord_card_1")
    .duration(400).EUt(512)

    event.recipes.gtceu.assembler("sat_1_recipe")
    .itemInputs("8x gtceu:carbon_fiber_plate","gtceu:soc","16x gtceu:stainless_steel_bolt","3x gtceu:advanced_power_thruster")
    .inputFluids([Fluid.of("gtceu:epoxy",567)])
    .itemOutputs("kubejs:sat_1")
    .duration(400).EUt(512)

    // Missions
    event.recipes.gtceu.mk1_sim_chamber("tier1_sim_mission")
    .itemInputs("kubejs:cord_card_1","kubejs:sat_1").circuit(1)
    .itemOutputs([
        Item.of("256x gtceu:magnetite_ore"),
        Item.of("128x gtceu:redstone_ore"),
        Item.of("128x gtceu:cassiterite_ore"),
        Item.of("128x gtceu:ilmenite_ore"),
        Item.of("128x gtceu:nickel_ore"),
        Item.of("128x gtceu:galena_ore"),
        Item.of("128x gtceu:molybdenum_ore"),
        Item.of("128x gtceu:emerald_ore"),
        Item.of("128x gtceu:lead_ore"),
        Item.of("128x gtceu:certus_quartz_ore")
    ])
    .inputFluids([Fluid.of("gtceu:tritium", 12000)])
    .duration(1200).EUt(2048)

    event.recipes.gtceu.mk1_sim_chamber("tier1_sim_mission_2")
    .itemInputs("kubejs:cord_card_1","kubejs:sat_1").circuit(2)
    .itemOutputs([
        Item.of("256x gtceu:zeolite_ore"),
        Item.of("128x gtceu:pyrope_ore"),
        Item.of("64x gtceu:spessartine_ore"),
        Item.of("128x gtceu:granitic_mineral_sand_ore"),
        Item.of("128x gtceu:alunite_ore"),
        Item.of("64x gtceu:mica_ore"),
        Item.of("128x gtceu:ruby_ore"),
        Item.of("128x gtceu:chromite_ore"),
        Item.of("256x gtceu:silver_ore"),
        Item.of("256x gtceu:gold_ore"),
        Item.of("64x gtceu:saltpeter_ore")
    ])
    .inputFluids([Fluid.of("gtceu:tritium", 13000)])
    .duration(2000).EUt(2048)

    event.recipes.gtceu.mk1_sim_chamber("tier1_sim_mission_3")
    .itemInputs("kubejs:cord_card_1","kubejs:sat_1").circuit(3)
    .itemOutputs([
        Item.of("256x gtceu:tricalcium_phosphate_ore"),
        Item.of("128x gtceu:sphalerite_ore"),
        Item.of("256x gtceu:magnetite_ore"),
        Item.of("128x gtceu:nether_quartz_ore"),
        Item.of("128x gtceu:certus_quartz_ore"),
        Item.of("256x gtceu:coal_ore"),
        Item.of("128x gtceu:diamond_ore"),
        Item.of("128x gtceu:lazurite_ore"),
        Item.of("256x gtceu:silver_ore")
    ])
    .inputFluids([Fluid.of("gtceu:tritium", 13000)])
    .duration(1500).EUt(2048)
})



