ServerEvents.recipes(e => {
    const toRemoveId = [
        "gtceu:assembly_line/research_station","gtceu:assembly_line/high_performance_computing_array","gtceu:assembly_line/advanced_data_access_hatch",
        "gtceu:assembler/hpca_advanced_computation_component","gtceu:assembler/hpca_bridge_component","emi_loot:/block_drops/gtceu/blocks/hpca_active_cooler_component",
        "gtceu:assembly_line/fusion_reactor_mk2","gtceu:fusion_reactor/arsenic_and_ruthenium_to_darmstadtium_plasma","gtceu:mixer/raw_growth_medium",
        "gtceu:fluid_heater/sterile_growth_medium","gtceu:assembler/optical_pipe","gtceu:fusion_reactor/lutenium_and_chromium_to_americium_plasma",
        "gtceu:fusion_reactor/americium_and_naquadria_to_neutronium_plasma","gtceu:assembly_line/fusion_reactor_mk1","gtceu:chemical_reactor/uhpic_wafer",
        "gtceu:electric_blast_furnace/neutronium_boule"
    ];   
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })
})