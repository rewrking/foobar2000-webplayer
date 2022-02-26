import { createStore, makeRootStoreProvider } from "@rewrking/react-kitchen";

import { FoobarState } from "./FoobarState";

const [FoobarStoreProvider, useFoobarStore, foobarStore] = createStore(FoobarState);

const Providers = makeRootStoreProvider([FoobarStoreProvider]);

export { Providers, useFoobarStore, foobarStore };
