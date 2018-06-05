import { FormTypes } from '../FormTypes';
import { Form } from './Form';
import { TestForm } from './TestForm';
import { FooForm } from './FooForm';

export class FormFactory {

    static getForm(type: FormTypes): Form {
        switch(type) {
            case FormTypes.Test:
                return new TestForm()
            case FormTypes.Foo:
                return new FooForm()
            default:
                return new TestForm()
        }
    }
}
