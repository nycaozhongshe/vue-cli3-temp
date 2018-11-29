module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', {
      useBuiltIns: false
    }]

  ],
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': '~theme'
      }
    ]
  ]
}
