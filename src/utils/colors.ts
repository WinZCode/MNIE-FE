// README: Update màu thì phải update cả file tailwind.config.ts vì file đó
// không cho import file khác vào

// region Base Color
export const baseColorLight = {
  // White/ Black
  white: '#FFF',
  black: '#000',
  primary: '#0070C4',

  // Gray - Light
  'gray-1': '#F2F4F9',
  'gray-2': '#E2E8F3',
  'gray-3': '#D1D8E5',
  'gray-4': '#AEB9CD',
  'gray-5': '#7F93B1',
  'gray-6': '#5E7699',
  'gray-7': '#465B7F',
  'gray-8': '#394867',
  'gray-9': '#2A364C',
  'gray-10': '#1E2533',
  'gray-11': '#0F1319',

  // Gray Alpha - Light
  'gray-alpha-1': 'rgba(2, 23, 60, 0.024)',
  'gray-alpha-2': 'rgba(2, 23, 60, 0.055)',
  'gray-alpha-3': 'rgba(2, 23, 60, 0.09)',
  'gray-alpha-4': 'rgba(2, 23, 60, 0.18)',
  'gray-alpha-5': 'rgba(2, 23, 60, 0.25)',
  'gray-alpha-6': 'rgba(2, 23, 60, 0.32)',
  'gray-alpha-7': 'rgba(2, 23, 60, 0.42)',
  'gray-alpha-8': 'rgba(2, 23, 60, 0.58)',
  'gray-alpha-9': 'rgba(2, 23, 60, 0.70)',
  'gray-alpha-10': 'rgba(2, 23, 60, 0.82)',
  'gray-alpha-11': 'rgba(2, 23, 60, 0.91)',

  // SME Blue - Light
  'sme-blue-1': '#F2FAFC',
  'sme-blue-2': '#E6F5FA',
  'sme-blue-3': '#CFF1FC',
  'sme-blue-4': '#95DBF9',
  'sme-blue-5': '#5FC4F0',
  'sme-blue-6': '#36A4DB',
  'sme-blue-7': '#0070C4',
  'sme-blue-8': '#0056A8',
  'sme-blue-9': '#00408D',
  'sme-blue-10': '#002D71',
  'sme-blue-11': '#00205E',

  // SME Orange - Light
  'sme-orange-1': '#FEF9EF',
  'sme-orange-2': '#FEF5D5',
  'sme-orange-3': '#FEEDB7',
  'sme-orange-4': '#FDE299',
  'sme-orange-5': '#FACC66',
  'sme-orange-6': '#F5B540',
  'sme-orange-7': '#EF9304',
  'sme-orange-8': '#CD7602',
  'sme-orange-9': '#AC5802',
  'sme-orange-10': '#8A4401',
  'sme-orange-11': '#723300',

  // Red - Light
  'red-1': '#FFEDED',
  'red-2': '#FFEBE0',
  'red-3': '#FDCCCB',
  'red-4': '#FAA8A7',
  'red-5': '#F57674',
  'red-6': '#EB4542',
  'red-7': '#D82D2A',
  'red-8': '#B8221F',
  'red-9': '#96201E',
  'red-10': '#7D211F',
  'red-11': '#4D1B17',

  // Yellow - Light
  'yellow-1': '#FFFBD6',
  'yellow-2': '#FFF683',
  'yellow-3': '#FEF071',
  'yellow-4': '#FEE034',
  'yellow-5': '#FECC06',
  'yellow-6': '#FFB200',
  'yellow-7': '#F2B800',
  'yellow-8': '#B85F02',
  'yellow-9': '#984808',
  'yellow-10': '#7C3C08',
  'yellow-11': '#522108',

  // Green - Light
  'green-1': '#EBFDF2',
  'green-2': '#D2F9E2',
  'green-3': '#A8F2CB',
  'green-4': '#70E5AF',
  'green-5': '#36D1BE',
  'green-6': '#14C780',
  'green-7': '#07945F',
  'green-8': '#06764F',
  'green-9': '#07E53F',
  'green-10': '#074D36',
  'green-11': '#032B1F',

  // Cyan - Light
  'cyan-1': '#EFFEF8',
  'cyan-2': '#DDFFFB',
  'cyan-3': '#C1FEF1',
  'cyan-4': '#A2FDF0',
  'cyan-5': '#66FAFA',
  'cyan-6': '#40D6FF',
  'cyan-7': '#02A7CD',
  'cyan-8': '#027EAC',
  'cyan-9': '#015A8A',
  'cyan-10': '#004172',
  'cyan-11': '#004172',

  // Purple
  'purple-1': '#FBEAFE',
  'purple-2': '#F7D5FE',
  'purple-3': '#F3B7FE',
  'purple-4': '#EB99FD',
  'purple-5': '#D16BFA',
  'purple-6': '#B940F5',
  'purple-7': '#9304EF',
  'purple-8': '#7202CD',
  'purple-9': '#5502AC',
  'purple-10': '#3C018A',
  'purple-11': '#2A0072',

  // Teal
  'teal-1': '#EFFEFB',
  'teal-2': '#D6FFFD',
  'teal-3': '#BFFFE1',
  'teal-4': '#94F7D6',
  'teal-5': '#5CE8C5',
  'teal-6': '#34D1B8',
  'teal-7': '#00B3A7',
  'teal-8': '#009699',
  'teal-9': '#007280',
  'teal-10': '#005287',
  'teal-11': '#003C55',

  // Bright Blue
  'bright-blue-1': '#F4F9FE',
  'bright-blue-2': '#E5F3FE',
  'bright-blue-3': '#CFE9FE',
  'bright-blue-4': '#9FCFFE',
  'bright-blue-5': '#6FB2FD',
  'bright-blue-6': '#4B97FC',
  'bright-blue-7': '#106CFB',
  'bright-blue-8': '#0B53D7',
  'bright-blue-9': '#083DB4',
  'bright-blue-10': '#052B91',
  'bright-blue-11': '#031E78',

  // Deep Blue
  'deep-blue-1': '#EBFAFF',
  'deep-blue-2': '#DCF5FA',
  'deep-blue-3': '#C4EDF5',
  'deep-blue-4': '#B0D7EB',
  'deep-blue-5': '#96E8C5',
  'deep-blue-6': '#68B7A6',
  'deep-blue-7': '#347A98',
  'deep-blue-8': '#124B68',
  'deep-blue-9': '#083957',
  'deep-blue-10': '#042E47',
  'deep-blue-11': '#00263F',

  // SME Yellow
  'sme-yellow-1': '#FFFCB2',
  'sme-yellow-2': '#FFF5C8',
  'sme-yellow-3': '#FFEEA6',
  'sme-yellow-4': '#FFE88C',
  'sme-yellow-5': '#FFE261',
  'sme-yellow-6': '#FFDA33',
  'sme-yellow-7': '#FFD11C',
  'sme-yellow-8': '#D8A914',
  'sme-yellow-9': '#B7870E',
  'sme-yellow-10': '#936908',
  'sme-yellow-11': '#7A5305',

  // SME Red
  'sme-red-1': '#FBEFE9',
  'sme-red-2': '#FBDDF3',
  'sme-red-3': '#FBDFC3',
  'sme-red-4': '#FBC680',
  'sme-red-5': '#F7A894',
  'sme-red-6': '#E68B5C',
  'sme-red-7': '#D13734',
  'sme-red-8': '#83000D',
  'sme-red-9': '#990019',
  'sme-red-10': '#800020',
  'sme-red-11': '#670023',

  // Deep Orange
  'deep-orange-1': '#FCF4E6',
  'deep-orange-2': '#FEBEC9',
  'deep-orange-3': '#FBDFAB',
  'deep-orange-4': '#F7CF94',
  'deep-orange-5': '#E8A85C',
  'deep-orange-6': '#D18034',
  'deep-orange-7': '#B34D00',
  'deep-orange-8': '#993900',
  'deep-orange-9': '#802800',
  'deep-orange-10': '#671B00',
  'deep-orange-11': '#551100',

  // color border
  'very-dark-green': '#02173C17',
  'dark-charcoal': '#0f1219'
}

