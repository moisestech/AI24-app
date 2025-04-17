# Contributing to AI24

Thank you for your interest in contributing to AI24! This document provides guidelines and instructions for contributing to the project.

## 📋 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/AI24-app.git
cd AI24-app
```

3. Install dependencies:
```bash
pnpm install
```

4. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

## 🔧 Development Workflow

### Branch Naming Convention

- `feature/`: New features
- `fix/`: Bug fixes
- `docs/`: Documentation changes
- `refactor/`: Code refactoring
- `test/`: Test-related changes

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test-related changes
- `chore`: Maintenance tasks

### Pull Requests

1. Ensure your branch is up to date:
```bash
git pull origin main
```

2. Push your changes:
```bash
git push origin feature/your-feature-name
```

3. Create a pull request on GitHub
4. Fill out the PR template
5. Request review from maintainers

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test path/to/test

# Run tests in watch mode
pnpm test:watch
```

### Test Coverage

```bash
# Generate coverage report
pnpm test:coverage
```

## 📝 Documentation

### Writing Documentation

1. Use Markdown format
2. Follow the existing documentation style
3. Include code examples where appropriate
4. Update the table of contents if needed

### API Documentation

1. Use JSDoc comments
2. Include parameter descriptions
3. Document return values
4. Provide usage examples

## 🎨 Code Style

### TypeScript

- Use strict mode
- Avoid `any` type
- Use interfaces for object types
- Use type aliases for complex types

### React

- Use functional components
- Use hooks for state management
- Follow React best practices
- Use TypeScript for props

### Styling

- Use Tailwind CSS
- Follow BEM naming convention
- Use CSS modules for component-specific styles
- Maintain consistent spacing and indentation

## 🔍 Code Review Process

1. Submit pull request
2. Automated checks run
3. Reviewers assigned
4. Address feedback
5. Merge when approved

### Review Checklist

- [ ] Code follows style guide
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] No breaking changes
- [ ] Performance impact considered

## 🐛 Bug Reports

### Creating a Bug Report

1. Use the bug report template
2. Provide detailed steps to reproduce
3. Include expected and actual behavior
4. Add screenshots if applicable
5. Specify environment details

### Bug Report Template

```markdown
## Description
[Detailed description of the bug]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behavior
[What you expected to happen]

## Actual Behavior
[What actually happened]

## Environment
- OS: [e.g., macOS]
- Browser: [e.g., Chrome]
- Version: [e.g., 22]

## Additional Context
[Any additional information]
```

## 💡 Feature Requests

### Creating a Feature Request

1. Use the feature request template
2. Describe the feature in detail
3. Explain the use case
4. Provide mockups if applicable
5. Consider implementation complexity

### Feature Request Template

```markdown
## Description
[Detailed description of the feature]

## Use Case
[Why this feature is needed]

## Proposed Solution
[How the feature should work]

## Alternatives Considered
[Other approaches considered]

## Additional Context
[Any additional information]
```

## 📚 Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## 🤝 Questions?

- Join our [Discord](https://discord.gg/ai24)
- Open a GitHub issue
- Contact the maintainers 