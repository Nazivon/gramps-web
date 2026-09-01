// src/symbols.js
export const SYMBOL_SET_DEFAULT = 'default'
export const SYMBOL_SET_TEXT = 'text'

const SYMBOL_SETS = {
  [SYMBOL_SET_DEFAULT]: {
    birthSymbol: '∗',
    deathSymbol: '†',
    marriageSymbol: '⚭',
    divorceSymbol: '⚮',
  },
  [SYMBOL_SET_TEXT]: {
    birthSymbol: 'b.',
    deathSymbol: 'd.',
    marriageSymbol: 'm.',
    divorceSymbol: 'div.',
  },
}

// Used to populate the <select> in user settings.
// `label` is a plain English string in plain - passed through `this._()`
// in the component, following the same pattern as `_treeViewLabel()`
// in GrampsjsViewSettingsUser.js
export const SYMBOL_SET_OPTIONS = [
  {value: SYMBOL_SET_DEFAULT, label: 'Unicode symbols (∗ † ⚭ ⚮)'},
  {value: SYMBOL_SET_TEXT, label: 'Text abbreviations (b. d. m. div.)'},
]

export function getSymbols(settings) {
  return SYMBOL_SETS[settings?.symbolSet] ?? SYMBOL_SETS[SYMBOL_SET_DEFAULT]
}
