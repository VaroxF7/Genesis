ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:litho_machine_mk1',
        [
        'AWA', 
        'CSC', 
        'WCW'
        ],
        {
            A: '#gtceu:circuits/mv',
            W: 'gtceu:manganese_phosphide_octal_wire',
            C: '#gtceu:circuits/mv',
            S: 'gtceu:mv_laser_engraver'
        }
    ).id('gtceu:shaped/litho_machine_1')

    function Lithography(id, input, lens, input3, fluidAmount, fluidAmount2, output, phos, special) {
        if (special) {
            event.recipes.gtceu.litho_machine_mk1(id)
                .circuit(3)
                .itemInputs(input)
                .itemInputs(input3)
                .notConsumable(InputItem.of(lens))
                .inputFluids(Fluid.of('gtceu:vanadium_gallium', fluidAmount))
                .inputFluids(Fluid.of('gtceu:diazonaphthoquinone', fluidAmount2))
                .chancedOutput(output, 10000, 0)
                .duration(1000)
                .EUt(512)
                .cleanroom(CleanroomType.CLEANROOM)
        } else if (phos) {
            event.recipes.gtceu.litho_machine_mk1(id)
                .circuit(2)
                .itemInputs(input)
                .itemInputs(input3)
                .notConsumable(InputItem.of(lens))
                .inputFluids(Fluid.of('gtceu:diazonaphthoquinone', fluidAmount))
                .inputFluids(Fluid.of('gtceu:air', fluidAmount2))
                .chancedOutput(output, 8000, 0)
                .duration(1200)
                .EUt(512)
                .cleanroom(CleanroomType.CLEANROOM)
        } else {
            event.recipes.gtceu.litho_machine_mk1(id)
                .circuit(1)
                .itemInputs(input)
                .itemInputs(input3)
                .notConsumable(InputItem.of(lens))
                .inputFluids(Fluid.of('gtceu:diazonaphthoquinone', fluidAmount))
                .inputFluids(Fluid.of('gtceu:air', fluidAmount2))
                .chancedOutput(output, 9500, 0)
                .duration(600)
                .EUt(200)
        }
    }
    

    Lithography('cpu', 'kubejs:prepared_silicon_wafer','gtceu:orange_glass_lens','', 500,250, 'gtceu:cpu_wafer', false, false)
    Lithography('ram', 'kubejs:prepared_silicon_wafer','gtceu:magenta_glass_lens','', 250,250, 'gtceu:ram_wafer', false, false)
    Lithography('ic', 'kubejs:prepared_silicon_wafer','gtceu:light_blue_glass_lens','', 750,250, 'gtceu:ilc_wafer', false, false)
    Lithography('ulpic', 'kubejs:prepared_silicon_wafer','gtceu:yellow_glass_lens','', 250,250, 'gtceu:ulpic_wafer', false, false)
    Lithography('lpic', 'kubejs:prepared_silicon_wafer','gtceu:lime_glass_lens','', 250,250, 'gtceu:lpic_wafer', false, false)
    Lithography('ssoc', 'kubejs:prepared_silicon_wafer','gtceu:blue_glass_lens','', 1000,500, 'gtceu:simple_soc_wafer', false, false)

    // Phosphorus
    Lithography('nand_mem', 'kubejs:prepared_phosphorus_wafer','gtceu:blue_glass_lens','', 750,250, 'gtceu:nand_memory_wafer', true, false)
    Lithography('nor', 'kubejs:prepared_phosphorus_wafer','gtceu:pink_glass_lens','', 1000,500, 'gtceu:nor_memory_wafer', true, false)
    Lithography('soc', 'kubejs:prepared_phosphorus_wafer','gtceu:yellow_glass_lens','', 1500,750, 'gtceu:soc_wafer', true, false)
    Lithography('mpic', 'kubejs:prepared_phosphorus_wafer','gtceu:brown_glass_lens','', 1000,500, 'gtceu:mpic_wafer', true, false)
    Lithography('ltmc', 'kubejs:prepared_phosphorus_wafer','gtceu:red_glass_lens','', 750,250, 'kubejs:ltmc_wafer', true, false)
    
    // Special
    Lithography('hpic', 'kubejs:prepared_phosphorus_wafer','gtceu:red_glass_lens','4x gtceu:indium_gallium_phosphide_dust', 2000,1000, 'gtceu:hpic_wafer', false, true)
})