// endregion

// region Background
export const backgroundLightColor = {
  // Basic
  'bg-canvas': baseColorLight['gray-1'],
  'bg-surface': baseColorLight.white,
  'bg-surface-secondary': baseColorLight['gray-1'],
  'bg-inverse': baseColorLight.white,
  'bg-disable': baseColorLight['gray-alpha-2'],

  // Neutral
  'bg-neutral-strongest': baseColorLight['gray-10'],
  'bg-neutral-stronger': baseColorLight['gray-9'],
  'bg-neutral-strong': baseColorLight['gray-8'],
  'bg-neutral-medium': baseColorLight['gray-6'],
  'bg-neutral-light': baseColorLight['gray-4'],
  'bg-neutral-lighter': baseColorLight['gray-1'],
  'bg-neutral-lighter-hover': baseColorLight['gray-3'],
  'bg-neutral-lightest': baseColorLight['gray-alpha-1'],

  // Primary
  'bg-primary-fixed': baseColorLight['sme-blue-1'],
  'bg-primary-default': baseColorLight['sme-blue-7'],
  'bg-primary-default-hover': baseColorLight['sme-blue-9'],
  'bg-primary-default-press': baseColorLight['sme-blue-10'],
  'bg-primary-strong': baseColorLight['sme-blue-8'],
  'bg-primary-strong-hover': baseColorLight['sme-blue-10'],
  'bg-primary-strong-press': baseColorLight['sme-blue-11'],
  'bg-primary-light': baseColorLight['sme-blue-2'],
  'bg-primary-light-hover': baseColorLight['sme-blue-3'],
  'bg-primary-light-press': baseColorLight['sme-blue-4'],
  'bg-primary-lighter': baseColorLight['sme-blue-1'],
  'bg-primary-lighter-hover': baseColorLight['sme-blue-2'],
  'bg-primary-lighter-press': baseColorLight['sme-blue-3'],

  // Primary SME Orange
  'bg-primary-sme-orange-fixed': baseColorLight['sme-orange-7'],
  'bg-primary-sme-orange-default': baseColorLight['sme-orange-7'],
  'bg-primary-sme-orange-default-hover': baseColorLight['sme-orange-9'],
  'bg-primary-sme-orange-default-press': baseColorLight['sme-orange-10'],
  'bg-primary-sme-orange-strong': baseColorLight['sme-orange-8'],
  'bg-primary-sme-orange-strong-hover': baseColorLight['sme-orange-10'],
  'bg-primary-sme-orange-strong-press': baseColorLight['sme-orange-11'],
  'bg-primary-sme-orange-light': baseColorLight['sme-orange-2'],
  'bg-primary-sme-orange-light-hover': baseColorLight['sme-orange-3'],
  'bg-primary-sme-orange-light-press': baseColorLight['sme-orange-4'],
  'bg-primary-sme-orange-lighter': baseColorLight['sme-orange-1'],
  'bg-primary-sme-orange-lighter-hover': baseColorLight['sme-orange-2'],
  'bg-primary-sme-orange-lighter-press': baseColorLight['sme-orange-3'],

  // Success
  'bg-success-default': baseColorLight['green-6'],
  'bg-success-default-hover': baseColorLight['green-7'],
  'bg-success-default-press': baseColorLight['green-8'],
  'bg-success-light': baseColorLight['green-2'],
  'bg-success-light-hover': baseColorLight['green-3'],
  'bg-success-light-press': baseColorLight['green-4'],
  'bg-success-lighter': baseColorLight['green-1'],
  'bg-success-lighter-hover': baseColorLight['green-2'],
  'bg-success-lighter-press': baseColorLight['green-3'],

  // Error
  'bg-error-default': baseColorLight['red-6'],
  'bg-error-default-hover': baseColorLight['red-7'],
  'bg-error-default-press': baseColorLight['red-8'],
  'bg-error-light': baseColorLight['red-2'],
  'bg-error-light-hover': baseColorLight['red-3'],
  'bg-error-light-press': baseColorLight['red-4'],
  'bg-error-lighter': baseColorLight['red-1'],
  'bg-error-lighter-hover': baseColorLight['red-2'],
  'bg-error-lighter-press': baseColorLight['red-3'],

  // Warning
  'bg-warning-default': baseColorLight['yellow-6'],
  'bg-warning-default-hover': baseColorLight['yellow-7'],
  'bg-warning-default-press': baseColorLight['yellow-8'],
  'bg-warning-light': baseColorLight['yellow-2'],
  'bg-warning-light-hover': baseColorLight['yellow-3'],
  'bg-warning-light-press': baseColorLight['yellow-4'],
  'bg-warning-lighter': baseColorLight['yellow-1'],
  'bg-warning-lighter-hover': baseColorLight['yellow-2'],
  'bg-warning-lighter-press': baseColorLight['yellow-3'],

  // Info
  'bg-info-default': baseColorLight['sme-blue-7'],
  'bg-info-default-hover': baseColorLight['sme-blue-9'],
  'bg-info-default-press': baseColorLight['sme-blue-10'],
  'bg-info-light': baseColorLight['sme-blue-2'],
  'bg-info-light-hover': baseColorLight['sme-blue-3'],
  'bg-info-light-press': baseColorLight['sme-blue-4'],
  'bg-info-lighter': baseColorLight['sme-blue-1'],
  'bg-info-lighter-hover': baseColorLight['sme-blue-2'],
  'bg-info-lighter-press': baseColorLight['sme-blue-3'],

  // Accent Orange
  'bg-accent-orange-default': baseColorLight['sme-blue-7'],
  'bg-accent-orange-default-hover': baseColorLight['sme-blue-9'],
  'bg-accent-orange-default-press': baseColorLight['sme-blue-10'],
  'bg-accent-orange-light': baseColorLight['sme-blue-2'],
  'bg-accent-orange-light-hover': baseColorLight['sme-blue-3'],
  'bg-accent-orange-light-press': baseColorLight['sme-blue-4'],

  // Accent Purple
  'bg-accent-purple-default': baseColorLight['purple-6'],
  'bg-accent-purple-default-hover': baseColorLight['purple-7'],
  'bg-accent-purple-default-press': baseColorLight['purple-8'],
  'bg-accent-purple-light': baseColorLight['purple-2'],
  'bg-accent-purple-light-hover': baseColorLight['purple-3'],
  'bg-accent-purple-light-press': baseColorLight['purple-4'],

  // Accent Cyan
  'bg-accent-cyan-default': baseColorLight['cyan-6'],
  'bg-accent-cyan-default-hover': baseColorLight['cyan-7'],
  'bg-accent-cyan-default-press': baseColorLight['cyan-8'],
  'bg-accent-cyan-light': baseColorLight['cyan-2'],
  'bg-accent-cyan-light-hover': baseColorLight['cyan-3'],
  'bg-accent-cyan-light-press': baseColorLight['cyan-4']
}

