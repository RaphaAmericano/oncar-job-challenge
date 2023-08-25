import { render } from "@testing-library/react"
import Label from "."

describe("<Label>", function(){
    it("should render label", function(){
        const { getByText, getByRole } = render(<Label>Email</Label>)
        
        const labelElement = getByRole('label')
        const labelTextElement = getByText("Email")

        expect(labelElement).toBeInTheDocument()
        expect(labelTextElement).toBeInTheDocument()
    });
    
})