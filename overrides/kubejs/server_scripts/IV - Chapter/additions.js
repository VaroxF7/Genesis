ServerEvents.recipes(event => {
    // Assembly Line
   event.recipes.gtceu.assembler("ass_line_rcp_1")
   .itemInputs("32x gtceu:hsse_bolt","16x gtceu:hsss_plate","2x gtceu:iv_robot_arm","gtceu:assembly_line_casing","8x #gtceu:circuits/ev","gtceu:iv_machine_casing")
   .itemOutputs("gtceu:assembly_line")
   .EUt(GTValues.VA[GTValues.IV]).duration(300)

   event.recipes.gtceu.assembler("ass_line_casing_rcp_1")
   .itemInputs("4x gtceu:nano_cpu_chip","16x gtceu:hsss_plate","4x gtceu:iv_electric_motor","gtceu:tungsten_steel_frame","4x gtceu:circuits/ev")
   .itemOutputs("gtceu:assembly_line_casing")
   .EUt(GTValues.VA[GTValues.IV]).duration(250)

   event.recipes.gtceu.assembler("ass_line_casing_rcp_2")
   .itemInputs("2x gtceu:qbit_cpu_chip","16x gtceu:hsss_plate","2x gtceu:iv_electric_motor","gtceu:tungsten_steel_frame","2x gtceu:circuits/ev")
   .itemOutputs("gtceu:assembly_line_casing")
   .EUt(GTValues.VA[GTValues.IV]).duration(250)

   // Lithography Tungsten Focus
   event.recipes.gtceu.forming_press("tungsten_focus")
   .itemInputs("gtceu:tungsten_steel_ingot")
   .notConsumable("gtceu:ball_casting_mold")
   .itemOutputs("kubejs:tungsten_laser_focus")
   .EUt(GTValues.VA[GTValues.HV]).duration(250)

   // LuV Stuff
   event.recipes.gtceu.assembly_line("luv_hull")
   .itemInputs("gtceu:rhodium_plated_palladium_plate","3x gtceu:samarium_iron_arsenic_oxide_double_wire","3x gtceu:double_neodymium_plate","gtceu:luv_machine_casing")
   .itemOutputs("gtceu:luv_machine_hull")
   .inputFluids([Fluid.of("gtceu:polytetrafluoroethylene",288)])
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

   // AE2 Wafers - AE2 Processors
   event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_1")
   .itemInputs("128x #gtceu:transistors","9x gtceu:nand_memory_chip","9x gtceu:nor_memory_chip","9x gtceu:cpu_chip","9x ae2:printed_silicon","9x ae2:printed_logic_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_logic_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_2")
   .itemInputs("128x #gtceu:transistors","9x gtceu:nand_memory_chip","9x gtceu:nor_memory_chip","9x gtceu:cpu_chip","9x ae2:printed_silicon","9x ae2:printed_calculation_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_calculation_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_3")
   .itemInputs("128x #gtceu:transistors","9x gtceu:nand_memory_chip","9x gtceu:nor_memory_chip","9x gtceu:cpu_chip","9x ae2:printed_silicon","9x ae2:printed_engineering_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_engineering_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_4")
   .itemInputs("128x #gtceu:transistors","9x gtceu:nand_memory_chip","9x gtceu:nor_memory_chip","9x gtceu:cpu_chip","9x ae2:printed_silicon","9x megacells:printed_accumulation_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_accu_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_5")
   .itemInputs("128x #gtceu:transistors","9x gtceu:nand_memory_chip","9x gtceu:nor_memory_chip","9x gtceu:cpu_chip","9x ae2:printed_silicon","9x advanced_ae:printed_quantum_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_quantum_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048)

    // Nano
    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_1_nano")
   .itemInputs("64x #gtceu:transistors","9x gtceu:nano_cpu_chip","9x ae2:printed_silicon","9x ae2:printed_logic_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_logic_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_2_nano")
   .itemInputs("64x #gtceu:transistors","9x gtceu:nano_cpu_chip","9x ae2:printed_silicon","9x ae2:printed_calculation_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_calculation_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_3_nano")
   .itemInputs("64x #gtceu:transistors","9x gtceu:nano_cpu_chip","9x ae2:printed_silicon","9x ae2:printed_engineering_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_engineering_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_4_nano")
   .itemInputs("64x #gtceu:transistors","9x gtceu:nano_cpu_chip","9x ae2:printed_silicon","9x megacells:printed_accumulation_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_accu_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_5_nano")
   .itemInputs("64x #gtceu:transistors","9x gtceu:nano_cpu_chip","9x ae2:printed_silicon","9x advanced_ae:printed_quantum_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_quantum_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

   // Quantum
    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_1_quantum")
   .itemInputs("9x gtceu:qbit_cpu_chip","9x ae2:printed_silicon","9x ae2:printed_logic_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_logic_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_2_quantum")
   .itemInputs("9x gtceu:qbit_cpu_chip","9x ae2:printed_silicon","9x ae2:printed_calculation_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_calculation_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_3_quantum")
   .itemInputs("9x gtceu:qbit_cpu_chip","9x ae2:printed_silicon","9x ae2:printed_engineering_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_engineering_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_4_quantum")
   .itemInputs("9x gtceu:qbit_cpu_chip","9x ae2:printed_silicon","9x megacells:printed_accumulation_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_accu_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

    event.recipes.gtceu.advanced_circuit_manufacturer("ae2_wafer_5_quantum")
   .itemInputs("9x gtceu:qbit_cpu_chip","9x ae2:printed_silicon","9x advanced_ae:printed_quantum_processor")
   .inputFluids([Fluid.of("gtceu:indium",1296)])
   .itemOutputs("kubejs:ae_quantum_wafer")
   .EUt(GTValues.VA[GTValues.IV]).duration(2048).dimension("ad_astra:earth_orbit")

   

})