// Lithography MK2 Recipes 
ServerEvents.recipes(event => {
    event.recipes.gtceu.litho_machine_mk2("hpcc_1")
    .itemInputs("gtceu:hpic_chip","gtceu:cpu_chip","16x gtceu:fine_palladium_wire")
    .itemOutputs("kubejs:rhpcc_chip")
    .inputFluids([Fluid.of("gtceu:xenon",4000),Fluid.of("gtceu:epoxy",1200)])
    .duration(2000).circuit(1)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.litho_machine_mk2("prep_nano_wafer")
    .itemInputs("4x kubejs:rhpcc_chip","16x gtceu:fine_platinum_wire")
    .itemOutputs("kubejs:prep_n_wafer")
    .inputFluids([Fluid.of("gtceu:helium",1500),Fluid.of("gtceu:diazonaphthoquinone",1000)])
    .duration(2000).circuit(2)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.litho_machine_mk2("rcp_1")
    .itemInputs("kubejs:prep_n_wafer","gtceu:fiber_reinforced_circuit_board")
    .notConsumable("kubejs:nwm")
    .inputFluids([Fluid.of("gtceu:diazonaphthoquinone",2000)])
    .itemOutputs("gtceu:nano_cpu_wafer")
    .duration(2000).circuit(4)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.litho_machine_mk2("adv_nwr_1")
    .itemInputs("gtceu:nano_cpu_wafer")
    .notConsumable("gtceu:lime_glass_lens")
    .notConsumable("kubejs:tungsten_laser_focus")
    .inputFluids([Fluid.of("gtceu:krypton",2500),Fluid.of("gtceu:diazonaphthoquinone",2000)])
    .itemOutputs("kubejs:ancw")
    .duration(2000).circuit(5)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.litho_machine_mk2("qbit_wafer_rcp_1")
    .itemInputs("kubejs:ancw","32x gtceu:indium_antimonide_dust")
    .inputFluids([Fluid.of("gtceu:radon_xenotrihydride",1500),Fluid.of("gtceu:tetramethylammonium_hydroxide",500)])
    .itemOutputs("gtceu:qbit_cpu_wafer")
    .notConsumable("kubejs:qwm")
    .duration(1000).circuit(2)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.LuV])
})

