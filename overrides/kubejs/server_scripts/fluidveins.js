// Moon Fluid Veins
GTCEuServerEvents.fluidVeins(event => {
event.add('gtceu:moon_crude_vein', vein => {
    vein.dimensions('ad_astra:moon')
    vein.fluid(() => Fluid.of('gtceu:impure_crude_oil').fluid)
    vein.weight(600)
    vein.minimumYield(200)
    vein.maximumYield(720)
    vein.depletionAmount(1)
    vein.depletionChance(1)
    vein.depletedYield(200)
})
event.add('gtceu:moon_crude_vein_heavy', vein => {
    vein.dimensions('ad_astra:moon')
    vein.fluid(() => Fluid.of('gtceu:heavy_impure_crude_oil').fluid)
    vein.weight(600)
    vein.minimumYield(200)
    vein.maximumYield(720)
    vein.depletionAmount(1)
    vein.depletionChance(1)
    vein.depletedYield(200)
  })
event.add('gtceu:moon_helium_3', vein => {
    vein.dimensions('ad_astra:moon')
    vein.fluid(() => Fluid.of('gtceu:helium_3').fluid)
    vein.weight(600)
    vein.minimumYield(200)
    vein.maximumYield(720)
    vein.depletionAmount(1)
    vein.depletionChance(1)
    vein.depletedYield(200)
  })
event.add('gtceu:moon_natural', vein => {
    vein.dimensions('ad_astra:moon')
    vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid)
    vein.weight(600)
    vein.minimumYield(200)
    vein.maximumYield(720)
    vein.depletionAmount(1)
    vein.depletionChance(1)
    vein.depletedYield(200)
  })
})

// Removals
GTCEuServerEvents.fluidVeins(event => {
    event.remove("gtceu:oil_deposit") 
    event.remove("gtceu:raw_oil_deposit") 
    event.remove("gtceu:heavy_oil_deposit") 
    event.remove("gtceu:light_oil_deposit")  
})

// Misc. Veins
GTCEuServerEvents.fluidVeins(event => {
  event.add('gtceu:virulent_mix', vein => {
    vein.dimensions('undergarden:undergarden')
    vein.fluid(() => Fluid.of('undergarden:virulent_mix_source').fluid)
    vein.weight(600)
    vein.minimumYield(200)
    vein.maximumYield(720)
    vein.depletionAmount(1)
    vein.depletionChance(1)
    vein.depletedYield(200)
  })
})




