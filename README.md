# React Heroicons
> A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.

This repository contains the [`heroicons`](https://github.com/refactoringui/heroicons) made by the team from [`refactoringui`](https://refactoringui.com/) as `React` components.

## Previewing the Icons
Preview the icons at [heroicons.dev](https://heroicons.dev) (Made by [`codex-zaydek`](https://github.com/codex-zaydek)).

## Installation & Usage
First, install this library!
```
npm install --save @graywolfai/react-heroicons
```

Now you have access to the entire `heroicons` library! You use them like you would any `svg` component.
```tsx
import { MdArchive } from "@graywolfai/react-heroicons/outline-md/md-archive";
import { MdArchive } from "@graywolfai/react-heroicons/solid-sm/sm-archive"; // or

export const SomeComponent = () => {
  return (
    ...
    <MdArchive className="h-6 w-6 text-gray-500"></MdArchive>
    ...
  )
}
```

> Note the above example assumes you are using [`Tailwind CSS`](https://tailwindcss.com/) but the color is easily stylable by using the CSS `color` property.

## Publishing
```
# first build
npm run build

# then tag (make sure to push the commit/tag to GitHub)
npm version

# Then publish!
npm publish
```

## References
- This [article](http://nicolasgallagher.com/making-svg-icon-libraries-for-react-apps/) is a nice reference for creating `React` component libraries.
