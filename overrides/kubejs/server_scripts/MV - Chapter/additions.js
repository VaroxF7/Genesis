ServerEvents.recipes(event => {
    // FLuix Line
    event.recipes.gtceu.polarizer('charged_certus_new')
    .itemInputs('gtceu:certus_quartz_crystal')
    .itemOutputs('ae2:charged_certus_quartz_crystal')
    .duration(150).EUt(32)

    event.recipes.gtceu.chemical_reactor('fluix_dust_synthesis')
    .itemInputs('4x gtceu:nether_quartz_dust', '4x minecraft:redstone')
    .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
    .itemOutputs('4x ae2:fluix_dust')
    .duration(200).EUt(60)
    
    event.recipes.gtceu.autoclave('fluix_crytsal_synthetic')
    .itemInputs('ae2:charged_certus_quartz_crystal', '4x ae2:fluix_dust')
    .inputFluids(Fluid.of('gtceu:distilled_water', 1200))
    .itemOutputs('ae2:fluix_crystal')
    .duration(150).EUt(60)
    
    // AE2 - Processor Line
    event.recipes.gtceu.assembler("ae2_processor_1")
     .itemInputs("ae2:printed_silicon","ae2:printed_calculation_processor","#gtceu:circuits/mv","4x #gtceu:resistors","2x gtceu:fine_electrum_wire")
     .itemOutputs("ae2:calculation_processor")
     .inputFluids([Fluid.of("gtceu:red_alloy", 144)])
     .duration(100).EUt(120)

     event.recipes.gtceu.assembler("ae2_processor_2")
     .itemInputs("ae2:printed_silicon","ae2:printed_logic_processor","#gtceu:circuits/mv","4x #gtceu:resistors","2x gtceu:fine_electrum_wire")
     .itemOutputs("ae2:logic_processor")
     .inputFluids([Fluid.of("gtceu:red_alloy", 144)])
     .duration(100).EUt(120)

     event.recipes.gtceu.assembler("ae2_processor_3")
     .itemInputs("ae2:printed_silicon","ae2:printed_engineering_processor","#gtceu:circuits/mv","4x #gtceu:resistors","2x gtceu:fine_electrum_wire")
     .itemOutputs("ae2:engineering_processor")
     .inputFluids([Fluid.of("gtceu:red_alloy", 144)])
     .duration(100).EUt(120)

     event.recipes.gtceu.assembler("ae2_processor_4")
     .itemInputs("ae2:printed_silicon","megacells:printed_accumulation_processor","#gtceu:circuits/ev","8x #gtceu:resistors","4x gtceu:fine_electrum_wire")
     .itemOutputs("megacells:accumulation_processor")
     .inputFluids([Fluid.of("gtceu:silver", 1000)])
     .duration(200).EUt(480)

    // Printed Versions
    event.recipes.gtceu.forming_press("ae2:printed_vrsion_1")
    .itemInputs("gtceu:certus_quartz_plate")
    .itemOutputs("ae2:printed_calculation_processor")
    .notConsumable("ae2:calculation_processor_press")
    .duration(100).EUt(120)

    event.recipes.gtceu.forming_press("ae2:printed_vrsion_2")
    .itemInputs("gtceu:diamond_plate")
    .itemOutputs("ae2:printed_engineering_processor")
    .notConsumable("ae2:engineering_processor_press")
    .duration(100).EUt(120)

    event.recipes.gtceu.forming_press("ae2:printed_vrsion_3")
    .itemInputs("gtceu:electrum_plate")
    .itemOutputs("ae2:printed_logic_processor")
    .notConsumable("ae2:logic_processor_press")
    .duration(100).EUt(120)

    event.recipes.gtceu.forming_press("ae2:printed_vrsion_4")
    .itemInputs("gtceu:silicon_plate")
    .itemOutputs("ae2:printed_silicon")
    .notConsumable("ae2:silicon_press")
    .duration(100).EUt(120)

    // Misc Recipes - Fiberoptic & etc.
    event.recipes.gtceu.assembler("energized_block")
    .itemInputs("9x kubejs:energized_ingot_of_silicon")
    .itemOutputs("kubejs:energized_block_of_silicon")
    .duration(50).EUt(15)

    event.recipes.gtceu.polarizer("energizer_slicon")
    .itemInputs("gtceu:silicon_ingot")
    .itemOutputs("kubejs:energized_ingot_of_silicon")
    .duration(50).EUt(15)

    event.recipes.gtceu.wiremill("certus_glass_fiber")
    .itemInputs("gtceu:certus_quartz_plate")
    .itemOutputs("kubejs:certus_quartz_fine_fiber")
    .duration(50).EUt(15)

    // Fiberoptic
    event.recipes.gtceu.fiber_assembly_line("ae2_quartz_fiber")
    .itemInputs("6x gtceu:fine_borosilicate_glass_wire","3x kubejs:certus_quartz_fine_fiber")
    .itemOutputs("3x ae2:quartz_fiber")
    .duration(250).EUt(60)

    event.recipes.gtceu.fiber_assembly_line("ae2_quartz_glass_wire")
    .itemInputs("2x ae2:quartz_fiber","4x ae2:fluix_dust")
    .itemOutputs("ae2:fluix_glass_cable")
    .duration(250).EUt(120)

    // Controller & Drive & Assembler 
    event.recipes.gtceu.assembler("ae2_controller")
    .itemInputs("4x ae2:fluix_glass_cable","4x kubejs:energized_block_of_silicon","2x ae2:logic_processor","2x ae2:calculation_processor","2x ae2:engineering_processor","8x gtceu:stainless_steel_bolt")
    .itemOutputs("ae2:controller")
    .duration(125).EUt(60)

    event.recipes.gtceu.assembler("ae2_drive")
    .itemInputs("8x gtceu:stainless_steel_bolt","4x gtceu:stainless_steel_ingot","2x ae2:calculation_processor","2x ae2:fluix_glass_cable")
    .itemOutputs("ae2:drive")
    .duration(125).EUt(60)

    event.recipes.gtceu.assembler("ae2_assembler")
    .itemInputs("8x gtceu:stainless_steel_bolt","4x gtceu:stainless_steel_ingot","2x ae2:annihilation_core","2x ae2:formation_core","2x ae2:quartz_glass")
    .itemOutputs("ae2:molecular_assembler")
    .duration(125).EUt(60)

    // Moon Turf 
    event.recipes.gtceu.centrifuge("moon_turf_deuterium")
    .itemInputs("ad_astra:moon_sand")
    .itemOutputs("kubejs:moon_turf")
    .outputFluids([Fluid.of("gtceu:deuterium",567)])
    .duration(200).EUt(125)

    // Nether Juice - Sulfuric Acid
    event.recipes.gtceu.extractor("nether_juice")
    .itemInputs("minecraft:nether_wart")
    .outputFluids([Fluid.of("gtceu:nether_juice",144)])
    .duration(200).EUt(125)

    event.recipes.gtceu.distillery("nether_distillery")
    .inputFluids([Fluid.of("gtceu:nether_juice",288)])
    .outputFluids([Fluid.of("gtceu:distilled_nether_juice",144)])
    .duration(150).EUt(125).circuit(1)

    event.recipes.gtceu.distillery("sulfuric_acid_nether_juice")
    .inputFluids([Fluid.of("gtceu:distilled_nether_juice",288)])
    .outputFluids([Fluid.of("gtceu:sulfuric_acid",144)])
    .duration(200).EUt(120).circuit(2)
})