// endregion

// region Text
export const textLightColor = {
  // Basic
  'text-on-primary': baseColorLight.white,
  'text-on-brights': baseColorLight['gray-11'],
  'text-inverse': baseColorLight['gray-1'],
  'text-disable': baseColorLight['gray-alpha-5'],

  // Neutral
  'text-neutral-strong': baseColorLight['gray-11'],
  'text-neutral-medium': baseColorLight['gray-8'],
  'text-neutral-light': baseColorLight['gray-6'],
  'text-neutral-lighter': baseColorLight['gray-4'],

  // Primary
  'text-primary-default': baseColorLight['sme-blue-7'],
  'text-primary-default-hover': baseColorLight['sme-blue-8'],
  'text-primary-default-press': baseColorLight['sme-blue-10'],
  'text-primary-strong': baseColorLight['sme-blue-8'],
  'text-primary-strong-hover': baseColorLight['sme-blue-9'],
  'text-primary-strong-press': baseColorLight['sme-blue-11'],

  // SME Orange
  'text-primary-sme-orange-default': baseColorLight['sme-orange-7'],
  'text-primary-sme-orange-default-hover': baseColorLight['sme-orange-8'],
  'text-primary-sme-orange-default-press': baseColorLight['sme-orange-10'],
  'text-primary-sme-orange-strong': baseColorLight['sme-orange-8'],
  'text-primary-sme-orange-strong-hover': baseColorLight['sme-orange-9'],
  'text-primary-sme-orange-strong-press': baseColorLight['sme-orange-11'],

  // Success
  'text-success-default': baseColorLight['green-6'],
  'text-success-default-hover': baseColorLight['green-7'],
  'text-success-default-press': baseColorLight['green-9'],
  'text-success-strong': baseColorLight['green-7'],
  'text-success-strong-hover': baseColorLight['green-8'],
  'text-success-strong-press': baseColorLight['green-10'],

  // Success
  'text-error-default': baseColorLight['red-6'],
  'text-error-default-hover': baseColorLight['red-7'],
  'text-error-default-press': baseColorLight['red-8'],
  'text-error-strong': baseColorLight['red-7'],
  'text-error-strong-hover': baseColorLight['red-8'],
  'text-error-strong-press': baseColorLight['red-10'],

  // Warning
  'text-warning-default': baseColorLight['yellow-6'],
  'text-warning-default-hover': baseColorLight['yellow-7'],
  'text-warning-default-press': baseColorLight['yellow-8'],
  'text-warning-strong': baseColorLight['yellow-7'],
  'text-warning-strong-hover': baseColorLight['yellow-8'],
  'text-warning-strong-press': baseColorLight['yellow-10'],

  // Info
  'text-info-default': '#2A6AEB',
  'text-info-strong': '#225DE5',

  // Accent
  'text-accent-orange': baseColorLight['sme-orange-7'],
  'text-accent-orange-strong': baseColorLight['sme-orange-8'],
  'text-accent-purple': baseColorLight['purple-6'],
  'text-accent-purple-strong': baseColorLight['purple-7'],
  'text-accent-cyan': baseColorLight['cyan-7'],
  'text-accent-cyan-strong': baseColorLight['cyan-8']
}

