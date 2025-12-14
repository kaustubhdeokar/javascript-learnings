Named exports
- export function name(){---}

Default exports
- export default function 

One file can have at max only one default export, but many named export.
While importing we can change the name of default export but not named export.

HTML to JSX can be done with some changes 
- stricter tag closing. 
- camel case attributes for tags. classNames 
- a single wrapping element (Fragment), because JSX is converted to javascript and from a function of javascript we can return only one object , unless it's wrapped in an array, hence the element wrapping.

A single {} in JSX - for strings, function calls. 
```
<h1>To Do List for {formatDate(today)}</h1>
```

A double curlies. {{}}
passing objects, or style definitions for jsx tags.

Side effects
- Anything not related to rendering of components are called as side effects.
- operations can interact with browser (set inner html), fetch data (fetch call)

Hooks
- introduced in react 16.8, earlier code was class based. 
- not as functional components were introduced, to support lifecycle methods in functional components, the concepts of hooks were introduced.

use Effect
- for side effects in functional comps. 

useCallback
- to memoize the function.

useEffect
- if any dependencies are associated, function will run whenever the dependencies are changed.

useMemo
- to memoize the value.
- based on the dependencies, the value will be calculated.
- if the dependencies are not changed, the value will be returned from the cache.

reconcillation
- process of updating the DOM with the latest changes. react heavy lifts this for us.

useNavigate - not reloading the entire page for navigating to a new page.
- window.location.href alternative.

Lazy loading
- as name suggests, loading the component only when it is needed.
- react lazy and suspense are used for this.

Prop drilling
- doesn't mean that rendering is slow or components are re-loaded because the parameters are passed downwards.

Context API
- to avoid prop drilling. but not performant.

Statement management library.
- To avoid context API we can use recoil - state management library.
- it works in a similar way as we use 'useState' in react.
- but it is not a replacement for useState.
- refer recoil-sm folder for it's use.

some weird error: 
- Uncaught TypeError: Cannot destructure property 'ReactCurrentDispatcher' of 'import_react.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED' as it is undefined.

Solution
- npm install react@18 react-dom@18
-npm install recoil@0.7.7
