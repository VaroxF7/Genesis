ServerEvents.recipes(event => {
// Compressor Recipes
event.recipes.gtceu.graviton_compressor("rcp_compressor_graviton_1")
.inputFluids([Fluid.of("gtceu:hydrogen",10000)])
.outputFluids([Fluid.of("gtceu:compressed_hydrogen",5000)])
.duration(1000).EUt(GTValues.VA[GTValues.IV]).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("rcp_compressor_graviton_2")
.inputFluids([Fluid.of("gtceu:compressed_hydrogen",10000)])
.outputFluids([Fluid.of("gtceu:super_compressed_hydrogen_plasma",5000)])
.duration(2000).EUt(GTValues.VA[GTValues.LuV]).circuit(2).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("rcp_compressor_graviton_3")
.inputFluids([Fluid.of("gtceu:krypton",10000)])
.outputFluids([Fluid.of("gtceu:compressed_krypton",5000)])
.duration(1000).EUt(GTValues.VA[GTValues.IV]).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("rcp_compressor_graviton_4")
.inputFluids([Fluid.of("gtceu:compressed_krypton",10000)])
.outputFluids([Fluid.of("gtceu:super_compressed_krypton_plasma",5000)])
.duration(2000).EUt(GTValues.VA[GTValues.LuV]).circuit(2).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("rcp_compressor_graviton_5")
.inputFluids([Fluid.of("gtceu:solarium",10000)])
.outputFluids([Fluid.of("gtceu:compressed_solarium",5000)])
.duration(1000).EUt(GTValues.VA[GTValues.IV]).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("rcp_compressor_graviton_6")
.inputFluids([Fluid.of("gtceu:compressed_solarium",10000)])
.outputFluids([Fluid.of("gtceu:super_compressed_solarium_plasma",5000)])
.duration(2000).EUt(GTValues.VA[GTValues.LuV]).circuit(2).dimension("ad_astra:earth_orbit")

// Nether Star
event.recipes.gtceu.graviton_compressor("rcp_1_nether_star")
.inputFluids([Fluid.of("gtceu:super_compressed_krypton_plasma",2500),Fluid.of("gtceu:super_compressed_hydrogen_plasma",2500)])
.outputFluids([Fluid.of("gtceu:liquid_nether_star",1000)])
.duration(1000).EUt(GTValues.VA[GTValues.LuV]).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.fluid_solidifier("nether_star_solidifier")
.notConsumable("gtceu:gear_casting_mold")
.inputFluids([Fluid.of("gtceu:liquid_nether_star",1000)])
.itemOutputs("4x minecraft:nether_star")
.duration(200).EUt(GTValues.VA[GTValues.HV]).dimension("ad_astra:earth_orbit")

// Silquadria Fuel
event.recipes.gtceu.graviton_compressor("silquadria_fuel_1")
.itemInputs("16x gtceu:americium_dust")
.inputFluids("gtceu:silquadria_plasma 1000","gtceu:compressed_hydrogen 2500")
.outputFluids([Fluid.of("gtceu:silquadria_fuel_plasma",500)])
.EUt(GTValues.VA[GTValues.UV]).duration(300).circuit(1).dimension("ad_astra:earth_orbit")

// Cryotheum
event.recipes.gtceu.graviton_compressor("cryotheum_rcp_1")
.inputFluids([Fluid.of("gtceu:ice",200000)])
.outputFluids([Fluid.of("gtceu:cryotheum",5000)])
.EUt(GTValues.VA[GTValues.IV]).duration(3000).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("cryotheum_rcp_2")
.inputFluids([Fluid.of("gtceu:ice",150000),Fluid.of("gtceu:fluoroantimonic_acid",5000)])
.outputFluids([Fluid.of("gtceu:cryotheum",5000)])
.EUt(GTValues.VA[GTValues.IV]).duration(2000).circuit(2).dimension("ad_astra:earth_orbit")

// Supercooled Cryotheum
event.recipes.gtceu.graviton_compressor("spercooled_cryotheum_rcp_1")
.inputFluids([Fluid.of("gtceu:cryotheum",10000),Fluid.of("gtceu:formic_acid",10000),Fluid.of("gtceu:radon",5000)])
.outputFluids([Fluid.of("gtceu:supercooled_cryotheum",10000)])
.EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1).dimension("ad_astra:earth_orbit")

// Plasmas
event.recipes.gtceu.graviton_compressor("plasma_1")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:gallium",10000)])
.outputFluids([Fluid.of("gtceu:gallium_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_2")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:osmium",10000)])
.outputFluids([Fluid.of("gtceu:osmium_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(2).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_3")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:iridium",10000)])
.outputFluids([Fluid.of("gtceu:iridium_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(3).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_4")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:yttrium",10000)])
.outputFluids([Fluid.of("gtceu:yttrium_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(4).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_5")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:cobalt",10000)])
.outputFluids([Fluid.of("gtceu:cobalt_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(5).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_6")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:tungsten",10000)])
.outputFluids([Fluid.of("gtceu:tungsten_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(6).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_7")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:samarium",10000)])
.outputFluids([Fluid.of("gtceu:samarium_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(7).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("plasma_8")
.notConsumable("gtceu:gravitation_engine_unit")
.inputFluids([Fluid.of("gtceu:vanadium",10000)])
.outputFluids([Fluid.of("gtceu:vanadium_pl_plasma",1000)])
.EUt(GTValues.VA[GTValues.ZPM]).duration(300).circuit(8).dimension("ad_astra:earth_orbit")

// Draconium & Neutronium
event.recipes.gtceu.graviton_compressor("neutronium_1")
.inputFluids([Fluid.of("gtceu:unstable_neutronium",1000),Fluid.of("gtceu:iridium",2500),Fluid.of("gtceu:supercooled_cryotheum",5000)])
.outputFluids([Fluid.of("gtceu:neutronium",1000)])
.EUt(GTValues.VA[GTValues.UV]).duration(300).circuit(1).dimension("ad_astra:earth_orbit")

event.recipes.gtceu.graviton_compressor("stable_draconium_1")
.inputFluids([Fluid.of("gtceu:unstable_draconium",1000),Fluid.of("gtceu:naquadria",2500),Fluid.of("gtceu:supercooled_cryotheum",5000)])
.outputFluids([Fluid.of("gtceu:draconium",500)])
.EUt(GTValues.VA[GTValues.UV]).duration(300).circuit(1).dimension("ad_astra:earth_orbit")
})