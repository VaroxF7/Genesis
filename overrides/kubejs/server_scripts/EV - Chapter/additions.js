ServerEvents.recipes(event => {
// Lithography MK2 Interstep. Recipes
   event.recipes.gtceu.chemical_reactor("radon_xenon")
   .inputFluids([Fluid.of("gtceu:radon",1000), Fluid.of("gtceu:xenon",1000)])
   .outputFluids([Fluid.of("gtceu:radon_xenotrihydride",500)])
   .duration(200).EUt(512)

   event.recipes.gtceu.chemical_reactor("indium_antimonide")
   .itemInputs("2x gtceu:indium_dust","4x gtceu:antimony_dust")
   .itemOutputs("gtceu:indium_antimonide_dust")
   .inputFluids([Fluid.of("gtceu:helium",144)])
   .duration(200).EUt(512)

   event.recipes.gtceu.chemical_reactor("trimethylamine_1")
   .itemInputs("4x gtceu:aluminium_dust")
   .inputFluids([Fluid.of("gtceu:monochloramine",144),Fluid.of("gtceu:dimethylamine",144)])
   .outputFluids([Fluid.of("gtceu:trimethylamine",144)])
   .duration(200).EUt(512)

   event.recipes.gtceu.chemical_reactor("methyl_chloride")
   .inputFluids([Fluid.of("gtceu:methanol",250),Fluid.of("gtceu:hydrochloric_acid",200)])
   .outputFluids([Fluid.of("gtceu:methyl_chloride",144)])
   .duration(200).EUt(512)

   event.recipes.gtceu.chemical_reactor("tetramethylammonium_hydroxide")
   .inputFluids([Fluid.of("gtceu:methyl_chloride",144),Fluid.of("gtceu:trimethylamine",144),Fluid.of("gtceu:hydrogen",144)])
   .outputFluids([Fluid.of("gtceu:tetramethylammonium_hydroxide",288)])
   .duration(250).EUt(512)

   event.recipes.gtceu.assembler("mask_1")
   .itemInputs("8x gtceu:carbon_fiber_mesh","2x gtceu:small_osmium_dust")
   .inputFluids([Fluid.of("gtceu:epoxy",1500)])
   .itemOutputs("kubejs:nwm")
   .duration(250).EUt(2048)

   event.recipes.gtceu.assembler("mask_2")
   .itemInputs("8x gtceu:carbon_fiber_mesh","2x gtceu:small_iridium_dust")
   .inputFluids([Fluid.of("gtceu:epoxy",1500)])
   .itemOutputs("kubejs:qwm")
   .duration(250).EUt(2048)

   // AE2 Recipe - 256 - 1M
   // Normal
   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_1")
   .itemInputs("16x kubejs:rhpcc_chip","16x kubejs:ltmc_chip","gtceu:multilayer_fiber_reinforced_circuit_board","128x gtceu:fine_borosilicate_glass_wire")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",1000)])
   .itemOutputs("ae2:cell_component_256k")
   .EUt(GTValues.VA[GTValues.IV]).duration(500).dimension("ad_astra:earth_orbit")

   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_2")
   .itemInputs("8x kubejs:rhpcc_chip","3x ae2:cell_component_64k","gtceu:multilayer_fiber_reinforced_circuit_board","128x gtceu:fine_borosilicate_glass_wire")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",2000)])
   .itemOutputs("ae2:cell_component_256k")
   .EUt(GTValues.VA[GTValues.IV]).duration(1000).dimension("ad_astra:earth_orbit")

   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_3")
   .itemInputs("32x kubejs:rhpcc_chip","32x kubejs:ltmc_chip","gtceu:multilayer_fiber_reinforced_circuit_board","128x gtceu:fine_borosilicate_glass_wire")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",4000),Fluid.of("gtceu:radon_xenotrihydride",1000)])
   .itemOutputs("megacells:cell_component_1m")
   .EUt(GTValues.VA[GTValues.IV]).duration(500).dimension("ad_astra:earth_orbit")

   // Nano & Quantum
   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_4")
   .itemInputs("8x gtceu:qbit_cpu_chip","gtceu:multilayer_fiber_reinforced_circuit_board","16x gtceu:fine_platinum_wire")
   .itemOutputs("ae2:cell_component_256k")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",1500)])
   .EUt(GTValues.VA[GTValues.LuV]).duration(250).dimension("ad_astra:earth_orbit")

   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_5")
   .itemInputs("16x gtceu:nano_cpu_chip","gtceu:multilayer_fiber_reinforced_circuit_board","32x gtceu:fine_platinum_wire")
   .itemOutputs("ae2:cell_component_256k")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",2000)])
   .EUt(GTValues.VA[GTValues.LuV]).duration(1000).dimension("ad_astra:earth_orbit")

   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_6")
   .itemInputs("16x gtceu:qbit_cpu_chip","gtceu:multilayer_fiber_reinforced_circuit_board","32x gtceu:fine_platinum_wire")
   .itemOutputs("megacells:cell_component_1m")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",2500)])
   .EUt(GTValues.VA[GTValues.LuV]).duration(250).dimension("ad_astra:earth_orbit")

   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_7")
   .itemInputs("32x gtceu:nano_cpu_chip","gtceu:multilayer_fiber_reinforced_circuit_board","64x gtceu:fine_platinum_wire")
   .itemOutputs("megacells:cell_component_1m")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",4000)])
   .EUt(GTValues.VA[GTValues.LuV]).duration(1000).dimension("ad_astra:earth_orbit")

   event.recipes.gtceu.advanced_circuit_manufacturer("advcm_rcp_8")
   .itemInputs("32x megacells:accumulation_processor","gtceu:multilayer_fiber_reinforced_circuit_board","32x gtceu:fine_platinum_wire")
   .itemOutputs("megacells:cell_component_1m")
   .inputFluids([Fluid.of("gtceu:reinforced_epoxy_resin",2000)])
   .EUt(GTValues.VA[GTValues.LuV]).duration(500).dimension("ad_astra:earth_orbit")

   // Tungstensteel 
   event.recipes.gtceu.mixer("tungsten_sky_alloy")
   .itemInputs("4x gtceu:sky_stone_dust","2x gtceu:steel_dust","gtceu:tungsten_dust")
   .itemOutputs("gtceu:tungsten_steel_dust")
   .EUt(GTValues.VA[GTValues.EV]).duration(100)

   // Sky Steel
   event.recipes.gtceu.electric_blast_furnace("sky_steel_rcp1")
   .itemInputs("gtceu:sky_stone_dust","gtceu:certus_quartz_dust")
   .itemOutputs("megacells:sky_steel_ingot")
   .inputFluids([Fluid.of("gtceu:krypton",1000)])
   .EUt(GTValues.VA[GTValues.LuV]).duration(3000).blastFurnaceTemp(3000)

   event.recipes.gtceu.fluid_solidifier("sky_steel_rcp2")
   .itemOutputs("megacells:sky_steel_ingot")
   .notConsumable("gtceu:ingot_casting_mold")
   .inputFluids([Fluid.of("gtceu:molten_sky_stone",1000)])
   .EUt(GTValues.VA[GTValues.EV]).duration(1200)

   event.recipes.gtceu.forming_press("sky_steel_accumulator")
   .itemInputs("megacells:sky_steel_ingot")
   .itemOutputs("megacells:printed_accumulation_processor")
   .notConsumable("megacells:accumulation_processor_press")
   .EUt(GTValues.VA[GTValues.EV]).duration(200)

   // Dimension Card & Quantum Ring & Controller Recipes
   event.recipes.gtceu.assembler("controller_1")
   .itemInputs("8x #gtceu:circuits/ev","8x gtceu:double_titanium_plate","4x gtceu:platinum_single_cable","gtceu:ev_circuit_assembler")
   .itemOutputs("gtceu:advanced_circuit_manufacturer")
   .EUt(GTValues.VA[GTValues.EV]).duration(250)

   event.recipes.gtceu.assembler("controller_2")
   .itemInputs("8x #gtceu:circuits/ev","4x gtceu:double_titanium_plate","8x gtceu:platinum_single_cable","gtceu:litho_machine_mk1")
   .itemOutputs("gtceu:litho_machine_mk2")
   .EUt(GTValues.VA[GTValues.EV]).duration(250)

   // Misc.
   event.recipes.gtceu.assembler("dimension_card")
   .itemInputs("64x gtceu:nano_cpu_chip","4x minecraft:nether_star","4x gtceu:quantum_eye")
   .itemOutputs("aeinfinitybooster:dimension_card")
   .EUt(GTValues.VA[GTValues.EV]).duration(250)

})
