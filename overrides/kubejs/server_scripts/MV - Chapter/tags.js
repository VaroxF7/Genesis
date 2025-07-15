ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('ae2:has_meteorites')
    event.add('ae2:has_meteorites','ad_astra:lunar_wastelands')
})

ServerEvents.tags("fluid", event => {
    event.removeAllTagsFrom('ad_astra:fuel')
    event.removeAllTagsFrom('ad_astra:cryo_fuel')
    
    event.removeAll('ad_astra:fuel')
    event.removeAll('ad_astra:cryo_fuel')
    event.removeAll('ad_astra:tier_1_rover_fuel')
    event.removeAll('ad_astra:tier_1_rocket_fuel')
    event.removeAll('ad_astra:tier_2_rocket_fuel')
    event.removeAll('ad_astra:tier_3_rocket_fuel')
    event.removeAll('ad_astra:tier_4_rocket_fuel')

    event.add("ad_astra:tier_1_rocket_fuel", "gtceu:alumite_rocket_fuel")
    event.add("ad_astra:tier_2_rocket_fuel", "gtceu:rocket_fuel")
      
    event.add("forge:seed_oil", "createaddition:seed_oil")
    })