// endregion

// region Icon
export const iconLightColor = {
  // Basic
  'icon-on-primary': baseColorLight.white,
  'icon-on-brights': baseColorLight['gray-11'],
  'icon-inverse': baseColorLight['gray-1'],
  'icon-disable': baseColorLight['gray-alpha-5'],

  // Neutral
  'icon-neutral-strong': baseColorLight['gray-11'],
  'icon-neutral-medium': baseColorLight['gray-8'],
  'icon-neutral-light': baseColorLight['gray-6'],
  'icon-neutral-lighter': baseColorLight['gray-4'],

  // Primary
  'icon-primary-default': baseColorLight['sme-blue-7'],
  'icon-primary-default-hover': baseColorLight['sme-blue-8'],
  'icon-primary-default-press': baseColorLight['sme-blue-10'],
  'icon-primary-strong': baseColorLight['sme-blue-8'],
  'icon-primary-strong-hover': baseColorLight['sme-blue-9'],
  'icon-primary-strong-press': baseColorLight['sme-blue-11'],
  'icon-primary-light': baseColorLight['sme-blue-2'],

  // SME Orange
  'icon-primary-sme-orange-default': baseColorLight['sme-orange-7'],
  'icon-primary-sme-orange-default-hover': baseColorLight['sme-orange-8'],
  'icon-primary-sme-orange-default-press': baseColorLight['sme-orange-10'],
  'icon-primary-sme-orange-strong': baseColorLight['sme-orange-8'],
  'icon-primary-sme-orange-strong-hover': baseColorLight['sme-orange-9'],
  'icon-primary-sme-orange-strong-press': baseColorLight['sme-orange-11'],
  'icon-primary-sme-orange-light': baseColorLight['sme-orange-2'],

  // Success
  'icon-success-default': baseColorLight['green-6'],
  'icon-success-default-hover': baseColorLight['green-7'],
  'icon-success-default-press': baseColorLight['green-9'],
  'icon-success-strong': baseColorLight['green-7'],
  'icon-success-strong-hover': baseColorLight['green-8'],
  'icon-success-strong-press': baseColorLight['green-10'],

  // Error
  'icon-error-default': baseColorLight['red-6'],
  'icon-error-default-hover': baseColorLight['red-7'],
  'icon-error-default-press': baseColorLight['red-8'],
  'icon-error-strong': baseColorLight['red-7'],
  'icon-error-strong-hover': baseColorLight['red-8'],
  'icon-error-strong-press': baseColorLight['red-10'],

  // Warning
  'icon-warning-default': baseColorLight['yellow-6'],
  'icon-warning-default-hover': baseColorLight['yellow-7'],
  'icon-warning-default-press': baseColorLight['yellow-8'],
  'icon-warning-strong': baseColorLight['yellow-7'],
  'icon-warning-strong-hover': baseColorLight['yellow-8'],
  'icon-warning-strong-press': baseColorLight['yellow-10'],

  // Info
  'icon-info-default': '#2A6AEB',
  'icon-info-strong': '#225DE5',

  // Accent
  'icon-accent-orange': baseColorLight['sme-orange-7'],
  'icon-accent-orange-strong': baseColorLight['sme-orange-8'],
  'icon-accent-purple': baseColorLight['purple-6'],
  'icon-accent-purple-strong': baseColorLight['purple-7'],
  'icon-accent-cyan': baseColorLight['cyan-7'],
  'icon-accent-cyan-strong': baseColorLight['cyan-8']
}

