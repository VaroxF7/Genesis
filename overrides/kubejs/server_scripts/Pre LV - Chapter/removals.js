
ServerEvents.recipes(e => {
     const toRemoveId = [
          "gtceu:circuit_assembler/electronic_circuit_lv","gtceu:circuit_assembler/electronic_circuit_lv_soldering_alloy"
     ];
     toRemoveId.forEach(element => {
     e.remove({ id: element});
     })
})

ServerEvents.recipes(e => {
e.remove({ output: 'gtceu:basic_electronic_circuit'})
})