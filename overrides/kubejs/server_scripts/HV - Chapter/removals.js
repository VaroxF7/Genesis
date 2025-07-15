ServerEvents.recipes(e => {
    const toRemoveId = [
        "gtceu:electric_blast_furnace/blast_titanium_gas","gtceu:electric_blast_furnace/blast_titanium","gtceu:electric_blast_furnace/phosphorus_boule",
        "ae2:network/cells/item_storage_components_cell_64k_part","ae2:network/cells/item_storage_components_cell_16k_part",
        "gtceu:laser_engraver/engrave_nor_phosphorus","gtceu:laser_engraver/engrave_nand_phosphorus","gtceu:laser_engraver/engrave_pic_phosphorus",
        "gtceu:laser_engraver/engrave_soc_phosphorus","gtceu:shaped/vacuum_freezer","gtceu:electrolyzer/bauxite_electrolysis","gtceu:centrifuge/centrifuge_ilmenite_pure_dust_to_dust",
        "gtceu:centrifuge/centrifuge_bauxite_pure_dust_to_dust","gtceu:thermal_centrifuge/centrifuge_bauxite_crushed_ore_to_refined_ore","gtceu:thermal_centrifuge/centrifuge_bauxite_purified_ore_to_refined_ore",
        "gtceu:thermal_centrifuge/centrifuge_ilmenite_crushed_ore_to_refined_ore","gtceu:thermal_centrifuge/centrifuge_ilmenite_purified_ore_to_refined_ore",
        "gtceu:chemical_bath/bathe_aluminium_crushed_ore_to_purified_ore","gtceu:macerator/macerate_bauxite_crushed_ore_to_dust","gtceu:macerator/macerate_ilmenite_refined_ore_to_dust","gtceu:macerator/macerate_ilmenite_crushed_ore_to_dust",
        "gtceu:packer/package_rutile_tiny_dust","gtceu:packer/package_rutile_small_dust","gtceu:shaped/tiny_dust_assembling_rutile","gtceu:shaped/small_dust_assembling_rutile","gtceu:shaped/electric_jetpack","gtceu:shaped/electric_jetpack_advanced",
        "gtceu:shaped/large_circuit_assembler","gtceu:chemical_reactor/nano_cpu_wafer","gtceu:large_chemical_reactor/nano_cpu_wafer","gtceu:chemical_reactor/qbit_cpu_wafer_radon","gtceu:chemical_reactor/qbit_cpu_wafer_quantum_eye",
        "gtceu:large_chemical_reactor/qbit_cpu_wafer_radon","gtceu:large_chemical_reactor/qbit_cpu_wafer_quantum_eye","ae2:network/cells/item_storage_components_cell_256k_part","megacells:cells/cell_component_1m",
        "ae2:inscriber/sky_stone_dust","create:milling/compat/ae2/sky_stone_block","advanced_ae:skysteel","megacells:transform/sky_steel_ingot","emitrades:villager_trades/fluix_researcher_12",
        "megacells:inscriber/accumulation_processor_print","gtceu:mixer/tungstensteel","aeinfinitybooster:infinity_card","aeinfinitybooster:dimension_card"
    ];   
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })
})