// Silicon Rework - Boule & Wafer
ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("silicon_slurry")
    .itemInputs("32x gtceu:silicon_dust")
    .inputFluids([Fluid.of("gtceu:distilled_water",288),Fluid.of("gtceu:sulfuric_acid",144)])
    .outputFluids([Fluid.of("gtceu:silicon_slurry",567)])
    .duration(400).EUt(120)

    event.recipes.gtceu.chemical_reactor("purification_silicon")
    .inputFluids([Fluid.of("gtceu:silicon_slurry",144),Fluid.of("gtceu:tritium_alcoholate",144)])
    .outputFluids([Fluid.of("gtceu:pure_silicon_crystal_slurry",144)])
    .duration(400).EUt(120)

    event.recipes.gtceu.electric_blast_furnace("pure_crystal_slurry_to_boule")
    .itemInputs("gtceu:small_gallium_arsenide_dust")
    .inputFluids([Fluid.of("gtceu:pure_silicon_crystal_slurry",1000)])
    .itemOutputs("gtceu:silicon_boule")
    .duration(4500).EUt(120).blastFurnaceTemp(2000).circuit(1)

    // Tritium Alocohlate
    event.recipes.gtceu.chemical_reactor("tritium_alcholoate_1")
    .itemInputs("4x gtceu:sodium_dust")
    .inputFluids([Fluid.of("gtceu:tritium",144),Fluid.of("gtceu:methanol",567)])
    .outputFluids([Fluid.of("gtceu:tritium_alcoholate",72)])
    .duration(200).EUt(60)

    // Wafer
    event.recipes.gtceu.chemical_reactor("prep_wafer_1")
    .inputFluids([Fluid.of("gtceu:ethanol",500),Fluid.of("gtceu:hydrogen_peroxide",250),Fluid.of("gtceu:trichlorosaline",250)])
    .outputFluids([Fluid.of("gtceu:organosilicate",288)])
    .duration(600).EUt(120)

    event.recipes.gtceu.chemical_bath("prep_wafer_2")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("kubejs:prepared_silicon_wafer")
    .inputFluids([Fluid.of("gtceu:organosilicate",500)])
    .duration(200).EUt(120)

    // Misc Interstep Products
    event.recipes.gtceu.chemical_reactor('trichlorosaline_mk1')
    .itemInputs('gtceu:silicon_dust')
    .inputFluids('gtceu:hydrogen_chloride 1000')
    .outputFluids('gtceu:trichlorosaline 500')
    .duration(600).EUt(120)

    event.recipes.gtceu.chemical_reactor('diazonaphtoquinone')
    .itemInputs('8x gtceu:sodium_dust')
    .inputFluids('gtceu:nitric_acid 250','gtceu:sulfuric_acid 500')
    .outputFluids('gtceu:diazonaphthoquinone 500')
    .duration(600).EUt(120).circuit(3)

    event.recipes.gtceu.chemical_reactor('hydrogen_chloride')
    .inputFluids([Fluid.of("gtceu:hydrogen",500),Fluid.of("gtceu:chlorine",750)])
    .outputFluids('gtceu:hydrogen_chloride 1000')
    .duration(200).EUt(60)
    
    event.recipes.gtceu.chemical_reactor('hydrogen_peroxide')
    .inputFluids('gtceu:hydrogen 500', 'gtceu:oxygen 1000')
    .outputFluids('gtceu:hydrogen_peroxide 1000')
    .duration(200).EUt(120)

    // Misc. Additions that arent related to anything major.
    event.recipes.gtceu.assembler("blank_patterns")
    .itemInputs("4x gtceu:polyvinyl_chloride_plate","2x gtceu:carbon_fiber_plate","ae2:calculation_processor")
    .itemOutputs("2x ae2:blank_pattern")
    .duration(100).EUt(15)

    event.recipes.gtceu.centrifuge("moon_turf_radon")
    .itemInputs("kubejs:moon_turf")
    .outputFluids([Fluid.of("gtceu:radon",144)])
    .duration(100).EUt(15)

    // 1k & 4k Storage Component AE2
    event.recipes.gtceu.circuit_assembler("1k_component_recipe")
    .itemInputs("4x #gtceu:circuits/hv","8x gtceu:fine_cobalt_wire","gtceu:certus_quartz_plate","2x ae2:logic_processor")
    .itemOutputs("ae2:cell_component_1k")
    .inputFluids([Fluid.of("gtceu:tin",144)])
    .duration(200).EUt(120)

    event.recipes.gtceu.circuit_assembler("4k_component_recipe")
    .itemInputs("3x ae2:cell_component_1k","16x gtceu:fine_cobalt_wire","4x gtceu:fine_electrum_wire","gtceu:plastic_printed_circuit_board")
    .itemOutputs("ae2:cell_component_4k")
    .inputFluids([Fluid.of("gtceu:silver",144)])
    .duration(200).EUt(120)

    event.recipes.gtceu.circuit_assembler("1k_component_recipe_chip")
    .itemInputs("8x gtceu:ram_chip","gtceu:cpu_chip","8x gtceu:fine_borosilicate_glass_wire","gtceu:plastic_printed_circuit_board")
    .itemOutputs("ae2:cell_component_1k")
    .inputFluids([Fluid.of("gtceu:sterling_silver",288)])
    .duration(100).EUt(120)

    event.recipes.gtceu.circuit_assembler("4k_component_recipe_chip") // this is gone for some reason?
    .itemInputs("24x gtceu:ram_chip","gtceu:cpu_chip","8x gtceu:fine_borosilicate_glass_wire","gtceu:plastic_printed_circuit_board")
    .itemOutputs("ae2:cell_component_4k")
    .inputFluids([Fluid.of("gtceu:sterling_silver",288)])
    .duration(100).EUt(120)

    // Crude Oil Refining
    event.recipes.gtceu.distillery("impure_crude")
    .inputFluids([Fluid.of("gtceu:impure_crude_oil",1000)])
    .outputFluids([Fluid.of("gtceu:oil", 250)])
    .duration(100).EUt(120).circuit(1)

    event.recipes.gtceu.distillery("heavy_impure_crude")
    .inputFluids([Fluid.of("gtceu:heavy_impure_crude_oil",1500)])
    .outputFluids([Fluid.of("gtceu:heavy_oil", 500)])
    .duration(100).EUt(120).circuit(2)
})

