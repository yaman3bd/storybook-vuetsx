# a reproduction repo to show the problem
1. run yarn
2. run yarn storybook
and then check the developer console
it will show a warning:
 ![Screen Shot 2022-09-24 at 2 25 24 PM](https://user-images.githubusercontent.com/58285821/192095275-2565bfd5-f8ea-4ef3-829d-66ca169c1114.png)

I tried to import the same component in a `vite` `vue` `ts` project and just used the required plugins and everything worked as expected, I think storybook does not respect my tsconfig.json file because I have set:
```json
"jsx": "preserve",
"jsxFactory": "h",
"jsxFragmentFactory": "Fragment",
```

## Scripts

```js
yarn // installs packages
yarn vite // starts the dev server
yarn build // run build
yarn serve // preview build
yarn storybook // starts storybook
yarn lint // lint and fix all files
yarn format // run prettier on all files
```


