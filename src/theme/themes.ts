export enum Flavors {
  COSMIC_ADVENTURE = 'Galactic Quest',
  TROPICAL_OASIS = 'Island Escape',
  RETRO_VIBES = 'Retro Rewind',
  MAGICAL_FOREST = 'Enchanted Woods',
  OCEAN_DREAMS = 'Sea Breeze',
  WILD_WEST = 'Frontier Frenzy',
  CYBERPUNK_CITY = 'Neon Metropolis',
  GRAFFITI_ART = 'Street Art',
  ENCHANTED_CASTLE = 'Fantasy Kingdom',
  POP_ART = 'Pop Frenzy',
}

// The enum contains out themes. The don't mean anything. Just something to draw inspiration
// Every inpiration has different colors.

export const Themes = {
  [Flavors.GRAFFITI_ART]: {
    primary: {
      hex: '#e0ecff',
      rgb: '224, 236, 255',
      contrast: '#000000',
      contrastRgb: '0, 0, 0',
      shade: '#c5d0e0',
      tint: '#e3eeff',
    },

    secondary: {
      hex: '#0b3e3d',
      rgb: '11, 62, 61',
      contrast: '#ffffff',
      contrastRgb: '255, 255, 255',
      shade: '#0a3736',
      tint: '#235150',
    },

    tertiary: {
      hex: '#efa323',
      rgb: '239, 163, 35',
      contrast: '#000000',
      contrastRgb: '0, 0, 0',
      shade: '#d28f1f',
      tint: '#f1ac39',
    },

    success: {
      hex: '#0b3e3d',
      rgb: '11, 62, 61',
      contrast: '#ffffff',
      contrastRgb: '255, 255, 255',
      shade: '#0a3736',
      tint: '#235150',
    },

    warning: {
      hex: '#efa323',
      rgb: '239, 163, 35',
      contrast: '#000000',
      contrastRgb: '0, 0, 0',
      shade: '#d28f1f',
      tint: '#f1ac39',
    },

    danger: {
      hex: '#eb445a',
      rgb: '235, 68, 90',
      contrast: '#ffffff',
      contrastRgb: '255, 255, 255',
      shade: '#cf3c4f',
      tint: '#ed576b',
    },

    medium: {
      hex: '#bfd5f7',
      rgb: '191, 213, 247',
      contrast: '#000000',
      contrastRgb: '0, 0, 0',
      shade: '#a8bbd9',
      tint: '#c5d9f8',
    },

    light: {
      hex: '#e0ecff',
      rgb: '224, 236, 255',
      contrast: '#000000',
      contrastRgb: '0, 0, 0',
      shade: '#c5d0e0',
      tint: '#e3eeff',
    },
  },

  [Flavors.TROPICAL_OASIS]: {
    primary: {
      value: '#e0ecff',
      rgb: '224,236,255',
      contrast: '#000000',
      contrastRgb: '0,0,0',
      shade: '#c5d0e0',
      tint: '#e3eeff',
    },

    secondary: {
      value: '#0b3e3d',
      rgb: '11,62,61',
      contrast: '#ffffff',
      contrastRgb: '255,255,255',
      shade: '#0a3736',
      tint: '#235150',
    },

    tertiary: {
      value: '#efa323',
      rgb: '239,163,35',
      contrast: '#000000',
      contrastRgb: '0,0,0',
      shade: '#d28f1f',
      tint: '#f1ac39',
    },
    success: {
      value: '#0b3e3d',
      rgb: '11,62,61',
      contrast: '#ffffff',
      contrastRgb: '255,255,255',
      shade: '#0a3736',
      tint: '#235150',
    },

    warning: {
      value: '#efa323',
      rgb: '239,163,35',
      contrast: '#000000',
      contrastRgb: '0,0,0',
      shade: '#d28f1f',
      tint: '#f1ac39',
    },

    danger: {
      value: '#eb445a',
      rgb: '235,68,90',
      contrast: '#ffffff',
      contrastRgb: '255,255,255',
      shade: '#cf3c4f',
      tint: '#ed576b',
    },

    medium: {
      value: '#bfd5f7',
      rgb: '191,213,247',
      contrast: '#000000',
      contrastRgb: '0,0,0',
      shade: '#a8bbd9',
      tint: '#c5d9f8',
    },

    light: {
      value: '#e0ecff',
      rgb: '224,236,255',
      contrast: '#000000',
      contrastRgb: '0,0,0',
      shade: '#c5d0e0',
      tint: '#e3eeff',
    },
  },
};