// MK2 Lithography for Naquadah Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_bath("naq_wafer_prep")
    .itemInputs("gtceu:naquadah_wafer")
    .inputFluids([Fluid.of("gtceu:organosilicate",1500)])
    .itemOutputs("kubejs:prepared_naquadah_wafer")
    .EUt(GTValues.VA[GTValues.HV]).duration(200)

    event.recipes.gtceu.litho_machine_mk2("naq_litho_1")
    .itemInputs("kubejs:prepared_naquadah_wafer","16x gtceu:trinium_dust")
    .notConsumable("#forge:lenses/purple")
    .itemOutputs("gtceu:advanced_soc_wafer")
    .inputFluids([Fluid.of("gtceu:xenon",12000),Fluid.of("gtceu:epoxy",3200),Fluid.of("gtceu:cryotheum",10000)])
    .duration(1500).circuit(1)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.litho_machine_mk2("naq_litho_2")
    .itemInputs("kubejs:prepared_naquadah_wafer","25x gtceu:trinium_dust","8x gtceu:pure_naquadah_dust")
    .notConsumable("#forge:lenses/white")
    .itemOutputs("gtceu:uhpic_wafer")
    .inputFluids([Fluid.of("gtceu:krypton",8000),Fluid.of("gtceu:epoxy",4200),Fluid.of("gtceu:cryotheum",10000)])
    .duration(1500).circuit(2)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.litho_machine_mk2("naq_litho_3")
    .itemInputs("kubejs:prepared_naquadah_wafer","32x gtceu:trinium_dust","64x gtceu:platinum_dust")
    .notConsumable("#forge:lenses/blue")
    .itemOutputs("kubejs:cmc_wafer")
    .inputFluids([Fluid.of("gtceu:neon",4000),Fluid.of("gtceu:epoxy",4200),Fluid.of("gtceu:cryotheum",10000)])
    .duration(1500).circuit(3)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.litho_machine_mk2("naq_litho_4")
    .itemInputs("kubejs:prepared_naquadah_wafer","32x gtceu:trinium_dust","64x gtceu:graphene_dust")
    .notConsumable("#forge:lenses/blue")
    .itemOutputs("kubejs:ctc_wafer")
    .inputFluids([Fluid.of("gtceu:neon",4000),Fluid.of("gtceu:epoxy",4200),Fluid.of("gtceu:cryotheum",10000)])
    .duration(1500).circuit(4)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.LuV])

    // Engraved Plate for Crystal Chip
    event.recipes.gtceu.litho_machine_mk2("engraved_plates_1")
    .itemInputs("gtceu:emerald_plate")
    .notConsumable("kubejs:tungsten_laser_focus")
    .inputFluids([Fluid.of("gtceu:cryotheum",5000),Fluid.of("gtceu:neon",2500)])
    .itemOutputs("gtceu:engraved_crystal_chip")
    .dimension("ad_astra:earth_orbit")
    .duration(800).circuit(1)
    .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.litho_machine_mk2("engraved_plates_2")
    .itemInputs("gtceu:olivine_plate")
    .notConsumable("kubejs:tungsten_laser_focus")
    .inputFluids([Fluid.of("gtceu:cryotheum",5000),Fluid.of("gtceu:neon",2500)])
    .itemOutputs("gtceu:engraved_crystal_chip")
    .dimension("ad_astra:earth_orbit")
    .duration(800).circuit(2)
    .EUt(GTValues.VA[GTValues.IV])

    // MK2 Lithography for Neutronium Recipes
    event.recipes.gtceu.litho_machine_mk2("neutronium_litho_1_low")
    .itemInputs("gtceu:neutronium_wafer")
    .notConsumable("#forge:lenses/white").notConsumable("gtceu:gravitation_engine_unit")
    .itemOutputs("kubejs:prepared_neutronium_wafer")
    .chancedOutput("gtceu:prepared_neutronium_wafer", 2500, 0)
    .inputFluids([Fluid.of("gtceu:subatomic_pattering_gel",8000),Fluid.of("gtceu:deuterium_oxide",8000),Fluid.of("gtceu:supercooled_cryotheum",20000)])
    .duration(2000).circuit(1)
    .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.litho_machine_mk2("neutronium_litho_1")
    .itemInputs("gtceu:neutronium_wafer","32x gtceu:uranium_rhodium_dinaquadide_dust")
    .notConsumable("#forge:lenses/white")
    .itemOutputs("kubejs:prepared_neutronium_wafer")
    .inputFluids([Fluid.of("gtceu:subatomic_pattering_gel",8000),Fluid.of("gtceu:quantum_star",4000),Fluid.of("gtceu:supercooled_cryotheum",20000)])
    .duration(800).circuit(1)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.litho_machine_mk2("neutronium_litho_wafer_1")
    .itemInputs("kubejs:prepared_neutronium_wafer","8x gtceu:iridium_dust")
    .notConsumable("#forge:lenses/black")
    .itemOutputs("gtceu:highly_advanced_soc_wafer")
    .inputFluids([Fluid.of("gtceu:tetramethylammonium_hydroxide",2000),Fluid.of("gtceu:subatomic_pattering_gel",200),Fluid.of("gtceu:supercooled_cryotheum",2000)])
    .duration(2000).circuit(1)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.litho_machine_mk2("neutronium_litho_wafer_2")
    .itemInputs("kubejs:prepared_neutronium_wafer","32x gtceu:sapphire_dust","16x kubejs:super_seperator","32x gtceu:cadmium_dust")
    .notConsumable("#forge:lenses/yellow")
    .itemOutputs("kubejs:hahdic_wafer")
    .inputFluids([Fluid.of("gtceu:tetramethylammonium_hydroxide",2500),Fluid.of("gtceu:subatomic_pattering_gel",400),Fluid.of("gtceu:supercooled_cryotheum",500)])
    .duration(2000).circuit(2)
    .dimension("ad_astra:earth_orbit")
    .EUt(GTValues.VA[GTValues.UV])

    // Chip Cutting Recipes
    event.recipes.gtceu.cutter("cut_1_ctc")
    .itemInputs("kubejs:ctc_wafer")
    .inputFluids([Fluid.of("gtceu:lubricant",250)])
    .itemOutputs("kubejs:ctc_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(850).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_2_ctc")
    .itemInputs("kubejs:ctc_wafer")
    .inputFluids([Fluid.of("gtceu:distilled_water",750)])
    .itemOutputs("kubejs:ctc_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1250).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_3_ctc")
    .itemInputs("kubejs:ctc_wafer")
    .inputFluids([Fluid.of("minecraft:water",1000)])
    .itemOutputs("kubejs:ctc_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(2000).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_1_cmc")
    .itemInputs("kubejs:cmc_wafer")
    .inputFluids([Fluid.of("gtceu:lubricant",250)])
    .itemOutputs("kubejs:cmc_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(850).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_2_cmc")
    .itemInputs("kubejs:cmc_wafer")
    .inputFluids([Fluid.of("gtceu:distilled_water",750)])
    .itemOutputs("kubejs:cmc_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1250).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_3_cmc")
    .itemInputs("kubejs:cmc_wafer")
    .inputFluids([Fluid.of("minecraft:water",1000)])
    .itemOutputs("kubejs:cmc_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(2000).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_1_hahdic")
    .itemInputs("kubejs:hahdic_wafer")
    .inputFluids([Fluid.of("gtceu:lubricant",250)])
    .itemOutputs("kubejs:hahdic_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(850).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_2_hahdic")
    .itemInputs("kubejs:hahdic_wafer")
    .inputFluids([Fluid.of("gtceu:distilled_water",750)])
    .itemOutputs("kubejs:hahdic_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(1250).cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter("cut_3_hahdic")
    .itemInputs("kubejs:hahdic_wafer")
    .inputFluids([Fluid.of("minecraft:water",1000)])
    .itemOutputs("kubejs:hahdic_chip")
    .EUt(GTValues.VA[GTValues.LuV]).duration(2000).cleanroom(CleanroomType.CLEANROOM)
})