// endregion

// region Border
export const borderLightColor = {
  // Basic
  'border-surface': baseColorLight.white,

  // Neutral
  'border-neutral-strong': baseColorLight['gray-alpha-6'],
  'border-neutral-strong-hover': baseColorLight['gray-alpha-7'],
  'border-neutral-strong-press': baseColorLight['gray-alpha-9'],
  'border-neutral-strong-selected': baseColorLight['gray-alpha-8'],
  'border-neutral-medium': baseColorLight['gray-alpha-4'],
  'border-neutral-medium-hover': baseColorLight['gray-alpha-5'],
  'border-neutral-medium-press': baseColorLight['gray-alpha-7'],
  'border-neutral-medium-selected': baseColorLight['gray-alpha-8'],
  'border-neutral-light': baseColorLight['gray-alpha-3'],
  'border-neutral-light-hover': baseColorLight['gray-alpha-4'],
  'border-neutral-light-press': baseColorLight['gray-alpha-6'],
  'border-neutral-light-selected': baseColorLight['gray-alpha-8'],
  'border-neutral-lighter': baseColorLight['gray-alpha-2'],
  'border-neutral-lighter-hover': baseColorLight['gray-alpha-3'],
  'border-neutral-lighter-press': baseColorLight['gray-alpha-5'],
  'border-neutral-lighter-selected': baseColorLight['gray-alpha-7'],
  'border-neutral-lightest': baseColorLight['gray-alpha-1'],
  'border-neutral-lightest-hover': baseColorLight['gray-alpha-2'],
  'border-neutral-lightest-press': baseColorLight['gray-alpha-4'],
  'border-neutral-lightest-selected': baseColorLight['gray-alpha-6'],

  // Primary
  'border-primary-default': baseColorLight['sme-blue-7'],
  'border-primary-default-hover': baseColorLight['sme-blue-8'],
  'border-primary-default-press': baseColorLight['sme-blue-10'],
  'border-primary-strong': baseColorLight['sme-blue-8'],
  'border-primary-strong-hover': baseColorLight['sme-blue-9'],
  'border-primary-strong-press': baseColorLight['sme-blue-11'],
  'border-primary-medium': 'rgba(0, 112, 196, 0.50)', // sme-blue-2
  'border-primary-light': baseColorLight['sme-blue-2'],

  // SME Orange
  'border-primary-sme-orange-default': baseColorLight['sme-orange-7'],
  'border-primary-sme-orange-default-hover': baseColorLight['sme-orange-8'],
  'border-primary-sme-orange-default-press': baseColorLight['sme-orange-10'],
  'border-primary-sme-orange-strong': baseColorLight['sme-orange-8'],
  'border-primary-sme-orange-strong-hover': baseColorLight['sme-orange-9'],
  'border-primary-sme-orange-strong-press': baseColorLight['sme-orange-11'],
  'border-primary-sme-orange-medium': 'rgba(239, 147, 4, 0.50)', // sme-orange-7
  'border-primary-sme-orange-light': baseColorLight['sme-orange-2'],

  // Success
  'border-success-default': baseColorLight['green-6'],
  'border-success-light': baseColorLight['green-2'],

  // Error
  'border-error-default': baseColorLight['red-6'],
  'border-error-default-hover': baseColorLight['red-8'],
  'border-error-default-press': baseColorLight['red-10'],
  'border-error-strong': baseColorLight['red-7'],
  'border-error-strong-hover': baseColorLight['red-8'],
  'border-error-strong-press': baseColorLight['red-10'],
  'border-error-light': baseColorLight['red-2'],

  // Warning
  'border-warning-default': baseColorLight['yellow-6'],
  'border-warning-light': baseColorLight['yellow-2'],

  // Info
  'border-info-default': baseColorLight['sme-blue-7'],
  'border-info-light': baseColorLight['sme-blue-2'],

  // Accent
  'border-accent-orange': baseColorLight['sme-orange-7'],
  'border-accent-orange-strong': baseColorLight['sme-orange-8'],
  'border-accent-purple': baseColorLight['purple-6'],
  'border-accent-purple-strong': baseColorLight['purple-7'],
  'border-accent-cyan': baseColorLight['cyan-7'],
  'border-accent-cyan-strong': baseColorLight['cyan-8']
}

