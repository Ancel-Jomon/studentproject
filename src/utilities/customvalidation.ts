import * as Yup from "yup";




export default function validations() {
    Yup.addMethod(Yup.string, "startWithUpperCase", function () {
        return this.test("start-with-uppercase", "starting letter should be uppercase", function (value) {
            if (value && value.length > 0) {
                const firstchar = value.substring(0, 1)
                return firstchar === firstchar.toUpperCase()
            }
            return true
        })
    })
}

