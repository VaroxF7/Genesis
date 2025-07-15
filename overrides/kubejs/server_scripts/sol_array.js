ServerEvents.recipes(event => {
   // Sol Array
   event.recipes.gtceu.sol_array("rcp_sol_array_1")
   .chancedInput("kubejs:rhodium_palladium_reflector", 5000, 0)
   .outputFluids([Fluid.of("gtceu:solarium",1000)])
   .duration(6000).EUt(GTValues.VA[GTValues.LuV]).dimension("ad_astra:earth_orbit").circuit(1)

   event.recipes.gtceu.sol_array("rcp_sol_array_2")
   .chancedInput("kubejs:rhodium_palladium_reflector", 2500, 0)
   .outputFluids([Fluid.of("gtceu:solarium",2500)])
   .duration(3600).EUt(GTValues.VA[GTValues.LuV]).dimension("ad_astra:moon_orbit").circuit(2)

   event.recipes.gtceu.sol_array("rcp_sol_array_3")
   .chancedInput("kubejs:rhodium_palladium_reflector", 1500, 0)
   .outputFluids([Fluid.of("gtceu:solarium",5000)])
   .duration(2000).EUt(GTValues.VA[GTValues.ZPM]).dimension("ad_astra:mercury_orbit").circuit(3)

   // MK2 Reflector
   event.recipes.gtceu.sol_array("rcp_sol_array_4")
   .itemInputs("gtceu:neutron_reflector")
   .outputFluids([Fluid.of("gtceu:solarium",10000)])
   .duration(6000).EUt(GTValues.VA[GTValues.ZPM]).dimension("ad_astra:mercury_orbit").circuit(1)

   event.recipes.gtceu.sol_array("rcp_sol_array_5")
   .itemInputs("gtceu:neutron_reflector")
   .outputFluids([Fluid.of("gtceu:solarium",15000)])
   .duration(2000).EUt(GTValues.VA[GTValues.UV]).dimension("ad_astra:venus_orbit").circuit(2)

   // Reflector
   event.recipes.gtceu.assembler("rhodium_palladium_reflector")
   .itemInputs("4x gtceu:double_hsse_plate","2x gtceu:double_rhodium_plated_palladium_plate")
   .inputFluids([Fluid.of("gtceu:titanium",1000)])
   .itemOutputs("kubejs:rhodium_palladium_reflector")
   .duration(500).EUt(GTValues.VA[GTValues.HV])
})

