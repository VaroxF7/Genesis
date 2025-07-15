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
