- Installation 

```bash
npm i @preact/signals-react
```


### in src>state-management-signals>singleState.js ::


```js
import { batch, computed, effect, signal } from "@preact/signals-react";


 const count = signal(0); /// ! you can declare it outside of function

const SingleState = () => {
    /// used useState/
  //   const [count, setCount] = useState(0);

  //   const increment = (num) => {
  //     setCount(count + num);
  //   };

  //   const decrement = (num) => {
  //     setCount(count - num);
  //   };

 

  //   const increment = (val) => (count.value += val);
  const decrement = (val) => (count.value -= val);

  //! without useEffect //

  effect(() => console.log(`Hello world`));
  effect(() => console.log(`Update count is  ${count.value}`));

  //! double signal

    const double = signal(0);
    const increment = (val) => {
      //! batch for multiple operation //
      batch(() => {
        count.value += val;
        double.value = count.value * 2;
      });
    };

  //! computed value for change multiple action with a computed ///

  const double = computed(() => count.value * 2);
  const increment = (val) => (count.value += val);


  return ()
}

```