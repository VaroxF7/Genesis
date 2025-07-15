
ServerEvents.recipes(e => {
     const toRemoveId = [
        'gtceu:electric_blast_furnace/blast_aluminium','gtceu:electric_blast_furnace/rutile_from_ilmenite','gtceu:arc_furnace/arc_iron_ingot','create:crafting/materials/electron_tube'
     ];   
     toRemoveId.forEach(element => {
     e.remove({ id: element});
     })
})