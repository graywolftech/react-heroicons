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

Then, just import the icons you want to use like you would any `svg` component!
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

## References
- This [article](http://nicolasgallagher.com/making-svg-icon-libraries-for-react-apps/) is a nice reference for creating `React` component libraries.