// Wafer Contamination
const convertMap = {
    'gtceu:silicon_wafer': 'kubejs:dirty_silicon_wafer',
    'gtceu:phosphorus_wafer': 'kubejs:dirty_phosphorus_wafer',
    'gtceu:naquadah_wafer': 'kubejs:dirty_naquadah_wafer',
    'gtceu:neutronium_wafer': 'kubejs:dirty_neutronium_wafer',

    'kubejs:prepared_silicon_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:prepared_phosphorus_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:prepared_naquadah_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:prepared_neutronium_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:prep_n_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:prep_q_wafer': 'kubejs:dirty_processed_wafer',

    // All remaining wafers get the generic "dirty_processed_wafer"
    'gtceu:cpu_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:ram_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:ilc_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:ulpic_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:lpic_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:simple_soc_wafer': 'kubejs:dirty_processed_wafer',

    'gtceu:soc_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:nand_memory_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:nor_memory_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:mpic_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:hpic_wafer': 'kubejs:dirty_processed_wafer',

    'gtceu:nano_cpu_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:qbit_cpu_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:advanced_soc_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:highly_advanced_soc_wafer': 'kubejs:dirty_processed_wafer',
    'gtceu:uhpic_wafer': 'kubejs:dirty_processed_wafer',

    // Special
    'kubejs:ltmc_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:ancw': 'kubejs:dirty_processed_wafer',
    'kubejs:ctc_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:cmc_wafer': 'kubejs:dirty_processed_wafer',
    'kubejs:hahdic_wafer': 'kubejs:dirty_processed_wafer'
};

function tryConvertItem(item) {
    let dirtyId = convertMap[item.id];
    if (dirtyId) {
        return Item.of(dirtyId, item.count);
    }
    return null;
}

// Wafer Contamination
PlayerEvents.tick(event => {
    let player = event.player;
    let inventory = player.getInventory();
    // Check every slot in inventory (includes hotbar)
    for (let slot = 0; slot < inventory.getContainerSize(); slot++) {
        let item = inventory.getItem(slot);
        if (item && !item.isEmpty() && item.hasTag('kubejs:clean_wafer')) {
            let converted = tryConvertItem(item);
            if (converted) inventory.setItem(slot, converted);
        }
    }
    // Main hand
    let mainHand = player.getMainHandItem();
    if (mainHand && !mainHand.isEmpty() && mainHand.hasTag('kubejs:clean_wafer')) {
        let converted = tryConvertItem(mainHand);
        if (converted) player.setMainHandItem(converted);
    }
    // Offhand
    let offhand = player.getOffhandItem();
    if (offhand && !offhand.isEmpty() && offhand.hasTag('kubejs:clean_wafer')) {
        let converted = tryConvertItem(offhand);
        if (converted) player.setOffhandItem(converted);
    }
});

ServerEvents.tags('item', event => {
    const cleanWafers = [
        'gtceu:silicon_wafer',
        'gtceu:phosphorus_wafer',
        'gtceu:naquadah_wafer',
        'gtceu:neutronium_wafer',

        'kubejs:prepared_silicon_wafer',
        'kubejs:prepared_phosphorus_wafer',
        'kubejs:prepared_naquadah_wafer',
        'kubejs:prepared_neutronium_wafer',
        'kubejs:prepared_nano_wafer',

        'gtceu:cpu_wafer',
        'gtceu:ram_wafer',
        'gtceu:ilc_wafer',
        'gtceu:ulpic_wafer',
        'gtceu:lpic_wafer',
        'gtceu:simple_soc_wafer',

        'gtceu:soc_wafer',
        'gtceu:nand_memory_wafer',
        'gtceu:nor_memory_wafer',
        'gtceu:mpic_wafer',
        'gtceu:hpic_wafer',

        'gtceu:nano_cpu_wafer',
        'gtceu:qbit_cpu_wafer',
        'gtceu:advanced_soc_wafer',
        'gtceu:highly_advanced_soc_wafer',
        'gtceu:uhpic_wafer',

        // special
        'kubejs:ltmc_wafer',
        'kubejs:prep_n_wafer',
        'kubejs:ancw',
        'kubejs:prep_q_wafer',
        'kubejs:ctc_wafer',
        'kubejs:cmc_wafer',
        'kubejs:hahdic_wafer'
    ]
    cleanWafers.forEach(wafer => event.add('kubejs:clean_wafer', wafer))
})


