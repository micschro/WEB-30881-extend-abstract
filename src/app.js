function fn(/**@type namespace_type*//**typeof anamespace*/ anamespace) {

  class MyImplementation extends anamespace.BaseClass {
    baseClassMethod () {}
  }

  const instance = new MyImplementation()

  new anamespace.OtherClass().handleInterface(instance) // Argument type MyImplementation is not assignable to parameter type IInterface
}