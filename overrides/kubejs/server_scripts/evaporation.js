ServerEvents.recipes(event => {
   event.recipes.gtceu.evaporation("lithium_1")
   .inputFluids([Fluid.of("gtceu:hot_brine",1000)])
   .outputFluids([Fluid.of("gtceu:lithium",500)])
   .EUt(GTValues.VA[GTValues.HV]).duration(900)
})