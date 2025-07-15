// Ad-Astra
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moon_stone')
        .targets('ad_astra:moon_stone', 'ad_astra:moon_deepslate', 'ad_astra:moon_cobblestone')
        .dimensions('ad_astra:moon') 

        event.create('mars_stone')
        .targets('ad_astra:mars_stone', 'ad_astra:mars_cobblestone')
        .dimensions('ad_astra:mars') 

        event.create('venus_stone')
        .targets('ad_astra:venus_stone', 'ad_astra:venus_cobblestone')
        .dimensions('ad_astra:venus') 

        event.create('mercury_stone')
        .targets('ad_astra:mercury_stone', 'ad_astra:mercury_cobblestone')
        .dimensions('ad_astra:mercury') 
})

// Vanilla MC
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('overworld_stone')
        .targets('minecraft:stone','minecraft:deepslate')
        .dimensions('minecraft:overworld') 

        event.create('nether_stone')
        .targets('minecraft:netherrack')
        .dimensions('minecraft:the_nether') 

        event.create('end_stone')
        .targets('minecraft:end_stone')
        .dimensions('minecraft:the_end') 
})

// Misc Dimension
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    /*
    event.create('overworld_stone')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon') 
    

    // Aether Islands
    event.create('aether_islands')
        .targets('aether:holystone','aether:mossy_holystone','aether:icestone')
        .dimensions('aether:the_aether') 
    */
})
