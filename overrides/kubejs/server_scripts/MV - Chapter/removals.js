ServerEvents.recipes(e => {
    const toRemoveId = [
       'gtceu:electric_blast_furnace/blast_aluminium','gtceu:electric_blast_furnace/rutile_from_ilmenite','gtceu:arc_furnace/arc_iron_ingot','ae2:transform/fluix_crystals','ae2:transform/fluix_crystal','create:mixing/compat/ae2/fluix_crystal','advanced_ae:fluixcrystals','advanced_ae:fluixcrystalfromdust',
       'ae2:inscriber/fluix_dust','create:milling/compat/ae2/fluix_crystal','ae2:network/blocks/controller','ae2:inscriber/calculation_processor_print','ae2:inscriber/logic_processor_print','ae2:inscriber/engineering_processor_print','ae2:inscriber/logic_processor',
       'advanced_ae:logic_processor_chamber','advanced_ae:logic_processor_chamber','advanced_ae:calculation_processor_chamber','ae2:inscriber/calculation_processor','ae2:inscriber/engineering_processor','advanced_ae:engineering_processor_chamber','gtceu:electric_blast_furnace/silicon_boule',
       'ae2:network/crafting/patterns_blank','ae2:network/cells/item_storage_components_cell_1k_part','ae2:network/cells/item_storage_components_cell_4k_part','ae2:network/blocks/storage_drive',
       'ae2:network/crafting/molecular_assembler',"ae2:inscriber/silicon_print","advanced_ae:accumulation_processor_chamber","megacells:inscriber/accumulation_processor"

    ];   
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })

    e.remove({ output: "gtceu:plant_ball"})
    e.remove({ output: "createaddition:biomass"})
})











