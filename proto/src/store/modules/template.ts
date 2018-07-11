import { Module, GetterTree, ActionTree, MutationTree, ModuleTree } from 'vuex'

// export interface Module<S, R> {
//     namespaced?: boolean;
//     state?: S | (() => S);
//     getters?: GetterTree<S, R>;
//     actions?: ActionTree<S, R>;
//     mutations?: MutationTree<S>;
//     modules?: ModuleTree<R>;
//   }
export class ModuleTemplate<S, R> implements Module<S, R> {
    readonly namespaced?: boolean;
    readonly state?: S | (() => S)
    readonly getters?: GetterTree<S, R>
    readonly actions?: ActionTree<S, R>
    readonly mutations?: MutationTree<S>
    readonly modules?: ModuleTree<R>;

    constructor(options: {
        namespaced?: boolean,
        state?: S | (() => S),
        getters?: GetterTree<S, R>,
        actions?: ActionTree<S, R>,
        mutations?: MutationTree<S>,
        modules?: ModuleTree<R>
    }) {
        this.namespaced = options.namespaced
        this.state = options.state
        this.getters = options.getters
        this.actions = options.actions
        this.mutations = options.mutations
        this.modules = options.modules
    }
}