// endregion

// region Chart
export const chartLightColor = {
  // Neutral
  'chart-neutral-strong': baseColorLight['gray-9'],
  'chart-neutral-medium': baseColorLight['gray-5'],
  'chart-neutral-light': baseColorLight['gray-3'],

  // Primary
  'chart-primary-default': baseColorLight['sme-blue-7'],
  'chart-primary-strong': baseColorLight['sme-blue-10'],
  'chart-primary-medium': baseColorLight['sme-blue-5'],
  'chart-primary-light': baseColorLight['sme-blue-2'],

  // Green
  'chart-green-default': baseColorLight['green-6'],
  'chart-green-strong': baseColorLight['green-10'],
  'chart-green-medium': baseColorLight['green-4'],
  'chart-green-light': baseColorLight['green-2'],

  // Red
  'chart-red-default': baseColorLight['red-6'],
  'chart-red-strong': baseColorLight['red-10'],
  'chart-red-medium': baseColorLight['red-4'],
  'chart-red-light': baseColorLight['red-2'],

  // Yellow
  'chart-yellow-default': baseColorLight['yellow-6'],
  'chart-yellow-strong': baseColorLight['yellow-10'],
  'chart-yellow-medium': baseColorLight['yellow-4'],
  'chart-yellow-light': baseColorLight['yellow-2'],

  // Orange
  'chart-orange-default': baseColorLight['sme-orange-7'],
  'chart-orange-strong': baseColorLight['sme-orange-11'],
  'chart-orange-medium': baseColorLight['sme-orange-5'],
  'chart-orange-light': baseColorLight['sme-orange-2'],

  // Purple
  'chart-purple-default': baseColorLight['purple-6'],
  'chart-purple-strong': baseColorLight['purple-10'],
  'chart-purple-medium': baseColorLight['purple-4'],
  'chart-purple-light': baseColorLight['purple-2'],

  // Cyan
  'chart-cyan-default': baseColorLight['cyan-6'],
  'chart-cyan-strong': baseColorLight['cyan-10'],
  'chart-cyan-medium': baseColorLight['cyan-4'],
  'chart-cyan-light': baseColorLight['cyan-2']
}

// endregion
