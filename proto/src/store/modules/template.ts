import {
    ActionTree,
    GetterTree,
    Module,
    ModuleTree,
    MutationTree,
} from 'vuex';

// export interface Module<S, R> {
//     namespaced?: boolean;
//     state?: S | (() => S);
//     getters?: GetterTree<S, R>;
//     actions?: ActionTree<S, R>;
//     mutations?: MutationTree<S>;
//     modules?: ModuleTree<R>;
//   }
export class ModuleTemplate<S, R> implements Module<S, R> {
    public readonly namespaced?: boolean;
    public readonly state?: S | (() => S);
    public readonly getters?: GetterTree<S, R>;
    public readonly actions?: ActionTree<S, R>;
    public readonly mutations?: MutationTree<S>;
    public readonly modules?: ModuleTree<R>;

    constructor(options: {
        namespaced?: boolean,
        state?: S | (() => S),
        getters?: GetterTree<S, R>,
        actions?: ActionTree<S, R>,
        mutations?: MutationTree<S>,
        modules?: ModuleTree<R>,
    }) {
        this.namespaced = options.namespaced;
        this.state = options.state;
        this.getters = options.getters;
        this.actions = options.actions;
        this.mutations = options.mutations;
        this.modules = options.modules;
    }
}
