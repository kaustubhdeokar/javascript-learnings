# Throttling
Throttling is a technique used in programming to limit the number of times a function can be called over a specific period. It is often used in scenarios where you want to control the rate at which a function is executed, such as when making API requests or handling user input events.

## Example
```javascript
function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

# Debouncing
- Debouncing is a technique used in programming to ensure that a function is not called too frequently. It is often used in scenarios where you want to limit the rate at which a function is executed, such as when handling user input events or making API requests.
## Example
```javascript
function debounce(func, delay) {
    let timeoutId;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
```