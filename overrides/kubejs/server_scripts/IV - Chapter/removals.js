ServerEvents.recipes(e => {
    const toRemoveId = [
        "gtceu:shaped/assembly_line","gtceu:shaped/casing_assembly_control","gtceu:shaped/luv_machine_hull","gtceu:assembler/hull_luv"
    ];   
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })
})