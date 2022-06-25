const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: 'checkbox',
        name: 'features',
        message: 'What features do you want?',
        choices: [
          {
            name: 'eslint',
            checked: true,
          },
        ],
      },
      {
        type: 'list',
        name: 'eslint',
        message: 'Which ESLint config do you want?',
        when: answers => answers.features.includes('eslint'),
        choices: [
          {
            name: 'javascript',
          },
          {
            name: 'typescript',
          },
          {
            name: 'next.js',
          },
        ],
      },
    ]);

    if (answers.eslint) {
      if (answers.eslint.includes('javascript')) {
        this.composeWith(require.resolve('./javascript'));
      }

      if (answers.eslint.includes('typescript')) {
        this.composeWith(require.resolve('./typescript'));
      }

      if (answers.eslint.includes('next.js')) {
        this.composeWith(require.resolve('./nextjs'));
      }
    }
  }
};
