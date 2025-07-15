ServerEvents.recipes(e => {
    // Wrought Iron Recipes
    e.recipes.gtceu.electric_blast_furnace("wrought_iron_ingot_new")
     .itemInputs("4x #forge:ingots/iron","4x gtceu:carbon_dust")
     .itemOutputs("gtceu:wrought_iron_ingot")
     .inputFluids([Fluid.of("gtceu:nitrogen",2000)])
     .outputFluids([Fluid.of("gtceu:nitrogen_dioxide",1000)])
     .duration(2000).EUt(120).blastFurnaceTemp("1800");

     e.recipes.gtceu.electric_blast_furnace("wrought_iron_ingot_dust_new")
     .itemInputs("10x gtceu:ilmenite_dust","8x gtceu:carbon_dust")
     .itemOutputs("2x gtceu:wrought_iron_ingot")
     .inputFluids([Fluid.of("gtceu:oxygen",1000)])
     .outputFluids([Fluid.of("gtceu:carbon_dioxide",1500)])
     .duration(1500).EUt(200).blastFurnaceTemp("2000");

     // Aluminium Recipes
     e.recipes.gtceu.electric_blast_furnace('custom_bauxite_to_aluminium')
     .itemInputs('gtceu:bauxite_dust') 
     .inputFluids('gtceu:oxygen 288') 
     .outputFluids('gtceu:carbon_dioxide 144')
     .itemOutputs('gtceu:aluminium_ingot')
     .duration(1200).EUt(120).blastFurnaceTemp("1500");

     e.recipes.gtceu.electric_blast_furnace('custom_bauxite_ore_to_aluminium')
     .itemInputs('gtceu:raw_bauxite') 
     .inputFluids('gtceu:oxygen 576') 
     .outputFluids('gtceu:carbon_dioxide 288')
     .itemOutputs('gtceu:aluminium_ingot')
     .duration(1400).EUt(120).blastFurnaceTemp("1800");
     
     
   


})