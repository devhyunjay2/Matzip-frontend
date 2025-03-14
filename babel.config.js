module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugin: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
