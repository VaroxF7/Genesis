ItemEvents.tooltip(event => {
  const tiers = [
    ['lv', 'LV'],
    ['mv', 'MV'],
    ['hv', 'HV'],
    ['ev', 'EV'],
    ['iv', 'IV'],
    ['luv', 'LuV'],
    ['zpm', 'ZPM'],
    ['uv', 'UV'],
    ['uhv', 'UHV']
  ]

  tiers.forEach(([id, label]) => {
    event.addAdvanced(`kubejs:t1_circuit_${id}`, (item, advanced, text) => {
      text.add(1, Text.yellow(`${label} - Tier Circuit`))
    })
  })
})

ItemEvents.tooltip(event => {
  event.add('kubejs:biotine_supercomputer', Text.yellow("ZPM - Tier Circuit"))

  event.addAdvanced('kubejs:biotine_supercomputer', (item, advanced, text) => {
    // shift, alt and ctrl are all keys you can check!
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.gold('Optically Ready'))
    }
  })
})