// Biofuel to Alumite Rocket Fuel
ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_reactor("plant_ball_new")
     .itemInputs("4x #createaddition:plants")
     .inputFluids([Fluid.of("createaddition:seed_oil", 400)])
     .itemOutputs("gtceu:plant_ball")
     .duration(120).EUt(9)

    e.recipes.gtceu.compressor("plant_ball_to_compressed")
     .itemInputs("gtceu:plant_ball")
     .itemOutputs("kubejs:compressed_plant_ball")
     .duration(50).EUt(12)

    e.recipes.gtceu.mixer("compressed_additives")
     .itemInputs("kubejs:compressed_plant_ball", "4x minecraft:sugar", "2x create:cinder_flour")
     .itemOutputs("createaddition:biomass")
     .inputFluids([Fluid.of("minecraft:water", 1200)])
     .duration(50).EUt(12)

    e.recipes.gtceu.chemical_bath("biomass_to_pure_variant")
     .itemInputs("createaddition:biomass")
     .inputFluids([Fluid.of("gtceu:distilled_water", 250)])
     .itemOutputs("kubejs:purified_biomass_pallet")
     .duration(120).EUt(15)

    e.recipes.gtceu.extractor("pure_to_liquid")
     .itemInputs("kubejs:purified_biomass_pallet")
     .outputFluids([Fluid.of("createaddition:bioethanol", 250)])
     .duration(120).EUt(15)

    e.recipes.gtceu.chemical_reactor("alumite_rocket_fuel_1")
     .inputFluids([Fluid.of("gtceu:high_octane_gasoline", 250)])
     .itemInputs("16x gtceu:lithium_dust")
     .outputFluids([Fluid.of("gtceu:alumite_rocket_fuel", 250)])
     .duration(200).EUt(120)

    e.recipes.gtceu.chemical_reactor("alumite_rocket_fuel_2")
     .inputFluids([Fluid.of("gtceu:octane", 250)])
     .itemInputs("16x gtceu:cobalt_dust")
     .outputFluids([Fluid.of("gtceu:alumite_rocket_fuel", 144)])
     .duration(200).EUt(120)
})












    



