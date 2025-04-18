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