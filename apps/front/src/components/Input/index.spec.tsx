import { render } from "@testing-library/react"
import Input from "."

describe("<Input>", function(){
    it("should render Input", function(){
      const { getByRole }  = render(<Input type="text" name="name"/>)
      const inputElement = getByRole('input')

      expect(inputElement).toBeInTheDocument()
    })
})