## Deriv Asset List

### Organize imports
Organize your imports as below:
- Remove unused imports
- The order of the imports should be
  - React module imports
  - Third party imports
  - Other module imports
- Use absolute path for importing modules. Relative imports are only allowed for files in same folder
```bash
import React from 'react';

import {Layout} from 'antd';

import Home from 'components/Home';

imports styles from './<component-name>.module.scss'
```

### Naming conventions
- Folder:
  - Folders should be in camelCase.
- File:
  - Only JSX components should use PascalCase

### Folder structure and purposes
```
/src
|- api
|- assets
|- components
|- pages
|- shared
|- store
|- styles
|- uicontainers
|- index.tsx
```
#### api
Should contain external api calls

#### assets
Should contain static files like images/icons

#### components
Should contain re-usable components

#### pages
Should contain different top level pages

### shared
Should contain any constants/helper functions that can be shared across the application.

### styles
Should contain global styles

### uicontainers
Should contain different business components

**Note: Each folder should contain only related files**
```
/src
|- components
|     |- button
|     |     |-button.module.scss
|     |     |-Button.tsx
|     |     |-index.tsx
```