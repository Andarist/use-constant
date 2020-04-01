# use-constant

React hook for creating a value exactly once. `useMemo` doesn't give this guarantee unfortunately - https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

### Usage
Install the package
```bash
npm install use-constant
# OR
yarn add use-constant
```

In your code
```javascript
import useConstant from 'use-constant';

const MyComponent = () => {
  // Give useConstant() a function which should be be executed exactly once and
  // return in it your constant value
  const myConstantValue = useConstant(() => 42);
  // ...
```
