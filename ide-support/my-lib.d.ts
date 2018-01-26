export namespace anamespace {
  /**
   * @interface
   */
  export interface IInterface {
    firstInterfaceMember()
    secondInterfaceMember()
    thirdInterfaceMember()
  }

  export abstract class BaseClass implements anamespace.IInterface {
    firstInterfaceMember();
    secondInterfaceMember();
    thirdInterfaceMember();

    /**
     * @abstract
     */
    abstract baseClassMethod();
  }

  export class OtherClass {
    /**
     * @param {anamespace.IInterface} thing
     */
    handleInterface(thing:anamespace.IInterface):void
  }
}

type namespace_type = typeof anamespace;