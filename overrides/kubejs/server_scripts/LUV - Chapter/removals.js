ServerEvents.recipes(e => {
    const toRemoveId = [
        "gtceu:assembler/fusion_coil","gtceu:assembly_line/fusion_reactor_mk1","gtceu:large_chemical_reactor/uhpic_wafer","gtceu:laser_engraver/engrave_asoc_naquadah","gtceu:chemical_reactor/uhpic_wafer",
        "gtceu:electric_blast_furnace/engraved_crystal_chip_from_olivine","gtceu:electric_blast_furnace/engraved_crystal_chip_from_emerald","gtceu:laser_engraver/crystal_cpu","gtceu:laser_engraver/crystal_soc"
    ];   
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })
})



