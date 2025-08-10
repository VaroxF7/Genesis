ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("t1_lv_circuit_1")
    .itemInputs("2x #gtceu:resistors","gtceu:resin_printed_circuit_board","kubejs:rose_quartz_plate","2x create:electron_tube","3x gtceu:red_alloy_single_cable")
    .itemOutputs("kubejs:t1_circuit_lv")
    .inputFluids([Fluid.of("gtceu:soldering_alloy",144)])
    .EUt(GTValues.VA[GTValues.ULV]).duration(50)

    event.recipes.gtceu.assembler("t1_lv_circuit_2")
    .itemInputs("2x #gtceu:resistors","gtceu:resin_printed_circuit_board","kubejs:rose_quartz_plate","2x create:electron_tube","3x gtceu:red_alloy_single_cable")
    .itemOutputs("kubejs:t1_circuit_lv")
    .inputFluids([Fluid.of("gtceu:tin",288)])
    .EUt(GTValues.VA[GTValues.ULV]).duration(50)

    event.recipes.gtceu.assembler("t1_lv_circuit_3")
    .itemInputs("2x #gtceu:resistors","gtceu:resin_printed_circuit_board","kubejs:rose_quartz_plate","2x create:electron_tube","3x gtceu:red_alloy_single_cable")
    .itemOutputs("kubejs:t1_circuit_lv")
    .inputFluids([Fluid.of("gtceu:silver",75)])
    .EUt(GTValues.VA[GTValues.LV]).duration(50)

    event.shaped('kubejs:t1_circuit_lv',[
    'ABA', 
    'CDC', 
    'FFF'  
  ], {
    A: '#gtceu:resistors', 
    B: 'kubejs:rose_quartz_plate',
    C: 'create:electron_tube',
    D: 'gtceu:resin_printed_circuit_board',
    F: 'gtceu:red_alloy_single_cable'
  })

  // LuV Circuit
      event.recipes.gtceu.advanced_circuit_manufacturer("circuit_luv_1")
    .itemInputs([
        Item.of("4x kubejs:superclust_7"),
        Item.of("32x kubejs:quant_chip_1"),
        Item.of("32x kubejs:quant_chip_2"),
        Item.of("32x kubejs:quant_chip_3"),
        Item.of("32x kubejs:quant_chip_4"),
        Item.of("32x kubejs:quant_chip_5"),
        Item.of("6x kubejs:superclust_5"),
        Item.of("6x kubejs:superclust_1"),
        Item.of("64x gtceu:samarium_iron_arsenic_oxide_single_wire"),
        Item.of("64x gtceu:trinium_single_wire"),
        Item.of("9x gtceu:dense_rhodium_plated_palladium_plate")
    ])
    .inputFluids([Fluid.of("gtceu:high_grade_solder",12500),Fluid.of("gtceu:cryotheum",25000)])
    .itemOutputs("kubejs:t1_circuit_luv")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    // ZPM Version of LuV
    event.recipes.gtceu.advanced_circuit_manufacturer("circuit_luv_1_version_zpm")
    .itemInputs([
        Item.of("16x kubejs:quant_chip_1"),
        Item.of("16x kubejs:quant_chip_2"),
        Item.of("16x kubejs:quant_chip_3"),
        Item.of("16x kubejs:quant_chip_4"),
        Item.of("16x kubejs:quant_chip_5"),
        Item.of("3x kubejs:superclust_5"),
        Item.of("3x kubejs:superclust_1"),
        Item.of("16x gtceu:uranium_rhodium_dinaquadide_single_wire"),
        Item.of("32x gtceu:americium_foil"),
        Item.of("16x gtceu:fine_americium_wire"),
        Item.of("32x gtceu:tritanium_foil"),
        Item.of("16x gtceu:fine_tritanium_wire")
    ])
    .inputFluids([Fluid.of("gtceu:high_grade_solder",15000),Fluid.of("gtceu:cryotheum",30000)])
    .itemOutputs("kubejs:t1_circuit_luv")
    .EUt(GTValues.VA[GTValues.ZPM]).duration(500).circuit(2)
    .dimension("ad_astra:earth_orbit")

    // ZPM Circuit
    event.recipes.gtceu.advanced_circuit_manufacturer("circuit_zpm_1")
    .itemInputs([
        Item.of("kubejs:t1_circuit_luv"),
        Item.of("16x gtceu:uranium_rhodium_dinaquadide_octal_wire"),
        Item.of("128x gtceu:duranium_foil"),
        Item.of("128x gtceu:trinium_foil"),
        Item.of("16x kubejs:crystal_cpu"),
        Item.of("32x kubejs:quant_chip_1"),
        Item.of("32x kubejs:quant_chip_3"),
        Item.of("32x kubejs:quant_chip_4"),
        Item.of("16x kubejs:superclust_5"),
        Item.of("16x kubejs:superclust_1"),
        Item.of("16x kubejs:superclust_4"),
        Item.of("128x gtceu:fine_europium_wire"),
        Item.of("32x gtceu:quantum_star")
        
    ])
    .inputFluids([Fluid.of("gtceu:high_grade_solder",30000),Fluid.of("gtceu:naqatrite",25000)])
    .itemOutputs("kubejs:t1_circuit_zpm")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1000).circuit(1)
    .dimension("ad_astra:earth_orbit")

    // Crystal CPU
    event.recipes.gtceu.advanced_circuit_manufacturer("crystal_cpu_1")
    .itemInputs([
        Item.of("8x gtceu:engraved_crystal_chip"),
        Item.of("kubejs:cmc_chip"),
        Item.of("kubejs:ctc_chip"),
        Item.of("32x gtceu:fine_europium_wire"),
        Item.of("16x gtceu:fine_naquadah_wire")
    ])
    .itemOutputs("kubejs:crystal_cpu")
    .inputFluids([Fluid.of("gtceu:high_grade_solder",5500),Fluid.of("gtceu:cryotheum",15000),Fluid.of("gtceu:duranium",2500)])
    .EUt(GTValues.VA[GTValues.EV]).duration(500).circuit(1)
    .dimension("ad_astra:earth_orbit")
})