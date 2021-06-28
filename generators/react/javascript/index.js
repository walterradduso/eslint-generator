const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        'eslint',
        'eslint-config-prettier',
        'eslint-config-standard',
        'eslint-plugin-import',
        'eslint-plugin-node',
        'eslint-plugin-prettier',
        'eslint-plugin-promise',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
      ],
      {
        'save-dev': true,
      },
    );
  }

  eslint() {
    this.fs.copy(this.templatePath('.eslintrc.js'), this.destinationPath('.eslintrc'));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath('.eslintignore'));
  }

  editorconfig() {
    this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
  }
};
