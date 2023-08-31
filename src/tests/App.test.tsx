import { afterEach, describe, expectTypeOf, assertType, it, vi } from 'vitest'
import { getLabel } from "./test"

describe(`Testing Types`, () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })
    it(`関数であるかどうかと、引数の型を検証する`, () => {
        //! 関数であるかどうか
        expectTypeOf(getLabel).toBeFunction()

        //! 引数の型を検証する
        expectTypeOf(getLabel).parameter(0).toMatchTypeOf<string>()
        expectTypeOf(getLabel).parameter(1).toMatchTypeOf<number>()
		console.log("hoge")
        //! まとめて検証
        assertType(getLabel('名前', 1))
    })
})