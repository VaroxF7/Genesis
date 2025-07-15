ServerEvents.recipes(event => {
event.replaceInput(
    { input: 'ae2:sky_dust' },
    'ae2:sky_dust',            
    'gtceu:sky_stone_dust'         
  )
event.replaceInput(
    { input: 'ae2:sky_stone_block' },
    'ae2:sky_stone_block',            
    'kubejs:sky_stone_block'         
  )
  event.replaceOutput(
    { output: 'ae2:sky_stone_block' },
    'ae2:sky_stone_block',            
    'kubejs:sky_stone_block'         
  )
})