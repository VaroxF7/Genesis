ServerEvents.recipes(e => {
    // Create Changes
    e.recipes.create.sequenced_assembly([ // Start
        Item.of('create:precision_mechanism') // Recipe
    ],'create:brass_sheet',[ // Input
        e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:electron_tube']),
        e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:cogwheel']),
        e.recipes.create.pressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
        e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:precision_mechanism','create:wrench']).keepHeldItem()
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(1) 

  e.recipes.create.mixing(["2x gtceu:rubber_ingot"],["4x gtceu:raw_rubber_dust","gtceu:sulfur_dust"]).heated()
  e.recipes.create.pressing(["gtceu:rubber_plate"],["gtceu:rubber_ingot"])
  e.recipes.create.mixing(["gtceu:rubber_plate"],["gtceu:rubber_ingot"])

    // Shaped & Shapeless Recipes
  e.shaped('create:electron_tube',[
    ' A ', 
    ' C ', 
    '   '  
  ], {
    A: 'create:polished_rose_quartz', 
    C: '#forge:plates/steel'   
  })
})

